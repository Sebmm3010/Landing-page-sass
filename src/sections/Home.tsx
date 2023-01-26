import { Dashboard } from '../components';
import '../styles/home.scss';

export const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <div className="home__text">
          <h1>Dale Más Poder</h1>
          <h1> a Tu Negocio</h1>
        </div>
        <div className="input__container">
          <input type="email" placeholder='Email' />
          <button>Prueba gratis</button>
        </div>
      <Dashboard/>
      </section>
    </>
  )
}
