import HeaderPage from "@/components/HeaderPage";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const AddOrEdit = () => {
    const urlRoot = "areas";
    const [area, setArea] = useState({})
    const router = useRouter();


    useEffect(() => {
        const id = window.location.href.split("AddOrEdit/")[1];
        if (id !== "0") {
            loadData().then((res) => {
                setArea(res);
            })
        }
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
                body: JSON.stringify(area)
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
                body: JSON.stringify(area)
            })

            if (res) {
                router.push(`/${urlRoot}`);
            }
        }
    }

    return (
        <>
            <HeaderPage title="Areas" pageType="cadastrar" accessKey="v" textBt="Voltar" linkToBack={`/${urlRoot}`} iconBt="fas fa-home me-2"></HeaderPage>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">

                            <div className="row mb-2">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="nome">Area</label>
                                        <input type="text" className="form-control" id="Area" value={area.Nome} name="Area" onChange={(e) => { setArea({ ...area, Nome: e.target.value }) }} />
                                    </div>
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
    );
};

export default AddOrEdit;
