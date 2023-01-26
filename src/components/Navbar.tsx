import { useState } from 'react';
import { routes } from '../data';
import '../styles/navbar.scss';

export const Navbar = () => {

  const [navColor, setNavColor] = useState(false);

  const navBarColorSwitch=()=>{

    (window.scrollY >= 70)
      ? setNavColor(true)
      : setNavColor(false)
  }

  window.addEventListener('scroll', navBarColorSwitch);

  return (
    <header className={navColor ? 'navbar active' : 'navbar'}>
      <div className='navbar__logo'>
        <a href='#'>Logo</a>
      </div>
      <ul className='navbar__routes'>
        {
          routes.map(route => (
            <li key={route.path} className='route'>
              <a href={route.path}>{route.name}</a>
            </li>
          ))
        }
      </ul>
      <div className="button__container">
        <button
          style={{
            color: navColor ? '#fff': '#190c27',
            backgroundColor: navColor? '#190c27': '#fff'
          }}
        >
          Iniciar
        </button>

        <button
          style={{
            color: navColor ? '#fff': '#190c27',
            backgroundColor: navColor? '#190c27': '#fff'
          }}
        >
          Registrarse
        </button>
      </div>
    </header>
  )
}
