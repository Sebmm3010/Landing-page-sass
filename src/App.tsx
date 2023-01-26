import './index.scss';
import { Navbar } from './components';
import { Analisis, About, Home } from './sections';

const App = () => {

  return (
    <>
      <Navbar/>
      <Home/>
      <Analisis/>
      <About/>
    </>
  )
}

export default App
