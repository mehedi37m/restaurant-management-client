import React from 'react';

const Banner = () => {
    return (
        <div>
            
            <div>
            
           
            <div className="carousel relative w-full h-[800px]">
                
  <div id="item1" className="carousel-item w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h1 className="text-6xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quas aliquid laborum facilis reiciendis, assumenda nostrum numquam sit doloribus nihil!</p>
            <div className="">
                <button className="btn btn-outline btn-secondary mr-5">Discover</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
        </div>
    </div>
  </div> 

  <div id="item2" className="carousel-item w-full">
    <img src={img2} className="w-full rounded-xl" />  
  </div> 

  <div id="item3" className="carousel-item w-full">
    <img src={img3} className="w-full rounded-xl" />
  </div> 

  <div id="item4" className="carousel-item w-full">
    <img src={img4} className="w-full rounded-xl" />
  </div>

  <div id="item5" className="carousel-item w-full">
    <img src={img5} className="w-full rounded-xl" />
  </div>

  <div id="item6" className="carousel-item w-full">
    <img src={img6} className="w-full rounded-xl" />
  </div>

</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item5" className="btn btn-xs">5</a>
  <a href="#item6" className="btn btn-xs">6</a>
</div>


        </div>
 


        </div>
    );
};

export default Banner;