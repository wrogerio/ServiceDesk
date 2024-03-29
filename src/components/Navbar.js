import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-2">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    Service Desk
                </Link>
                <button onClick={() => toggleMenu()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={expanded ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarNavAltMarkup">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className={currentRoute == "/" ? "nav-link active" : "nav-link"} href="/" onClick={() => toggleMenu()}>
                                <i className="fas fa-home me-1"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={currentRoute == "/chamados" ? "nav-link active" : "nav-link"} href="/chamados" onClick={() => toggleMenu()}>
                                <i className="fas fa-hand-holding-medical me-1"></i> Chamados
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={currentRoute == "/adm" ? "nav-link active" : "nav-link"} href="/adm" onClick={() => toggleMenu()}>
                                <i className="fas fa-database me-1"></i> Adm
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={currentRoute == "/encerrados" ? "nav-link active" : "nav-link"} href="/encerrados" onClick={() => toggleMenu()}>
                                <i className="fas fa-angel me-1"></i> Encerrados
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={currentRoute == "/empresas" ? "nav-link active" : "nav-link"} href="/empresas" onClick={() => toggleMenu()}>
                                <i className="fas fa-building me-1"></i> Empresas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={currentRoute == "/analistas" ? "nav-link active" : "nav-link"} href="/analistas" onClick={() => toggleMenu()}>
                                <i className="fas fa-user me-1"></i> Analistas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={currentRoute == "/andamentos" ? "nav-link active" : "nav-link"} href="/andamentos" onClick={() => toggleMenu()}>
                                <i className="fas fa-clock me-1"></i> Andamentos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={currentRoute == "/areas" ? "nav-link active" : "nav-link"} href="/areas" onClick={() => toggleMenu()}>
                                <i className="fas fa-cog me-1"></i> Áreas
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
