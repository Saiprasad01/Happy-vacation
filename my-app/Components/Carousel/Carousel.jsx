import React from 'react'

const Carousel = () => {
    const carouselItems = [
        {id : 1, imagesrc:"./masterMountains.png",title:"Mountains", description:"Experience the serene beauty of Araku Valley's mountains."},
        {id : 2, imagesrc:"./masterWether.jpg",title:"wether",description:"Enjoy the pleasant and cool weather of Araku Valley."},
        {id : 3, imagesrc:"./masterCaves.jpeg",title:"Caves",description:"Explore the fascinating caves of Araku Valley."},
        {id : 4, imagesrc:"./masterCofee.jpg",title:"Coffe",description:"Savor the rich aroma of Araku Valley's famous coffee."},
    ]
    const [currentIndex, setCurrentIndex] = React.useState(0);

  return <>
  <div className='carousel-container'>
    
  </div>
  </>
}

export default Carousel