import { ConvertNumberTwoDigits, ConvertToMesSigla } from "@/helper";
import { useEffect, useState } from "react";

const AbertuasEncerramentos = () => {
    const [aberturasEncerramentos, setAberturasEncerramentos] = useState({})

    const LoadAberturasEncerramentos = async () => {
        const res = await fetch('/api/dashboard/aberturas-encerramentos')
        const data = await res.json()
        setAberturasEncerramentos(data)
    }

    useEffect(() => {
        LoadAberturasEncerramentos()
    }, [])


    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Aberturas x Encerramentos</h5>
                            <table className="table table-sm table-bordered">
                                <thead>
                                    <tr>
                                        <th>Ano / Mês</th>
                                        <th>Abert</th>
                                        <th>Encerr</th>
                                        <th style={{ width: '65px' }}>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Array.isArray(aberturasEncerramentos) &&
                                        aberturasEncerramentos.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.AnoSolicitacao} / {ConvertToMesSigla(item.MesSolicitacao)}</td>
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

export default AbertuasEncerramentos;
