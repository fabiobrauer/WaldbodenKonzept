import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import AgroforstWirtschaft from './Pages/AgroforstWirtschaft'
import Aktuelles from './Pages/Aktuelles'
import GartenDesign from './Pages/GartenDesign'
import HolzschePermakultur from './Pages/HolzschePermakultur'
import Kontakt from './Pages/Kontakt'
import NavigationBar from './Components/Navigation'
import Footer from './Components/Footer'
import PermakulterWorkshopchiangdao from './Pages/PermakulterWorkshopchangdao'

function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/AgroforstWirtschaft' element={<AgroforstWirtschaft></AgroforstWirtschaft>}></Route>
        <Route path='/Aktuelles' element={<Aktuelles></Aktuelles>}></Route>
        <Route path='/GartenDesign' element={<GartenDesign></GartenDesign>}></Route>
        <Route path='/HolzschePermakultur' element={<HolzschePermakultur></HolzschePermakultur>}></Route>
        <Route path='/Kontakt' element={<Kontakt></Kontakt>}></Route>
        <Route path='/PermakulterWorkshopchangdao' element={<PermakulterWorkshopchiangdao></PermakulterWorkshopchiangdao>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}


export default App
