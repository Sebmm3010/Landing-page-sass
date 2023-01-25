import '../styles/navbar.scss';
import { routes } from '../data/data';

export const Navbar = () => {
  return (
    <header className='navbar'>
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
        <button>
          Iniciar
        </button>

        <button>
          Registrarse
        </button>
      </div>
    </header>
  )
}
