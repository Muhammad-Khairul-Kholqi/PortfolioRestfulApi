const multer = require('multer');

// Konfigurasi penyimpanan
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); // Lokasi penyimpanan file yang diunggah
    },
    filename: (req, file, cb) => {
        // Penamaan file (gunakan timestamp untuk menghindari nama file yang sama)
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Fungsi untuk memeriksa tipe file yang diterima
const fileFilter = (req, file, cb) => {
    // Hanya terima file gambar
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Hanya file gambar yang diizinkan!'), false);
    }
};

// Inisialisasi multer dengan konfigurasi yang telah ditentukan
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Batasan ukuran file (5 MB)
    },
    fileFilter: fileFilter
});

module.exports = upload;
