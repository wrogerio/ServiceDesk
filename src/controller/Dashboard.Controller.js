import pool from "@/database/db";

export const GetAbertuarasEncerramentos = async () => {
    const querie = `SELECT  TOP 3 AnoSolicitacao, MesSolicitacao, Aberturas, Encerramentos, Porcentagem
                    FROM    vReport_AberturasEncerramentos
                    ORDER   BY AnoSolicitacao DESC, MesSolicitacao DESC`
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

export const GetEmpresasAcompanhamento = async () => {
    const querie = `SELECT  Empresa, Aberturas, Encerramentos, Porcentagem
                    FROM    vReport_EmpresasAberturasEncerramentos
                    ORDER   BY Empresa`
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
