import HeaderPage from "@/components/HeaderPage";
import { useEffect, useLayoutEffect, useState } from "react";
import { ConvertToPtBRDateFormatSmall } from './../../helper/index';

const Empresas = () => {
    const urlRoot = "chamados";
    const [chamadoList, setChamadoList] = useState([])

    useEffect(() => {
        LoadData().then(data => {
            setChamadoList(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const LoadData = async () => {
        try {
            const response = await fetch(`/api/${urlRoot}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "AreaId": '6ff0b99e-9a04-4b4d-9851-ae8e7a02554f'
                },
            });
            const data = await response.json();
            return data
        } catch (error) {
            console.log(error);
        }
    }

    const RemoveData = (id) => {
        if (confirm("Deseja realmente remover o chamado?")) {
            fetch(`/api/${urlRoot}/${id}`, {
                method: "DELETE"
            }).then(response => {
                if (response) {
                    LoadData().then(data => {
                        setAndamentoList(data)
                    });
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }


    return (
        <>
            <HeaderPage title="Chamados" pageType="index" accessKey="c" textBt="Cadastrar" linkToBack={`/${urlRoot}/AddOrEdit/0`} iconBt="fas fa-plus-circle me-2"></HeaderPage>
            <div className="row">
                <div className="col">
                    <table className="table table-bordered table-sm" id="tbChamados">
                        <thead>
                            <tr>
                                <th className="">Assunto</th>
                                <th className="">Data</th>
                                <th className="d-none d-lg-table-cell">Dias</th>
                                <th className="d-none d-lg-table-cell">Empresa</th>
                                <th className="d-none d-md-table-cell">Analista</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(chamadoList) &&
                                chamadoList.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="">{item.Assunto}</td>
                                            <td className="">{ConvertToPtBRDateFormatSmall(item.DtSolicitacao)}</td>
                                            <td className="d-none d-lg-table-cell">{item.DiasCorridos}</td>
                                            <td className="d-none d-lg-table-cell">{item.Empresa}</td>
                                            <td className="d-none d-md-table-cell">{item.Analista}</td>
                                            <td>
                                                <a href={`/${urlRoot}/AddOrEdit/${item.Id}`} className="me-2">
                                                    <i className="fas fa-edit"></i>
                                                </a>
                                                <span className="text-danger" onClick={(e) => { RemoveData(item.Id) }}>
                                                    <i className="fas fa-trash"></i>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Empresas;