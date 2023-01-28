import './index.scss';
import { Navbar, UpButton } from './components';
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
      <UpButton/>
    </>
  )
}

export default App
