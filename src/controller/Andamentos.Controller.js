import pool from "@/database/db";

export const GetAll = async () => {
    const querie = "SELECT Id, Nome FROM Andamento";
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
    const querie = `SELECT Id, Nome FROM Andamento WHERE Id = '${id}'`;
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

export const Add = async (andamento) => {
    const querie = `INSERT INTO Andamento (Nome) VALUES ('${andamento.Nome}')`;
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

export const Update = async (andamento) => {
    const querie = `UPDATE Andamento SET Nome = '${andamento.Nome}' WHERE Id = '${andamento.Id}'`;
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
    const querie = `DELETE FROM Andamento WHERE Id = '${id}'`;
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


