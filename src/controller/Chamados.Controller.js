import pool from "@/database/db";

export const GetAll = async (areaId) => {
    const querie = `SELECT  Id, AnalistaId, Analista, AndamentoId, Andamento, EmpresaId, Empresa, AreaId, Area, DtSolicitacao, DtSolicitacaoString, 
                            DtEncerramento, DiasCorridos, Solicitante, Assunto, Descricao
                    FROM    vPage_Chamados
                    WHERE   DtEncerramento IS NULL And AreaId = '${areaId}'
                    ORDER   BY DtSolicitacao DESC`
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
    const querie = `SELECT  Id, AnalistaId, Analista, AndamentoId, Andamento, EmpresaId, Empresa, AreaId, Area, DtSolicitacao, DtSolicitacaoString, 
                            DtEncerramento, DiasCorridos, Solicitante, Assunto, Descricao
                    FROM    vPage_Chamados
                    WHERE   Id = '${id}'`
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

export const FecharChamado = async (id) => {
    const querie = `UPDATE Chamados SET DtEncerramento = GETDATE(), AndamentoId = '3031781c-add3-4137-80e4-53a446e46f0d' WHERE Id = '${id}'`
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.query(querie)
            resolve(true);
        } catch (error) {
            reject(false);
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


