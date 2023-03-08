import HeaderPage from "@/components/HeaderPage";
import { useEffect, useLayoutEffect, useState } from "react";

const Empresas = () => {
    const urlRoot = "empresas";
    const [empresaList, setEmpresaList] = useState([])

    const LoadData = async () => {
        try {
            const response = await fetch(`/api/${urlRoot}`);
            const data = await response.json();
            return data
        } catch (error) {
            console.log(error);
        }
    }

    const RemoveData = (id) => {
        if (confirm("Deseja realmente remove a empresa?")) {
            fetch(`/api/${urlRoot}/${id}`, {
                method: "DELETE"
            }).then(response => {
                if (response) {
                    LoadData().then(data => {
                        setEmpresaList(data)
                    });
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        LoadData().then(data => {
            setEmpresaList(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <>
            <HeaderPage title="Empresas" pageType="index" accessKey="c" textBt="Cadastrar" linkToBack={`/${urlRoot}/AddOrEdit/0`} iconBt="fas fa-plus-circle me-2"></HeaderPage>
            <div className="row">
                <div className="col">
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Empresa</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(empresaList) &&
                                empresaList.map((item, index) => {
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