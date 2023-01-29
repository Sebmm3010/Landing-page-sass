import { useEffect, useRef } from "react";
import { motion as m, useAnimationControls, useInView } from 'framer-motion';
import { Dashboard } from '../components';
import '../styles/home.scss';

export const Home = () => {

  const control = useAnimationControls();
  const ref = useRef(null);
  const inView = useInView(ref);

  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const item = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: "50%",
    },
  };

  useEffect(() => {
    inView
      ? control.start('visible')
      : control.start('hidden')
  }, [control, inView]);

  return (
    <section id="home" className="home">
      <m.div
        initial='hidden'
        animate={control}
        variants={list}
        ref={ref}
        className="home__text">
        <m.h1 variants={item}>Dale Más Poder</m.h1>
        <m.h1 variants={item}> a Tu Negocio</m.h1>
      </m.div>
      <div className="input__container">
        <input type="email" placeholder='Email' />
        <button>Prueba gratis</button>
      </div>
      <Dashboard />
    </section>
  )
}
