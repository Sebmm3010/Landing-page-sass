import './index.scss';
import { Navbar } from './components';
import { Analisis, Home } from './sections';

const App = () => {

  return (
    <>
      <Navbar/>
      <Home/>
      <Analisis/>
    </>
  )
}

export default App
