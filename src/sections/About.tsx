import { BsFillPatchCheckFill } from 'react-icons/bs'
import { feature } from '../assets';
import '../styles/about.scss';

export const About = () => {
    const feauters = [...Array(4)].map((value, i) => value = i + 1);
    return (
        <section id="about" className='about'>
            <div className="feature__container">
                <div className="image__container">
                    <img src={feature} alt="feature" />
                </div>
                <div className="right__container">
                    <div className="right__text">
                        <h1>Quienes te ayudaran a crecer?</h1>
                        <p>Ea et exercitation aliquip sint proident eiusmod culpa aliquip. In nisi exercitation ex nostrud laboris enim ipsum veniam ipsum elit ex qui consequat anim. Commodo aliqua dolore eu nulla commodo occaecat pariatur ad sint id. Consequat eu qui anim sunt ad. Ullamco eiusmod consectetur aliqua mollit deserunt esse consequat sunt nisi ad amet. Dolore consequat sunt deserunt sint proident. Irure incididunt est mollit adipisicing sint.</p>
                    </div>
                    <div className="content__feature">
                        {
                            feauters.map(value => (
                                <div className="feature" key={value}> 
                                    <BsFillPatchCheckFill/>
                                    <div className="text">
                                        <p>
                                            Enim do dolore consequat sunt dolore
                                        </p>
                                        <span>
                                            Consectetur proident nulla nostrud veniam cillum elit. 
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
