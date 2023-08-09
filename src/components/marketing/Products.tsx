import Button from "../elements/Button"
import Container from "../elements/Container"
import Heading from "../elements/DisplayTitles/Heading"
import HeadingTitles from "../elements/DisplayTitles/HeadingTitles"
import Product1 from '../../assets/images/products/Product-1.jpg'
import Product2 from '../../assets/images/products/Product-2.jpg'
import Product3 from '../../assets/images/products/Product-3.jpg'

const Products = () => {
  return (
    <Container>
      <HeadingTitles variant="h3">
        Toujours des délicieux burgers
      </HeadingTitles>

      <Heading theme="secondary" alignement="center" className="my-5">
        Choisissez et savourez
      </Heading>

      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat alias laudantium, eum quisquam minus pariatur, inventore soluta enim cupiditate debitis assumenda perferendis natus atque maxime esse tempora earum fugiat! Ratione sunt dolorem reiciendis voluptate earum enim delectus.
      </p>

      <div className="grid grid-cols-3 gap-x-1 mb-20 mt-10">

        <div className="w-full h-full">
          <div className="relative w-full h-72">
            <img src={Product1} alt="Burger 1" className="bg-primary absolute top-0 left-0 w-full h-full object-cover r-0"/>
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
              Lorem Ipsum dolor
            </Heading>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, at.
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="relative w-full h-72">
            <img src={Product2} alt="Burger 2" className="bg-primary absolute top-0 left-0 w-full h-full object-cover r-0"/>
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
              Lorem Ipsum dolor
            </Heading>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, at.
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="relative w-full h-72">
            <img src={Product3} alt="Burger 3" className="bg-primary absolute top-0 left-0 w-full h-full object-cover r-0"/>
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
              Lorem Ipsum dolor
            </Heading>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, at.
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Products