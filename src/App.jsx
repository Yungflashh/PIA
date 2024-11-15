import Homepage from "./Homepage/Homepage"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Header from "./static/Header"
import MinisterData from "./components/MinisterData"
import Bible from "./components/Bible"
import ProgramSchedule from "./components/ProgramSchedule"
import Watch from "./components/Watch"
import About from "./components/About"
import ImageAccess from "./components/ImageAccess"

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      
      <Routes>

          <Route path="/" element = {<Homepage />} />
          <Route path="/guestMinisters" element = {<MinisterData/>} />
          <Route path="/about" element = {<About />} />
          <Route path="/bible" element = {<Bible/>} />
          <Route path="/program" element = {<ProgramSchedule/>} />
          <Route path="/watch" element = {<Watch/>} />
          <Route path="/imageAccess" element = {<ImageAccess/>} />
      

      </Routes>
      
      </BrowserRouter>
      
      
    </>
  )
}

export default App
