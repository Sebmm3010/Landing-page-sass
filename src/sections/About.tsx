import { useEffect, useRef } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/Bs';
import { useFramerMotion } from '../hooks/useFramerMotion';
import { feature } from '../assets';
import { Control } from '../components';
import '../styles/about.scss';
import { item1, item2, list } from '../data';

export const About = () => {
    const feauters = [...Array(4)].map((value, i) => value = i + 1);
    
    const { control, m, inView, controlFunction, ref } = useFramerMotion();

    useEffect(() => controlFunction('visible', 'hidden'), [control, inView]);


    return (
        <section id="about" className='about'>
            <m.div
                ref={ref}
                animate={control}
                variants={list}
                className="feature__container">

                <m.div variants={item1} className="image__container">
                    <img src={feature} alt="feature" loading='lazy' />
                </m.div>
                <m.div variants={item2} className="right__container">
                    <div className="right__text">
                        <h1>Quienes te ayudaran a crecer?</h1>
                        <p>Ea et exercitation aliquip sint proident eiusmod culpa aliquip. In nisi exercitation ex nostrud laboris enim ipsum veniam ipsum elit ex qui consequat anim. Commodo aliqua dolore eu nulla commodo occaecat pariatur ad sint id. Consequat eu qui anim sunt ad. Ullamco eiusmod consectetur aliqua mollit deserunt esse consequat sunt nisi ad amet. Dolore consequat sunt deserunt sint proident. Irure incididunt est mollit adipisicing sint.</p>
                    </div>
                    <div className="content__feature">
                        {
                            feauters.map(value => (
                                <div className="feature" key={value}>
                                    <BsFillPatchCheckFill />
                                    <div className="text">
                                        <p>
                                            Enim do dolore consequat sunt dolore
                                        </p>
                                        <span>
                                            Consectetur proident nulla nostrud veniam cillum elit.
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </m.div>
            </m.div>
            <Control />
        </section>
    )
}
