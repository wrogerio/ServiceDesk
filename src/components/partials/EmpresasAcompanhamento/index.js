import { ConvertNumberTwoDigits, ConvertToMesSigla } from "@/helper";
import { useEffect, useState } from "react";

const EmpresasAcompanhamento = () => {
    const [empresasAcompanhamento, setEmpresasAcompanhamento] = useState({})

    const LoadEmpresasAcompanhemento = async () => {
        const res = await fetch('/api/dashboard/empresas-acompanhamento')
        const data = await res.json()
        setEmpresasAcompanhamento(data)
    }

    useEffect(() => {
        LoadEmpresasAcompanhemento()
    }, [])


    return (
        <>
            <div className="row mb-2">
                <div className="col">
                    <div className="card">
                        <div className="card-body p-2">
                            <h5 className="card-title text-danger">Empresas x Acompanhamento</h5>
                            <table className="table table-sm table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th>Empresa</th>
                                        <th>Abert</th>
                                        <th>Encerr</th>
                                        <th style={{ width: '65px' }}>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Array.isArray(empresasAcompanhamento) &&
                                        empresasAcompanhamento.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.Empresa}</td>
                                                    <td>{item.Aberturas}</td>
                                                    <td>{item.Encerramentos}</td>
                                                    <td>{parseFloat(item.Porcentagem).toFixed(2)}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmpresasAcompanhamento;
