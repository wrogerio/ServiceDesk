import HeaderPage from "@/components/HeaderPage";

const Usuarios = () => {
    let urlRoot = "usuarios";

    return (
        <>
            <HeaderPage title="Usuários" pageType="index" accessKey="c" textBt="Cadastrar" linkToBack={`/${urlRoot}/AddOrEdit/0`} iconBt="fas fa-plus-circle me-2"></HeaderPage>
            <div className="row">
                <div className="col">
                    <h1>Um titulo para o componente</h1>
                    <p>Um texto qualquer para o componente</p>
                </div>
            </div>
        </>
    );
};

export default Usuarios;
