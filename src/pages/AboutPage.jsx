import { HeaderAbout } from "../components/HeaderAbout/HeaderAbout"
import { SocialMedia } from "../components/SocialMedia/SocialMedia"



export const AboutPage = () => {



    return (
        <div className="container mt-5">
            <div className="row">
                <HeaderAbout />
            </div>
            <div className="row mt-5" style={{ textAlign: 'justify' }}>
                <p>Me describo cómo una persona responsable, comprometida, honesta, me gusta ser colaboradora. y sobre todo me gusta dar lo mejor de mí.
                    Estoy en búsqueda laboral activa para iniciar mi carrera profesional y sobre todo continuar aprendiendo.
                    Mi perfil está orientado a posiciones Front con tecnologías cómo React, JS.
                    Me gusta leer, escuchar música, conocer lugares nuevos, pasar tiempo con mi familia, y me gusta enriquecer mis conocimientos haciendo cursos de manera autónoma.</p>

            </div>
            <div className="row mt-5 row-gap-3">
                <SocialMedia />
            </div>

        </div>

    )
}
