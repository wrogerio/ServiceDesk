import pool from "@/database/db";

export const GetAll = async (areaId, andamentoid) => {
    const querie = `SELECT  Id, AnalistaId, Analista, AndamentoId, Andamento, EmpresaId, Empresa, AreaId, Area, DtSolicitacao, DtSolicitacaoString, 
                            DtEncerramento, DiasCorridos, Solicitante, Assunto, Descricao
                    FROM    vPage_Chamados
                    WHERE   AreaId = '${areaId}' and AndamentoId <> '3031781C-ADD3-4137-80E4-53A446E46F0D'
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

export const GetEncerrados = async (areaId, andamentoid) => {
    const querie = `SELECT  TOP 150 Id, AnalistaId, Analista, AndamentoId, Andamento, EmpresaId, Empresa, AreaId, Area, DtSolicitacao, DtSolicitacaoString, 
                            DtEncerramento, DiasCorridos, Solicitante, Assunto, Descricao
                    FROM    vPage_Chamados
                    WHERE   AreaId = '${areaId}' and AndamentoId = '3031781C-ADD3-4137-80E4-53A446E46F0D'
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

export const ReabrirChamado = async (id) => {
    const querie = `UPDATE Chamados SET DtEncerramento = NULL, AndamentoId = '9cece184-380b-44ba-b85b-5ae99d07d152' WHERE Id = '${id}'`
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


