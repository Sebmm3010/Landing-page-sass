import { controlData } from '../data';
import '../styles/control.scss';

export const Control = () => {
    return (
        <div className='control'>
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
        </div>
    )
}
