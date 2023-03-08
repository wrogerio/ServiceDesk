import HeaderPage from "@/components/HeaderPage";
import { useEffect, useLayoutEffect, useState } from "react";

const Empresas = () => {
    const urlRoot = "andamentos";
    const [andamentoList, setAndamentoList] = useState([])

    useEffect(() => {
        LoadData().then(data => {
            setAndamentoList(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const LoadData = async () => {
        try {
            const response = await fetch(`/api/${urlRoot}`, {
                method: "GET"
            });
            const data = await response.json();
            return data
        } catch (error) {
            console.log(error);
        }
    }

    const RemoveData = (id) => {
        if (confirm("Deseja realmente remover o andamento?")) {
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
            <HeaderPage title="Andamentos" pageType="index" accessKey="c" textBt="Cadastrar" linkToBack={`/${urlRoot}/AddOrEdit/0`} iconBt="fas fa-plus-circle me-2"></HeaderPage>
            <div className="row">
                <div className="col">
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Andamento</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(andamentoList) &&
                                andamentoList.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.Nome}</td>
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