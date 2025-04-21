
/* import {
    Link,
    NavLink
} from "react-router-dom";


export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <div className="container-fluid ">
                <Link className="navbar-brand" style={{ color: '#22BABB' }}
                    to="/about">
                    <img src="/img/logo.png"
                        alt="logo"
                        style={{ width: '85px', height: '74px' }} />
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
                    <div className="navbar-nav ms-auto">
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
 */
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [showScroll, setShowScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ color: '#22BABB' }} to="/about">
                        <img
                            src="/img/logo.png"
                            alt="logo"
                            style={{ width: '85px', height: '74px' }}
                        />
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
                        <div className="navbar-nav ms-auto">
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

                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to="/projects"
                                style={({ isActive }) => ({
                                    color: isActive ? '#22BABB' : 'white',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    borderBottom: isActive ? '1px solid #22BABB' : 'none'
                                })}
                            >
                                Proyectos
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to="/skills"
                                style={({ isActive }) => ({
                                    color: isActive ? '#22BABB' : 'white',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    borderBottom: isActive ? '1px solid #22BABB' : 'none'
                                })}
                            >
                                Tecnologías
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
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
            </nav>

            {showScroll && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        backgroundColor: "transparent",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        zIndex: 1000,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <i className="bi bi-arrow-up-circle-fill"
                        style={{ color: "white", fontSize: "26px" }}></i>
                </button >
            )}
        </>
    );
};