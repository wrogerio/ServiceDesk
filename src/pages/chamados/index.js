import HeaderPage from "@/components/HeaderPage";
import { useEffect, useLayoutEffect, useState } from "react";
import { ConvertNumberTwoDigits, ConvertToPtBRDateFormatSmall } from './../../helper/index';

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
                    "areaid": '6ff0b99e-9a04-4b4d-9851-ae8e7a02554f'
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
                        setChamadoList(data)
                    });
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const FecharChamado = (id) => {
        if (confirm("Deseja realmente fechar o chamado ?")) {
            fetch(`/api/${urlRoot}/encerrar/${id}`, {
                method: "GET"
            }).then(response => {
                if (response) {
                    LoadData().then(data => {
                        setChamadoList(data)
                    });
                }
            }).catch(err => {
                console.log(err)
            })

        }
    }

    const getAnalistaPhoto = (analistaId) => {
        if (analistaId.toLowerCase() == 'dfc86d2b-8052-4a3f-a2aa-39d8b4b1d030')
            return <img src="gerio.png" className="imgAnalista border border-2 border-secondary rounded" />
        else if (analistaId.toLowerCase() == 'bfb88692-3c08-4b52-a206-61c4bd413695')
            return <img src="moiza.png" className="imgAnalista border border-2 border-secondary rounded" />
        else
            return <img src="paty.png" className="imgAnalista border border-2 border-secondary rounded" />
    }

    const getColor = (andamento) => {
        if (andamento == 'Homologacao')
            return '#d3d3d3'
        else if (andamento == 'Executando')
            return '#dbfbeb'
        else
            return '#fff'
    }


    return (
        <>
            <HeaderPage title={`Chamados (${ConvertNumberTwoDigits(chamadoList.length)})`} pageType="index" accessKey="c" textBt="Cadastrar" linkToBack={`/${urlRoot}/AddOrEdit/0`} iconBt="fas fa-plus-circle me-2"></HeaderPage>
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-row">
                        <div className="d-flex align-items-center justify-content-center border" style={{ height: 40, backgroundColor: '#fff', width: 150 }}>
                            <span className="fw-bold">Novo</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center border" style={{ height: 40, backgroundColor: '#d3d3d3', width: 150 }}>
                            <span className="fw-bold">Homologacao</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center border" style={{ height: 40, backgroundColor: '#dbfbeb', width: 150 }}>
                            <span className="fw-bold">Executando</span>
                        </div>
                    </div>
                    <table className="table table-bordered table-sm" id="tbChamados">
                        <thead>
                            <tr>
                                <th className="">Assunto</th>
                                <th className="">Data</th>
                                <th className="d-none d-lg-table-cell">Dias</th>
                                <th className="d-none d-lg-table-cell">Empresa</th>
                                <th className="d-none d-md-table-cell">Analista</th>
                                <th className="">Photo</th>
                                <th style={{ width: '50px' }}>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(chamadoList) &&
                                chamadoList.map((item, index) => {
                                    return (
                                        <tr key={index} style={{ backgroundColor: getColor(item.Andamento) }}>
                                            <td>
                                                <a href={`/${urlRoot}/AddOrEdit/${item.Id}`}>
                                                    {item.Assunto}
                                                </a>
                                            </td>
                                            <td className="">{ConvertToPtBRDateFormatSmall(item.DtSolicitacao)}</td>
                                            <td className="d-none d-lg-table-cell">{item.DiasCorridos}</td>
                                            <td className="d-none d-lg-table-cell">{item.Empresa}</td>
                                            <td className="d-none d-md-table-cell">{item.Analista}</td>
                                            <td className="" onDoubleClick={() => FecharChamado(item.Id)}>
                                                {getAnalistaPhoto(item.AnalistaId)}
                                            </td>
                                            <td>
                                                <a href={`/${urlRoot}/AddOrEdit/${item.Id}`}>
                                                    <i className="fas fa-edit"></i>
                                                </a>
                                                {/* <span className="text-danger" onClick={(e) => { RemoveData(item.Id) }}>
                                                    <i className="fas fa-trash"></i>
                                                </span> */}
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