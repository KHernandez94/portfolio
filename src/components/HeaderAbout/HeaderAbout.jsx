
import profile from './../../../public/img/profile.jpg';
import { Img } from './HeaderStyled';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const HeaderAbout = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Desarrolladora FullStack"],
            typeSpeed: 90,
            backSpeed: 65,
            cursorChar: '_',
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <div className="container text-center text-md-start mt-5">
            <div className="row align-items-center">

                <div className="col-md-7">
                    <h1 className="fw-bold">
                        <span className="text-light">Hola, soy </span>
                        <span className="text" style={{ color: '#22BABB'}}  >Katherine Hernández</span>
                    </h1>
                    <h2 ref={typedRef} className="typed-text"></h2>
                </div>


                <div className="col-md-5 text-center animate__animated animate__backInLeft">
                    <Img src={profile} alt="Katherine Hernández" className="img-fluid rounded-circle shadow-lg" />
                </div>
            </div>
        </div>
    );
};
