import { useState } from "react";
import emailjs from "@emailjs/browser";

export const EmailForm = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validateField = (name, value) => {
        let errorMessage = "";

        if (!value.trim()) {
            errorMessage = "Este campo es obligatorio.";
        } else {
            if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errorMessage = "Formato de email inválido.";
            }
            if (name === "mensaje" && value.length < 10) {
                errorMessage = "El mensaje debe tener al menos 10 caracteres.";
            }
        }

        return errorMessage;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value) || undefined
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        try {
            await emailjs.send("service_7mxnxxd", "template_prl4acq", formData, "5mJ_U8kTBhBUTotX7");
            setSuccessMessage("Correo enviado con éxito!");
            setTimeout(() => setSuccessMessage(""), 3000);
            setFormData({ nombre: "", email: "", mensaje: "" });
            setErrors({});
        } catch (error) {
            alert("Error al enviar el correo.");
        }

        setLoading(false);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>

                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                            placeholder="Tu nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                        {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea
                            id="mensaje"
                            className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
                            name="mensaje"
                            placeholder="Escribe tu mensaje"
                            rows="3"
                            value={formData.mensaje}
                            onChange={handleChange}
                        ></textarea>
                        {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
                    </div>

                    {successMessage && <div className="text-success mb-2" aria-live="polite">{successMessage}</div>}

                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn"
                            disabled={loading}
                            style={{ float: 'right', backgroundColor: '#84A9BF', color: '#274659' }}
                        >
                            {loading ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            ) : (
                                "Enviar"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
