import pool from "@/database/db";

export const GetAll = async (areaId) => {
    const querie = `SELECT  c.Id, c.AnalistaId, a.Nome AS Analista, c.AndamentoId, an.Nome As Andamento, c.EmpresaId, e.Nome AS Empresa, 
                            c.AreaId, ar.Nome AS Area, c.DtSolicitacao, c.DtEncerramento, DATEDIFF(DAY, c.DtSolicitacao, CASE WHEN c.DtEncerramento IS NULL THEN GETDATE() ELSE c.DtEncerramento END) AS DiasCorridos, c.Solicitante, c.Assunto, c.Descricao
                    FROM    Chamados c
                            INNER JOIN Analistas a ON c.AnalistaId = a.Id
                            INNER JOIN Andamento an ON c.AndamentoId = an.Id
                            INNER JOIN Empresas e ON c.EmpresaId = e.Id
                            INNER JOIN Area ar ON c.AreaId = ar.Id
                    WHERE   c.DtEncerramento IS NULL And AreaId = '${areaId}'
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
    const querie = `SELECT  c.Id, c.AnalistaId, a.Nome AS Analista, c.AndamentoId, an.Nome As Andamento, c.EmpresaId, e.Nome AS Empresa, 
                            c.AreaId, ar.Nome AS Area, c.DtSolicitacao, Format(DtSolicitacao, 'yyyy-MM-dd') As DtSolicitacaoString, c.DtEncerramento, DATEDIFF(DAY, c.DtSolicitacao, CASE WHEN c.DtEncerramento IS NULL THEN GETDATE() ELSE c.DtEncerramento END) AS DiasCorridos, c.Solicitante, c.Assunto, c.Descricao
                    FROM    Chamados c
                            INNER JOIN Analistas a ON c.AnalistaId = a.Id
                            INNER JOIN Andamento an ON c.AndamentoId = an.Id
                            INNER JOIN Empresas e ON c.EmpresaId = e.Id
                            INNER JOIN Area ar ON c.AreaId = ar.Id
                    WHERE   c.Id = '${id}'`
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

export const Add = async (chamado) => {
    const querie = `    INSERT INTO Chamados 
                        (AnalistaId, AndamentoId, EmpresaId, AreaId, DtSolicitacao, Solicitante, Assunto, Descricao)  
                        VALUES 
                        ('${chamado.AnalistaId}', '${chamado.AndamentoId}', '${chamado.EmpresaId}', '${chamado.AreaId}', '${chamado.DtSolicitacao}', 
                        '${chamado.Solicitante}', '${chamado.Assunto}', '${chamado.Descricao}')`
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


export const Update = async (chamado) => {
    const querie = `UPDATE Chamados SET AnalistaId = '${chamado.AnalistaId}', 
                    AndamentoId = '${chamado.AndamentoId}', EmpresaId = '${chamado.EmpresaId}', 
                    AreaId = '${chamado.AreaId}', DtSolicitacao = '${chamado.DtSolicitacao}', 
                    Solicitante = '${chamado.Solicitante}', Assunto = '${chamado.Assunto}', 
                    Descricao = '${chamado.Descricao}' 
                    WHERE Id = '${chamado.Id}'`
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


