import { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./education.css";

const projects = [
    { id: 1, image: "/img/diploma_bd.jpg", title: "Diploma en Bases de Datos" },
    { id: 2, image: "/img/cert_java.jpg", title: "Certificado en Java" },
    { id: 3, image: "/img/diploma_fullstack_node.jpg", title: "Diploma FullStack Node.js" },
    { id: 4, image: "/img/diploma_bd.jpg", title: "Diploma en Bases de Datos" },
];

export const Education = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
        setIsPaused(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsPaused(false);
    };

    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <h2 className="animate__animated animate__bounceInDown">Certificados</h2>
            </div>


            <Carousel interval={isPaused ? null : 3000} pause={isPaused ? "hover" : false}>
                {projects.map((project) => (
                    <Carousel.Item key={project.id}>
                        <div className="text-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                                onClick={() => handleImageClick(project.image)}
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>{project.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body className="text-center">
                    {selectedImage && <img src={selectedImage} alt="" className="full-image" />}
                </Modal.Body>
            </Modal>
        </div>
    );
};
