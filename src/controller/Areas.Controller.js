import pool from "@/database/db";

export const GetAll = async () => {
    const querie = "SELECT Id, Nome FROM Area";
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie);
            resolve(result.recordsets[0]);
        } catch (error) {
            reject(error);
        }
    });
}


export const GetById = async (id) => {
    const querie = `SELECT Id, Nome FROM Area WHERE Id = '${id}'`;
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie);
            resolve(result.recordsets[0]);
        }
        catch (error) {
            reject(error);
        }
    });
}

export const Add = async (analista) => {
    const querie = `INSERT INTO Area (Nome) VALUES ('${analista.Nome}')`;
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie);
            resolve(true)
        } catch (error) {
            reject(false)
        }
    })
}

export const Update = async (analista) => {
    const querie = `UPDATE Area SET Nome = '${analista.Nome}' WHERE Id = '${analista.Id}'`;
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie);
            resolve(true);
        } catch (error) {
            reject(error)
        }
    })
}

export const Delete = async (id) => {
    const querie = `DELETE FROM Area WHERE Id = '${id}'`;
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie);
            resolve(true);
        } catch (error) {
            reject(error);
        }
    })
}


