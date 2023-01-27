import './index.scss';
import { Navbar } from './components';
import { Analisis, About, Home, PhoneApp } from './sections';

const App = () => {

  return (
    <>
      <Navbar/>
      <Home/>
      <Analisis/>
      <About/>
      <PhoneApp/>
    </>
  )
}

export default App
