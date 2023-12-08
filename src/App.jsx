import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Componentes/header"
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import Footer from "./Componentes/footer"
import Container from "./Componentes/container"
import Search from "./pages/Search"

export default function App(){
  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/detailMovie/:id" element={<Movie />} />
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}