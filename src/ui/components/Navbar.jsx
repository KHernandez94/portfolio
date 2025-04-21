
import {
    Link,
    NavLink
} from "react-router-dom";


export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <div className="container-fluid">
                <Link className="navbar-brand" style={{ color: '#22BABB' }}
                    to="/about">
                    Mi Portfolio
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav"
                    >

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive ? '#22BABB' : 'white',
                                fontWeight: isActive ? 'bold' : 'normal',
                                borderBottom: isActive ? '1px solid #22BABB' : 'none'
                            })}
                        >
                            Sobre Mí
                        </NavLink>

                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/projects"
                            style={({ isActive }) => ({
                                color: isActive ? '#22BABB' : 'white',
                                fontWeight: isActive ? 'bold' : 'normal',
                                borderBottom: isActive ? '1px solid #22BABB' : 'none'
                            })}
                        >
                            Proyectos
                        </NavLink>

                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/skills"
                            style={({ isActive }) => ({
                                color: isActive ? '#22BABB' : 'white',
                                fontWeight: isActive ? 'bold' : 'normal',
                                borderBottom: isActive ? '1px solid #22BABB' : 'none'
                            })}
                        >
                            Tecnologías
                        </NavLink>

                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive ? '#22BABB' : 'white',
                                fontWeight: isActive ? 'bold' : 'normal',
                                borderBottom: isActive ? '1px solid #22BABB' : 'none'
                            })}
                        >
                            Contacto
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav >
    )
}

