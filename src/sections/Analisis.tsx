import { onephone } from '../assets';
import { analisis } from '../data';
import '../styles/analisis.scss'

export const Analisis = () => {
    return (
        <section  className='analisis'>
            <div className="data__container">
                <div className="left__data">
                    <div className='text_container' id='funcion'>
                        <h1>Cillum cillum irure consectetur fugiat exercitation.</h1>
                        <p>
                            Commodo dolore irure consectetur fugiat exercitation. Elit aliqua ipsum laboris ad ea. Cillum officia pariatur exercitation amet ad deserunt duis. Occaecat duis nisi commodo et ea occaecat id.
                            Minim ut aliquip dolor anim ipsum. Cillum sunt velit et ullamco non nulla laborum pariatur nisi exercitation veniam. Irure laboris est sit ut quis ea magna do id anim id tempor. Deserunt enim sint eiusmod ad. Occaecat veniam laborum eiusmod incididunt. Sunt sunt excepteur minim ad sit anim ipsum aliqua tempor aliqua nisi veniam ad.
                        </p>
                    </div>
                    <div className="analisis__container">
                        {
                            analisis.map(({ name, data }) => (
                                <div className="data__container" key={name}>
                                    <div className="data__icon">{data}</div>
                                    <p>{name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="right__data">
                    <img src={onephone} alt="phone" />
                </div>
            </div>
        </section>
    )
}
