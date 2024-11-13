import Homepage from "./Homepage/Homepage"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Header from "./static/Header"
import MinisterData from "./components/MinisterData"
import Bible from "./components/bible"
import ProgramSchedule from "./components/ProgramSchedule"

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      
      <Routes>

          <Route path="/" element = {<Homepage />} />
          <Route path="/guestMinisters" element = {<MinisterData/>} />
          <Route path="/bible" element = {<Bible/>} />
          <Route path="/program" element = {<ProgramSchedule/>} />
      

      </Routes>
      
      </BrowserRouter>
      
      
    </>
  )
}

export default App
