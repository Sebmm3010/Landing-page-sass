import { dashboard } from '../assets';
import '../styles/dashboard.scss';
import { useFramerMotion } from '../hooks/useFramerMotion';
import { useRef, useEffect } from 'react';

export const Dashboard = () => {

  const ref = useRef(null);
  const { inView, control, m, controlFunction } = useFramerMotion(ref);

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    inView && control.start('visible')
  }, [control, inView]);


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
