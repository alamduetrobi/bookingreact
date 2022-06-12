import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/MailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import "./singlehotel.css"

function SingleHotel() {



  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);


  const photos = [

    {
      src:"https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
    },
    {
      src:"https://picsum.photos/id/237/200/300"
    },
    {
      src:"https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
    },
    {
      src:"https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
    },
    {
      src:"https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
    },
    {
      src:"https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
    },

  ];


const handleOpen = (i) =>{
  setSlideNumber(i)
  setOpen(true)
}

const hangleMove = (direction) =>{
  let newSlideNumber;

  if(direction === 'l'){
    newSlideNumber = slideNumber === 0? 5 :slideNumber-1
  }else{
    newSlideNumber = slideNumber === 5?0:slideNumber+1
  }

  setSlideNumber(newSlideNumber)
}

  return <div>
    <Navbar/>
    <Header type="list"/>
    <div className="hotelContainer">
      {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>hangleMove("l")}/>
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className='sliderImg' />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>hangleMove("r")}/>
      </div>}
      <div className="hotelWrapper">
        <button className='bookNow'>Reserve or Book Now!</button>
      <h1 className="hotelTitle">Grand Hotel</h1>
      <div className="hotelAddress">
        <FontAwesomeIcon icon={faLocationDot}/>
        <span> Elton St 125 New york</span>
      </div>
      <span className="hotelDistance">
        Excellent location  - 500m from center
      </span>
      <span className="hotelPriceHighlight">
        Book a stay over $114 at this property and get a free airport taxi
      </span>
      <div className="hotelIamges">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImg' />
              </div>
            ))}
      </div>
      <div className="hotelDetails">
        <div className="hotelDetailsTexts">
          <h1 className="hotelTitle">Stay in the heart of krakom</h1>
          <p className="hotelDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta explicabo, qui assumenda praesentium commodi aut quae, quis doloremque libero optio ab ipsum nesciunt nostrum perspiciatis, repellendus sequi nam hic consectetur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta explicabo, qui assumenda praesentium commodi aut quae, quis doloremque libero optio ab ipsum nesciunt nostrum perspiciatis, repellendus sequi nam hic consectetur.
          </p>
        </div>
        <div className="hotelDetailsPrice">
          <h1>Perfect for a 9-night stay!</h1>
          <span>
            Located in the real hart of krakow, this property has an exellent locaton score of 9.8
          </span>
          <h2><b>$945</b>(9 nights)  </h2>
          <button>Reserve or Book Now</button>
        </div>
      </div>
    </div>
    <MailList/>
    <Footer/>
    </div>
  </div>;
}

export default SingleHotel;
