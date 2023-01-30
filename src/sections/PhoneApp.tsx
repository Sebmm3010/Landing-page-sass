import { useEffect } from 'react';
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { twophones } from "../assets";
import { useFramerMotion } from '../hooks/useFramerMotion';
import { item1, item2, list } from "../data";
import '../styles/phone.scss';

export const PhoneApp = () => {

    const { m, inView, control, controlFunction, ref } = useFramerMotion();
    useEffect(() => controlFunction('visible', 'hidden'), [control, inView]);


    return (
        <section id="app" className='application__app'>
            <m.div
                ref={ref}
                animate={control}
                variants={list}
                className="app__container">
                <m.div
                    variants={item1}
                    className="left__distribution">
                    <div className="text__container">
                        <h1>Ya puedes descargar nuestra App!</h1>
                        <p>
                            Ad irure in quis in enim consectetur magna mollit. Ex deserunt est do aliquip. Enim ut velit nostrud qui. Ex reprehenderit fugiat culpa dolore mollit incididunt. Cillum elit laboris irure ea pariatur in. Elit laboris incididunt id excepteur ea do nisi velit ipsum aliqua.
                        </p>
                    </div>
                    <div className="app__buttons">
                        <button><DiAndroid /> Descargar</button>
                        <button><FaApple /> Descargar</button>
                    </div>
                </m.div>
                <m.div
                    variants={item2}
                    className="right__distribution">
                    <img src={twophones} alt="twophones" loading="lazy" />
                </m.div>
            </m.div>
        </section>
    )
}
