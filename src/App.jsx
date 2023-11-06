import './App.css'
import Header from './Components/Layout/Header'
import Showcase from './Components/Showcase/Showcase'
import Discount from './Components/Discount/Discount'
import About from './Components/About/About'
import Product from './Components/Product/Product'
import OfferProducts from './Components/OfferProducts/OfferProducts'
import Footer from './Components/Layout/Footer' 
import Testimonial from './Components/Testimonial/Testimonial'
import EcoFriendly from './Components/EcoFriendly/EcoFriendly'
import Category from './Components/Category/Category'
import News from './Components/News/News'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {

  return (
    <>
    <Header />
    <Showcase />
    <Discount />
    <About />
    <Product />
    <Testimonial />
    <OfferProducts />
    <EcoFriendly />
    <Category />
    <News />
    <Subscribe />
    <Footer />
    </>
  )
}

export default App
