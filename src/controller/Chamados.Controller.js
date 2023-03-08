import pool from "@/database/db";

export const GetAll = async () => {
    const querie = `SELECT  c.Id, c.AnalistaId, a.Nome AS Analista, c.AndamentoId, an.Nome As Andamento, c.EmpresaId, e.Nome AS Empresa, c.AreaId, ar.Nome AS Area, c.DtSolicitacao, c.Solicitante, c.Assunto, c.Descricao, c.DtEncerramento
                    FROM    Chamados c
                            INNER JOIN Analistas a ON c.AnalistaId = a.Id
                            INNER JOIN Andamento an ON c.AndamentoId = an.Id
                            INNER JOIN Empresas e ON c.EmpresaId = e.Id
                            INNER JOIN Area ar ON c.AreaId = ar.Id
                    WHERE   c.DtEncerramento IS NULL
                    ORDER   BY c.DtSolicitacao DESC`
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie)
            resolve(result.recordsets[0])
        } catch (error) {
            reject(error)
        }
    })
}

export const GetById = async (id) => {
    const querie = `SELECT Id, Nome FROM Chamados WHERE Id = '${id}'`
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie)
            resolve(result.recordsets[0])
        } catch (error) {
            reject(error)
        }
    })
}

export const Add = async (empresa) => {
    const querie = `INSERT INTO Chamados (Nome) VALUES ('${empresa.Nome}')`
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie)
            resolve(true)
        } catch (error) {
            reject(false)
        }
    })
}


export const Update = async (empresa) => {
    const querie = `UPDATE Chamados SET Nome = '${empresa.Nome}' WHERE Id = '${empresa.Id}'`
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie)
            resolve(true)
        } catch (error) {
            reject(false)
        }
    })
}

export const Delete = async (id) => {
    const querie = `DELETE FROM Chamados WHERE Id = '${id}'`
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie)
            resolve(true)
        } catch (error) {
            reject(false)
        }
    })
}


