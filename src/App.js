import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const images = ['https://picsum.photos/400', 'https://picsum.photos/800/350'];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let carousalProp = true;

  const carousal = (
    <div>
        <Slider {...settings}>
        <div>
          <img className='responsive' src={images[0]} alt="random img" />
        </div>
        <div>
          <img className='responsive' src={images[0]} alt="random img" />
        </div>
        <div>
          <img className='responsive' src={images[0]} alt="random img" />
        </div>
        <div>
          <img className='responsive' src={images[0]} alt="random img" />
        </div>
        <div>
          <img className='responsive' src={images[0]} alt="random img" />
        </div>
        <div>
          <img className='responsive' src={images[0]} alt="random img" />
        </div>
      </Slider>
      <div className='small-images'>
          <img className='responsive' src={images[0]} alt="random img" />
          <img className='responsive' src={images[0]} alt="random img" />
          <img className='responsive' src={images[0]} alt="random img" />
          <img className='responsive' src={images[0]} alt="random img" />
          <img className='responsive' src={images[0]} alt="random img" />
      </div>
    </div>
  )

  return (
    <div className="App">
      <div className="first-section">
        <img className='responsive' src={images[0]} alt="random img" />
        <div className='text'>
          <p>CTA Title</p>
          <button className='button'>CTA Button</button>
        </div>
        <img className='responsive' src={images[0]} alt="random img" />
      </div>

      <div className="second-section">
        <div className='text2'>
          <p>CTA Title</p>
          <button className='button2'>CTA Button</button>
        </div>
        <img className='responsive' src={images[0]} alt="random img" />
        <img className='responsive' src={images[0]} alt="random img" />
        <img className='responsive' src={images[0]} alt="random img" />
        <img className='responsive' src={images[0]} alt="random img" />
        <img className='responsive' src={images[0]} alt="random img" />
      </div>

      <div className="third-section">
        <img className='image3 responsive' src={images[1]} alt="random img" />
        <div className='text3'>
          <p>CTA Title</p>
          <button className='button3'>CTA Button</button>
        </div>
      </div>

      {carousalProp && carousal}
    </div>
  );
}


export default App;
