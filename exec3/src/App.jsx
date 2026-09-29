import  './App.css'
import Header from './components/header'
import Info from './components/info'
import Carrosel from './components/carrosel'
import Maps from './components/maps'
import Contato from './components/contato'
import Footer from './components/footer'


function App() {
  return (
    <main>
      <div className='container1'>
    <Header/>
    <Info/>
    <Carrosel/>
    <Maps/>
    <Contato/>
    <Footer/>
    </div>
    </main>
  )
}

export default App
