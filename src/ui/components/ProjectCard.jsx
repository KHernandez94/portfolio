import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const ProjectCard = ({ img, title, repoLink, liveLink }) => {
    return (
        <div className="col-12 col-md-5 col-lg-4 mb-5">
            <div
                className="animate__animated animate__fadeInRight"
                style={{
                    border: `2px solid #212529`,
                    borderRadius: '15px',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%'
                }}
            >
                <img
                    src={img}
                    className="card-img-top"
                    alt={title}
                    style={{ height: '230px', objectFit: 'cover' }}
                />
                <div className="card-body" style={{ padding: '20px', background: '#e9ecef', color: '#212529' }}>
                    <h5 className="card-title">{title}</h5>
                    <div className="row align-items-end mt-4">
                        <div className="col">
                            <a
                                href={repoLink}
                                className="btn btn-info me-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: "#265C8C", color: "white" }}
                            >
                                <FaGithub className="me-1" /> Code
                            </a>
                        </div>
                        <div className="col">
                            <a
                                href={liveLink}
                                className="btn"
                                style={{ backgroundColor: '#84A9BF', color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaExternalLinkAlt className="me-1" /> Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
