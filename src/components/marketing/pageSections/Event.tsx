import Container from "../../elements/Container"
import AliceCarousel from 'react-alice-carousel'
import '../../../css/carousel.css'
import Image1 from '../../../assets/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import Image2 from '../../../assets/images/products/Product-1.jpg'
import Image3 from '../../../assets/images/products/Product-2.jpg'
import React from "react"
import Heading from "../../elements/DisplayTitles/Heading"

type Props = {
  children: React.ReactNode,
  category?: string,
  title?: string,
  image: string,
  alt: string

}

const Slide = ({children, category, title, image, alt}: Props) => {
  return (
    <div className="grid grid-cols-2 p-6 w-full">
      <div className="p-10 mb-10">
        <Heading variant="h4">
          {category}
        </Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className="tracking-wide text-lg leading-relaxed font-light text-gray-500">
          {children}
        </p>
        
        {/* Contenu */}
      </div>
      <div className="relative h-full w-full">
        <img src={image} alt={alt} className="bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom r-0"/>
      </div>
    </div>
  )
}

const Event = () => {

  const items = [
    <Slide 
      image={Image1}
      alt="description de l'image"
      category="évènement à venir"
      title="vivez la demi-finale"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nulla nobis ullam eum laboriosam aut reiciendis vitae mollitia aperiam corrupti!
    </Slide>,
    <Slide 
      image={Image2}
      alt="description de l'image"
      category="Nouveaux burgers"
      title="Découvrez nos burgers"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nulla nobis ullam eum laboriosam aut reiciendis vitae mollitia aperiam corrupti!
    </Slide>,
    <Slide 
      image={Image3}
      alt="description de l'image"
      category="Nouvelle recette"
      title="Un régal"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nulla nobis ullam eum laboriosam aut reiciendis vitae mollitia aperiam corrupti!
    </Slide>,
  ];

  return (
    <Container>
      <div className="shadow-2xl mb-20">
        <AliceCarousel 
          mouseTracking 
          items={items} 
          // autoPlay
          infinite
          autoPlayInterval={4000}
          disableButtonsControls
          animationType="fadeout"
        />
      </div>
    </Container>
  )
}

export default Event