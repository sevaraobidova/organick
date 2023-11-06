import './App.css'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Showcase from './Components/Showcase/Showcase'
import Discount from './Components/Discount/Discount'
import About from './Components/About/About'
import Product from './Components/Product/Product'
import OfferProducts from './Components/OfferProducts/OfferProducts'

function App() {

  return (
    <>
    <Header />
    <Showcase />
    <Discount />
    <About />
    <Product />
    <OfferProducts />
    <Footer />
    </>
  )
}

export default App
