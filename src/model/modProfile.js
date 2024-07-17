const dbPool = require('../config/database');

// db ambil semua data
const getAllDataProfile = () => {
    const sqlQuery = 'SELECT * FROM profile';

    return dbPool.execute(sqlQuery);
};

// db ambil data berdasarkan id
const getAllDataProfileById = (id) => {
    const sqlQuery = 'SELECT * FROM profile WHERE id=?';

    return dbPool.execute(sqlQuery, [id]);
};

// db update data
const updateDataProfile = async (image, name, username, address, short_description, long_description, id) => {
    try {
        const sqlQuery = `UPDATE profile SET image=?, name=?, username=?, address=?, short_description=?, long_description=? WHERE id=?`;
        await dbPool.execute(sqlQuery, [image, name, username, address, short_description, long_description, id]);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllDataProfile,
    updateDataProfile,
    getAllDataProfileById
};
