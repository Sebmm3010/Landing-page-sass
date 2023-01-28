import './index.scss';
import { Navbar } from './components';
import { Analisis, About, Home, PhoneApp, Contact } from './sections';

const App = () => {

  return (
    <>
      <Navbar/>
      <Home/>
      <Analisis/>
      <About/>
      <PhoneApp/>
      <Contact/>
    </>
  )
}

export default App
