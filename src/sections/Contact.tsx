import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/Bs";
import { routes } from '../data';
import '../styles/contact.scss';
import { ReactElement } from "react";

export const Contact = () => {

    const icons: ReactElement<any, any>[] = [<FaFacebookF/>, <BsTwitter/>, <BsInstagram/>];

    return (
        <section id='contact' className='contact'>
            <div className="contact__container">
                <div className="contact__top">
                    <div className="logo__container">
                        <p>Logo</p>
                    </div>
                    <div className="contact__form">
                        <p>Listo para iniciar?</p>
                        <button>Comenzar</button>
                    </div>
                </div>
                <div className="contact__mid">
                    <div className="left__content">
                        <p>Mantente al dia con nosotros.</p>
                        <div className="input__container">
                            <input type="text" placeholder='Email' />
                            <button>Enviar</button>
                        </div>
                    </div>
                    <div className="right__content">
                        <ul className="routes__list">
                            {routes.map(value => (
                                <li key={value.name} className='route'>
                                    {value.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="contact__bottom">
                    <div className="left__bottom">
                        <ul>
                            <li>Terminos & condiciones</li>
                            <li>Politicas de privacidad</li>
                        </ul>
                    </div>
                    <div className="right__bottom">
                        <ul>
                            {
                                icons.map((icon,i)=>(
                                    <li key={i}>{icon}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
