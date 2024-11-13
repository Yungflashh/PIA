import Homepage from "./Homepage/Homepage"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Header from "./static/Header"
import MinisterData from "./components/MinisterData"

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      
      <Routes>

          <Route path="/" element = {<Homepage />} />
          <Route path="/guestMinisters" element = {<MinisterData/>} />
      

      </Routes>
      
      </BrowserRouter>
      
      
    </>
  )
}

export default App
