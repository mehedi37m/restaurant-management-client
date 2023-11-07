import React from 'react';

const Banner = () => {
    return (
        <div>
            


        <div>
        <div className="carousel w-full h-[600px] md:h-[800px]">
  <div id="slide1" className="carousel-item relative w-full rounded-xl">
    <img src="https://i.ibb.co/9py6nf3/dan-gold-4-jh-DO54-BYg-unsplash.jpg" className="w-full rounded-xl" />

    <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h1 className="text-6xl font-bold">Vegetable dishes </h1>
            <p>This is a list of vegetable dishes, that includes dishes in which the main ingredient or one of the essential ingredients is a vegetable or vegetables.</p>
            <div className="flex justify-center">
                <button className="btn btn-outline btn-secondary mr-5">Discover</button>
               
            </div>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full rounded-xl">
    <img src="https://i.ibb.co/dDLSkdx/brooke-lark-M4-E7-X3z80-PQ-unsplash.jpg" className="w-full rounded-xl" />
    <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h1 className="text-6xl font-bold">Mughlai paratha </h1>
            <p>The paratha is an important part of a traditional breakfast and other meals on the Indian subcontinent. Often a paratha is eaten with butter, chutney, pickles, ketchup, yogurt, or raita as condiments. </p>
            <div className="flex justify-center">
                <button className="btn btn-outline btn-secondary mr-5">Discover</button>
               
            </div>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full rounded-xl">
    <img src="https://i.ibb.co/k1rckt5/ca-creative-bp-PTl-XWTOvg-unsplash.jpg" className="w-full rounded-xl" />
    <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h1 className="text-6xl font-bold"> Alaskan Pollock </h1>
            <p>Odds are you’ve had Alaskan pollock without even knowing it: Its mild flavor and light body makes it a common choice for frozen fish sticks and other battered fish foods. </p>
            <div className="flex justify-center">
                <button className="btn btn-outline btn-secondary mr-5">Discover</button>
               
            </div>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full rounded-xl">
    <img src="https://i.ibb.co/VHTCXNg/jannis-brandt-mms-QUg-MLq-Uo-unsplash.jpg" className="w-full rounded-xl" />
    <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h1 className="text-6xl font-bold">fruit dishes </h1>
            <p> Dishes featuring botanical fruits culinarily used as vegetables, such as tomato or cucumber, should be categorized as vegetable dishes.</p>
            <div className="flex justify-center">
                <button className="btn btn-outline btn-secondary mr-5">Discover</button>
               
            </div>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
 


        </div>
    );
};

export default Banner;