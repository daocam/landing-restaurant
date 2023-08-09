import Container from "../elements/Container"
import Image1 from '../../assets/images/products/LastProducts-1.jpg'
import Image2 from '../../assets/images/products/LastProducts-2.jpg'
import Image3 from '../../assets/images/products/LastProducts-3.jpg'

const LastProducts = () => {
  return (
    <Container>
      <div className="w-full h-96 px-11 my-20 grid grid-cols-2 grid-rows-2 gap-9 text-white uppercase">
        
        <div className="relative bg-primary h-full row-span-2 rounded-md p-7">
          <img src={Image1} className="absolute top-0 left-0 rounded-md w-full h-full object-cover z-0" alt="Un délicieux hamburger exposé sur une pièce de bois" />
          <div className="z-10 position relative">
            <span className="block font-bold text-lg">Killer Burger</span>
            <span className="text-2xl font-black">Burger le plus populaire</span>
          </div>
        </div>

        <div className="relative bg-primary h-full rounded-md p-7">
          <img src={Image2} className="absolute top-0 left-0 rounded-md w-full h-full object-cover z-0" alt="Un délicieux hamburger exposé sur une pièce de bois" />
          <div className="z-10 position relative">
            <span className="block font-bold text-lg">Island Burger</span>
            <span className="block text-2xl font-black">plus de plaisir</span>
            <span className="block text-2xl font-black">plus de goût</span>
          </div>
        </div>

        <div className="relative bg-primary h-full rounded-md p-7">
          <img src={Image3} className="absolute top-0 left-0 rounded-md w-full h-full object-cover z-0" alt="Un délicieux hamburger exposé sur une pièce de bois" />
          <div className="z-10 position relative">
            <span className="block font-bold text-lg">Orlando's Burger</span>
            <span className="text-2xl font-black">frais & pimemté</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LastProducts
