import HeaderPage from "@/components/HeaderPage";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const AddOrEdit = () => {
    const urlRoot = "chamados";
    const [chamado, setChamado] = useState({ AreaId: '6FF0B99E-9A04-4B4D-9851-AE8E7A02554F' })
    const [areas, setAreas] = useState([]);
    const [andamentos, setAndamentos] = useState([]);
    const [analistas, setAnalistas] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const router = useRouter();

    const LoadAndamento = async () => {
        const res = await fetch(`/api/andamentos`);
        const data = await res.json();
        return data
    }

    const LoadAnalistas = async () => {
        const res = await fetch(`/api/analistas`);
        const data = await res.json();
        return data;
    }

    const LoadEmpresas = async () => {
        const res = await fetch(`/api/empresas`);
        const data = await res.json();
        return data;
    }

    const LoadAreas = async () => {
        const res = await fetch(`/api/areas`);
        const data = await res.json();
        return data;
    }

    const LoadDrops = async () => {
        setAndamentos(await LoadAndamento())
        setAnalistas(await LoadAnalistas())
        setEmpresas(await LoadEmpresas())
        setAreas(await LoadAreas())
    }

    useEffect(() => {
        LoadDrops().then(d => {
            const id = window.location.href.split("AddOrEdit/")[1];
            if (id !== "0") {
                loadData().then(data => {
                    if (data) {
                        setChamado(data);
                    }
                })
            }
        });
    }, [])


    const loadData = async () => {
        const id = window.location.href.split("AddOrEdit/")[1];
        const res = await fetch(`/api/${urlRoot}/${id}`);
        const data = await res.json();
        return data[0];
    }

    const handleSubmit = async () => {
        const id = window.location.href.split("AddOrEdit/")[1];
        if (id === "0") {
            const res = await fetch(`/api/${urlRoot}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(chamado)
            })

            if (res) {
                router.push(`/${urlRoot}`);
            }

        } else {
            const res = await fetch(`/api/${urlRoot}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(chamado)
            })

            if (res) {
                router.push(`/${urlRoot}`);
            }
        }
    }

    return (
        <>
            <HeaderPage title="Chamados" pageType="cadastrar" accessKey="v" textBt="Voltar" linkToBack={`/${urlRoot}`} iconBt="fas fa-home me-2"></HeaderPage>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-12 col-md-6 mb-2">
                                    <div className="form-group">Dt Solicitação</div>
                                    <input type="date" className="form-control" autoFocus name="DtSolicitacao" id="DtSolicitacao" value={chamado.DtSolicitacaoString} onChange={e => setChamado({ ...chamado, DtSolicitacao: e.target.value, DtSolicitacaoString: e.target.value })} />
                                </div>
                                <div className="col-12 col-md-6 mb-2">
                                    <div className="form-group">Solicitante</div>
                                    <input type="text" className="form-control" name="Solicitante" id="Solicitante" value={chamado.Solicitante} onChange={e => setChamado({ ...chamado, Solicitante: e.target.value })} />
                                </div>
                                <div className="col-12 mb-2">
                                    <div className="form-group">Assunto</div>
                                    <input type="text" className="form-control" maxLength={30} name="Assunto" id="Assunto" value={chamado.Assunto} onChange={e => setChamado({ ...chamado, Assunto: e.target.value })} />
                                </div>
                                <div className="col-12 mb-2">
                                    <div className="form-group">Descrição</div>
                                    <textarea type="text" className="form-control" maxLength={600} name="Descricao" id="Descricao" rows={7} value={chamado.Descricao} onChange={e => setChamado({ ...chamado, Descricao: e.target.value })}>
                                    </textarea>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 mb-2">
                                    <div className="form-group">Area</div>
                                    <select type="text" className="form-control" name="AreaId" id="AreaId" value={chamado.AreaId} onChange={e => setChamado({ ...chamado, AreaId: e.target.value })}>
                                        <option value="">Selecione</option>
                                        {
                                            Array.isArray(areas) &&
                                            areas.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.Id}>{item.Nome}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 mb-2">
                                    <div className="form-group">Analista</div>
                                    <select type="text" className="form-control" name="AnalistaId" id="AnalistaId" value={chamado.AnalistaId} onChange={e => setChamado({ ...chamado, AnalistaId: e.target.value })}>
                                        <option value="">Selecione</option>
                                        {
                                            Array.isArray(analistas) &&
                                            analistas.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.Id}>{item.Nome}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 mb-2">
                                    <div className="form-group">Empresa</div>
                                    <select type="text" className="form-control" name="EmpresaId" id="EmpresaId" value={chamado.EmpresaId} onChange={e => setChamado({ ...chamado, EmpresaId: e.target.value })}>
                                        <option value="">Selecione</option>
                                        {
                                            Array.isArray(empresas) &&
                                            empresas.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.Id}>{item.Nome}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 mb-2">
                                    <div className="form-group">Andamento</div>
                                    <select type="text" className="form-control" name="AndamentoId" id="AndamentoId" value={chamado.AndamentoId} onChange={e => setChamado({ ...chamado, AndamentoId: e.target.value })}>
                                        <option value="">Selecione</option>
                                        {
                                            Array.isArray(andamentos) &&
                                            andamentos.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.Id}>{item.Nome}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="d-flex justify-content-between">
                                        <span onClick={handleSubmit} className="btn btn-outline-primary" accessKey="s">
                                            <i className="fas fa-save"></i>
                                            <span className="ms-2">Salvar</span>
                                        </span>
                                        <Link href={"/" + urlRoot} className="btn btn-outline-secondary" accessKey="v">
                                            <i className="fas fa-times"></i>
                                            <span className="ms-2">Voltar</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default AddOrEdit;
