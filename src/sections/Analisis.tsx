import { onephone } from '../assets';
import { analisis } from '../data';
import '../styles/analisis.scss'
import { useFramerMotion } from '../hooks/useFramerMotion';
import { useRef, useEffect } from 'react';

export const Analisis = () => {
    const ref = useRef(null);
    const { m, inView, control, controlFunction } = useFramerMotion(ref);

    const list = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    };
    const item1 = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stifness: 300,
                damping: 24,
                delay: 0.5,
            },
        },
        hidden: {
            opacity: 0,
            x: -100,
        },
    };
    const item2 = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stifness: 300,
                damping: 24,
                delay: 0.5,
            },
        },
        hidden: {
            opacity: 0,
            x: 100,
        },
    };

    useEffect(() => controlFunction('visible', 'hidden'), [control, inView]);

    return (
        <section className='analisis'>
            <m.div
                ref={ref}
                animate={control}
                variants={list}
                className="data__container" id='funcion'>
                <m.div
                variants={item1}
                    className="left__data">
                    <div className='text_container' >
                        <h1>Como funciona?, dejanos mostrarte.</h1>
                        <p>
                            Commodo dolore irure consectetur fugiat exercitation. Elit aliqua ipsum laboris ad ea. Cillum officia pariatur exercitation amet ad deserunt duis. Occaecat duis nisi commodo et ea occaecat id.
                            Minim ut aliquip dolor anim ipsum. Cillum sunt velit et ullamco non nulla laborum pariatur nisi exercitation veniam. Irure laboris est sit ut quis ea magna do id anim id tempor. Deserunt enim sint eiusmod ad. Occaecat veniam laborum eiusmod incididunt. Sunt sunt excepteur minim ad sit anim ipsum aliqua tempor aliqua nisi veniam ad.
                        </p>
                    </div>
                    <div className="analisis__container">
                        {
                            analisis.map(({ name, data }) => (
                                <div className="data__container" key={name}>
                                    <div className="data__icon">{data}</div>
                                    <p>{name}</p>
                                </div>
                            ))
                        }
                    </div>
                </m.div>
                <m.div variants={item2} className="right__data">
                    <img src={onephone} alt="phone" loading='lazy' />
                </m.div>
            </m.div>
        </section>
    )
}
