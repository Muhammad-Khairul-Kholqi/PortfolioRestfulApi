const profileModels = require('../model/modProfile');

// fungsi ambil semua data
const getAllDataProfile = async (req, res) => {
    try {
        const [data] = await profileModels.getAllDataProfile();

        res.json({
            message: "GET Semua Data Sukses",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal Ambil Data",
            serverMessage: error,
        });
    }
};

// fungsi ambil satu data berdasarkan id
const getAllDataProfileById = async (req, res) => {
    try {
        const { id } = req.params;
        const [data] = await profileModels.getAllDataProfileById(id);

        if (!data.length) {
            return res.status(404).json({
                message: "Tidak Ada Data",
            });
        }

        res.json({
            message: `Sukses GET Data Dari id ${id}`,
            data: data[0]
        });
    } catch (error) {
        res.status(500).json({
            message: "NOT FOUND GET DATA",
            serverMessage: error,
        });
    }
};

// fungsi update data
const updateDataProfile = async (req, res) => {
    console.log(req.file); // Cek apakah file ada
    console.log(req.body); // Cek data body

    const { id } = req.params;
    const { name, username, address, short_description, long_description } = req.body;
    const imagePath = req.file ? req.file.path.replace(/\\/g, '/') : null;

    try {
        if (!name || !username || !address || !short_description || !long_description || !imagePath) {
            return res.status(400).json({
                message: "Masukan Semua Data"
            });
        }

        await profileModels.updateDataProfile(imagePath, name, username, address, short_description, long_description, id);
        res.json({
            message: "Update Data Sukses",
            data: { id, name, username, address, short_description, long_description, image: imagePath }
        });
    } catch (error) {
        res.status(500).json({
            message: "Update Data Gagal",
            serverMessage: error.message,
        });
    }
};


module.exports = {
    getAllDataProfile,
    updateDataProfile,
    getAllDataProfileById
};
