import { EmailForm } from "../components/EmailForm/EmailForm";


export const ContactPage = () => {
    return (
        <div className="mt-5">
            <div className="row">
                <h1 className="animate__animated animate__bounceInDown">Contáctame</h1>
            </div>
            <div className="row">
                <h2>¿Tienes alguna pregunta?

                </h2>
            </div>
            <div className="row">
                <h3 className="text-center mb-5">No dudes en contáctarme</h3>
            </div>
            <EmailForm />

        </div>
    );
};


