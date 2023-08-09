import Container from '../../elements/Container'
import Assiette from '../../../assets/images/background/Assiette-burger-frites.png'
import Burger from '../../../assets/images/background/Burger.png'
import Sauce from '../../../assets/images/background/Sauce-pimente.png'
import Heading from '../../elements/DisplayTitles/Heading'

const Booking = () => {
  return (
    <Container>
      <div className="relative mb-20">
        <img src={Burger} alt="Un burger" className="absolute -top-20 -left-36 z-10"/>
        <img src={Sauce} alt="Une sauce pimentée" className="absolute bottom-0 left-0"/>
        <img src={Assiette} alt="Une assiette hamburger frites" className="absolute -bottom-52 -right-96"/>
        <div className="max-w-3xl mx-auto px-10 py-20">
          <Heading variant="h3" alignement='center'>
            Réservation
          </Heading>
          <Heading alignement='center' theme='secondary' className='mt-5'>
            Réservez votre table
          </Heading>
          <form className='grid grid-cols-2 gap-x-7 gap-y-6 mt-20'>
            <div>
              <label htmlFor="name">Nom</label>
              <input 
                type="text" 
                name='name' 
                id='name'
                className='focus;ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
                placeholder='Jhon Doe' 
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name='email' 
                id='email'
                className='focus;ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
                placeholder='jhon.doe@gmail.com' 
              />
            </div>

            <div>
              <label htmlFor="date">Date</label>
              <input 
                type="date" 
                name='date' 
                id='date'
                className='focus;ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
              />
            </div>

            <div>
              <label htmlFor="time">Heure</label>
              <input 
                type="time" 
                name='time' 
                id='time'
                className='focus;ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
              />
            </div>

            <div>
              <label htmlFor="customer">Nombre de personnes</label>
              <input 
                type="text" 
                name='customer' 
                id='customer'
                className='focus;ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5'
                placeholder='5'
              />
            </div>

            <div>
              <label htmlFor="sendBooking" className='invisible'>Réservez votre repas</label>
              <input 
                type="button" 
                name='sendBooking' 
                id='sendBooking'
                className='bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase cursor-pointer py-5 rounded-md animate'
                value="Réservez votre repas"
              />
            </div>

          </form>
        </div>
      </div>
    </Container>
  )
}

export default Booking