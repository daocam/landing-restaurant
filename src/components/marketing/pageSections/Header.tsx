import Logo from '../../../assets/svg/Logo-burger-house.svg'
import Icone from '../../../assets/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'

const Header = () => {
  return (
    <div className="flex relative z-10 items-center justify-between py-10">
      <div className="w-full">
        <img className="w-64" src={Logo} alt="Burger House App"/>
      </div>
      <div className="w-full text-secondary">
        <div className="flex items-center justify-end">
          <img className="w-5 h-5 mr-1" src={Icone} alt="" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="flex items-center justify-end mt-5 tracking-widest">
          <Button className="mr-3">Inscription</Button>
          <Button color="secondary">Connexion</Button>
        </div>
      </div>
    </div>
  )
}

export default Header