import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { twophones } from "../assets";
import '../styles/phone.scss';

export const PhoneApp = () => {
    return (
        <section id="app" className='application__app'>
            <div className="app__container">
                <div className="left__distribution">
                    <div className="text__container">
                        <h1>Ya puedes descargar nuestra App!</h1>
                        <p>
                            Ad irure in quis in enim consectetur magna mollit. Ex deserunt est do aliquip. Enim ut velit nostrud qui. Ex reprehenderit fugiat culpa dolore mollit incididunt. Cillum elit laboris irure ea pariatur in. Elit laboris incididunt id excepteur ea do nisi velit ipsum aliqua.
                        </p>
                    </div>
                    <div className="app__buttons">
                        <button><DiAndroid /> Descargar</button>
                        <button><FaApple /> Descargar</button>
                    </div>
                </div>
                <div className="right__distribution">
                    <img src={twophones} alt="twophones" loading="lazy" />
                </div>
            </div>
        </section>
    )
}
