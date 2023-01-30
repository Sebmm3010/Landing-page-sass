import { useEffect } from 'react';
import { useFramerMotion } from '../hooks/useFramerMotion';
import { variants } from '../data';
import { dashboard } from '../assets';
import '../styles/dashboard.scss';

export const Dashboard = () => {

  const { inView, control, m, controlFunction, ref } = useFramerMotion();

  useEffect(() => controlFunction('visible', 'hidden', true), [control, inView]);


  return (
    <m.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className='dashboard'>
      <img src={dashboard} alt="dashboard.png" loading='lazy' />
    </m.div>
  )
}
