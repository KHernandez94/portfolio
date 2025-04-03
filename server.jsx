import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({ email: "", mensaje: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/enviar-correo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        alert(data.success || data.error);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
            <textarea name="mensaje" placeholder="Mensaje" onChange={handleChange} required></textarea>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default ContactForm;