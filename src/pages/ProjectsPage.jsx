
import comics from './../../public/img/comics.jpg';
import gif_app from './../../public/img/gif_app.jpg';
import calculadora from './../../public/img/calculadora.jpg';

export const ProjectsPage = () => {
    return (
        <>
            <div className="container text-center">
                <div className='mt-5'>
                    <h1 className="animate__animated animate__bounceInDown">Mis Proyectos</h1>
                </div>

                <div className="row justify-content-evenly" style={{ gap: '2rem', marginTop: '15%' }}>


                    <div className="col-4" style={{ width: '22rem' }}>
                        <div
                            className="animate__animated animate__fadeInRight"
                            style={{ border: '2px solid white', borderRadius: '10px', overflow: 'hidden' }}
                        >
                            <img
                                src={calculadora}
                                className="card-img-top"
                                alt="Calculadora Interactiva"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div
                                className="card-body"
                                style={{ padding: '15px', background: '#196774', color: 'white' }}
                            >
                                <h5 className="card-title">Calculadora Interactiva</h5>
                                <div
                                    className="row align-items-end"
                                    style={{ marginTop: '2rem' }}
                                >
                                    <div className="col">
                                        <a href="https://github.com/KHernandez94/Calculadora.git"
                                            className="btn btn-info me-2"
                                            target='_blank'
                                            style={{ backgroundColor: "#265C8C", color: "white" }}>
                                            Code
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a
                                            href="https://calc-interactiva.netlify.app/"
                                            className="btn"
                                            style={{ backgroundColor: '#84A9BF' }}
                                            target='_blank'>
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-4" style={{ width: '22rem' }}>
                        <div
                            className="animate__animated animate__fadeInRight"
                            style={{ border: '2px solid white', borderRadius: '10px', overflow: 'hidden' }}
                        >
                            <img
                                src={gif_app}
                                className="card-img-top"
                                alt="Calculadora Interactiva"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div
                                className="card-body"
                                style={{ padding: '15px', background: '#196774', color: 'white' }}
                            >
                                <h5 className="card-title">Gif App</h5>
                                <div
                                    className="row align-items-end"
                                    style={{ marginTop: '2rem' }}
                                >
                                    <div className="col">
                                        <a href="https://github.com/KHernandez94/react-gif-expert.git"
                                            className="btn btn-info me-2"
                                            target='_blank'
                                            style={{ backgroundColor: "#265C8C", color: "white" }}>
                                            Code
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a
                                            href="https://project-gif-app.netlify.app/"
                                            className="btn"
                                            style={{ backgroundColor: '#84A9BF' }}
                                            target='_blank'>
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4" style={{ width: '22rem' }}>
                        <div
                            className="animate__animated animate__fadeInRight"
                            style={{ border: '2px solid white', borderRadius: '10px', overflow: 'hidden' }}
                        >
                            <img
                                src={comics}
                                className="card-img-top"
                                alt="Calculadora Interactiva"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div
                                className="card-body"
                                style={{ padding: '15px', background: '#196774', color: 'white' }}
                            >
                                <h5 className="card-title">Heroes App</h5>
                                <div
                                    className="row align-items-end"
                                    style={{ marginTop: '2rem' }}
                                >
                                    <div className="col">
                                        <a href="https://github.com/KHernandez94/heroesApp.git"
                                            className="btn btn-info me-2"
                                            target='_blank'
                                            style={{ backgroundColor: "#265C8C", color: "white" }}>
                                            Code
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a
                                            href="https://project-heroes.netlify.app/"
                                            className="btn"
                                            style={{ backgroundColor: '#84A9BF' }}
                                            target='_blank'>
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
