import Logo from '../../../assets/svg/Logo-burger-house.svg'
import Container from '../../elements/Container'
import Illustration from '../../../assets/images/background/bg-food.jpg'

const Footer = () => {
  return (
      <div className="bg-repeat w-full h-full flex justify-center" style={{ backgroundImage: `url(${Illustration})`}}>
        <Container>
          <div className="flex relative z-10 items-center justify-between py-10">
              <img className="w-64" src={Logo} alt="Burger House App"/>
          </div>
        </Container>
    </div>
  )
}

export default Footer