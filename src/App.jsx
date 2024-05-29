import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Services from "./components/Services"
import Gallary from "./components/gallary"
import TestimonyConteiner from "./components/testimonyConteiner"


function App() {


  return (
    <main className=" max-w-1440px mx-auto relative">
    <div>
      <Header />
      <Main />
      <Services />
      <TestimonyConteiner />
      <Gallary />
      <Footer />
    </div>
    </ main>
  )
}

export default App
