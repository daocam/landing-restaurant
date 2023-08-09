import LastProducts from "../components/marketing/LastProducts"
import Products from "../components/marketing/Products"
import Booking from "../components/marketing/pageSections/Booking"
import Event from "../components/marketing/pageSections/Event"
import Footer from "../components/marketing/pageSections/Footer"
import HeroTop from "../components/marketing/pageSections/HeroTop"

const HomePage = () => {
  return (
    <>
      <HeroTop/>
      <LastProducts/>
      <Products/>
      <Event/>
      <Booking/>
      <Footer/>
    </>
  )
}

export default HomePage