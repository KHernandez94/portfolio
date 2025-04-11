import comics from './../../public/img/comics.jpg';
import gif_app from './../../public/img/gif_app.jpg';
import calculadora from './../../public/img/calculadora.jpg';

export const ProjectsPage = () => {
    return (
        <div className="container text-center" style={{ overflowX: 'hidden', paddingBottom: '5rem' }}>
            <div className='mt-5'>
                <h1 className="animate__animated animate__bounceInDown">Mis Proyectos</h1>
            </div>

            <div className="row justify-content-evenly" style={{ gap: '2rem', marginTop: '5rem' }}>

                {/* === CARD === */}
                <div className="col-12 col-md-5 col-lg-4 mb-5">
                    <div
                        className="animate__animated animate__fadeInRight"
                        style={{
                            border: '2px solid white',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <img
                            src={calculadora}
                            className="card-img-top"
                            alt="Calculadora"
                            style={{ height: '230px', objectFit: 'cover' }}
                        />
                        <div className="card-body" style={{ padding: '20px', background: '#196774', color: 'white' }}>
                            <h5 className="card-title">Calculadora Interactiva</h5>
                            <div className="row align-items-end mt-4">
                                <div className="col">
                                    <a href="https://github.com/KHernandez94/Calculadora.git"
                                        className="btn btn-info me-2"
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        style={{ backgroundColor: "#265C8C", color: "white" }}>
                                        Code
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://calc-interactiva.netlify.app/"
                                        className="btn"
                                        style={{ backgroundColor: '#84A9BF' }}
                                        target='_blank'
                                        rel="noopener noreferrer">
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === REPETIR PARA OTRAS DOS === */}
                <div className="col-12 col-md-5 col-lg-4 mb-5">
                    <div className="animate__animated animate__fadeInRight" style={{
                        border: '2px solid white',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        width: '100%',
                        height: '100%'
                    }}>
                        <img
                            src={gif_app}
                            className="card-img-top"
                            alt="Gif App"
                            style={{ height: '230px', objectFit: 'cover' }}
                        />
                        <div className="card-body" style={{ padding: '20px', background: '#196774', color: 'white' }}>
                            <h5 className="card-title">Gif App</h5>
                            <div className="row align-items-end mt-4">
                                <div className="col">
                                    <a href="https://github.com/KHernandez94/react-gif-expert.git"
                                        className="btn btn-info me-2"
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        style={{ backgroundColor: "#265C8C", color: "white" }}>
                                        Code
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://project-gif-app.netlify.app/"
                                        className="btn"
                                        style={{ backgroundColor: '#84A9BF' }}
                                        target='_blank'
                                        rel="noopener noreferrer">
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-5 col-lg-4 mb-5">
                    <div className="animate__animated animate__fadeInRight" style={{
                        border: '2px solid white',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        width: '100%',
                        height: '100%'
                    }}>
                        <img
                            src={comics}
                            className="card-img-top"
                            alt="Heroes App"
                            style={{ height: '230px', objectFit: 'cover' }}
                        />
                        <div className="card-body" style={{ padding: '20px', background: '#196774', color: 'white' }}>
                            <h5 className="card-title">Heroes App</h5>
                            <div className="row align-items-end mt-4">
                                <div className="col">
                                    <a href="https://github.com/KHernandez94/heroesApp.git"
                                        className="btn btn-info me-2"
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        style={{ backgroundColor: "#265C8C", color: "white" }}>
                                        Code
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://project-heroes.netlify.app/"
                                        className="btn"
                                        style={{ backgroundColor: '#84A9BF' }}
                                        target='_blank'
                                        rel="noopener noreferrer">
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
