import { useEffect, useRef } from "react";
import { Dashboard } from '../components';
import '../styles/home.scss';
import { list } from "../data";
import { useFramerMotion } from '../hooks/useFramerMotion';

export const Home = () => {

  const { ref, m, control, controlFunction, inView }=useFramerMotion();

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

  useEffect(() => controlFunction('visible', 'hidden'), [control, inView]);

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
