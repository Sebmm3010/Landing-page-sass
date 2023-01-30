import { useRef, useEffect } from 'react';
import { controlData, variants } from '../data';
import '../styles/control.scss';
import { useFramerMotion } from '../hooks/useFramerMotion';

export const Control = () => {

    // const ref = useRef(null);
    const { inView, m, controlFunction, control,ref }= useFramerMotion();

    useEffect(() => controlFunction('visible', 'hidden', true), [control, inView]);


    return (
        <m.div 
            ref={ref}
            initial='hidden'
            variants={variants}
            animate={control}
        className='control'>
            <div className="control__container">
                <div className="text__container">
                    <h1>Control de datos</h1>
                    <p>
                        Nostrud mollit est qui sint labore laboris. Elit mollit duis ea in sit veniam enim irure commodo aliquip tempor.
                    </p>
                    <button>Iniciar prueba gratis</button>
                </div>

                <div className="card__container">
                    {
                        controlData.map((control) => (
                            <div className="control__card" key={control.name}>
                                <div className="card__icon">
                                    {<control.icon />}
                                </div>
                                <div className="card__text">
                                    <p>
                                        {control.name}
                                    </p>
                                    <span>
                                        Ex in labore est non. Est reprehenderit qui ut occaecat sit excepteur ea id voluptate amet duis anim magna consequat.
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </m.div>
    )
}
