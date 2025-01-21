import './App.css'
import { Navbar } from './Components/Nav bar/Navbar'
import { Create_account } from './Screen/Create account/Create_account'
import { Home } from './Screen/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router'


function App() {

  return (
  //  <>
  //  <Navbar/>
  //  <Home/>
  //  {/* <Create_account/> */}
  //  </>
  <BrowserRouter>
    <Routes>
      <Route index element={<><Navbar/><Home/></>}></Route>
      <Route path='createaccount/' element={<Create_account/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
