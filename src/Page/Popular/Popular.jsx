

const Popular = () => {
    return (
        <div className="my-10">
            <div className="my-10">
                <h1 className="text-5xl font-bold text-center">Popular</h1>  
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           <div className="card  h-96 bg-base-100 shadow-xl">
  <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
   className="card-body">
    <h2 className="card-title">Hamburgers!</h2>
    <p>A hamburger consists of a cooked patty of ground meat usually placed between two slices of a bread roll.</p>
  </div>
  <figure><img className="h-56 w-full" src="https://i.ibb.co/9wvVZGX/jonathan-borba-1k-A3l-ACHeqk-unsplash-4.jpg" alt="Shoes" /></figure>
</div>
           <div className="card  h-96 bg-base-100 shadow-xl">
  <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
   className="card-body">
    <h2 className="card-title">Ice cream</h2>
    <p>Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener.</p>
  </div>
  <figure><img className="h-56 w-full" src="https://i.ibb.co/N9LjN3C/victor-rutka-4-Fujjkc-I40g-unsplash.jpg" alt="Shoes" /></figure>
</div>
           <div className="card  h-96 bg-base-100 shadow-xl">
  <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
   className="card-body">
    <h2 className="card-title">Hot dog</h2>
    <p> Hot dog preparation and condiments vary worldwide. Typical condiments include mustard, ketchup,</p>
  </div>
  <figure><img className="h-56 w-full" src="https://i.ibb.co/9ghFN4x/victoria-shes-8p-K37xt-N4bo-unsplash.jpg" alt="Shoes" /></figure>
</div>
           <div className="card  h-96 bg-base-100 shadow-xl">
  <div data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
  className="card-body">
    <h2 className="card-title">Beef</h2>
    <p>Beef has a high environmental impact, the highest greenhouse gas emissions of any agricultural product.</p>
  </div>
  <figure><img className="h-56 w-full" src="https://i.ibb.co/JndmvDK/chad-montano-M0l-Uxg-Lnlfk-unsplash.jpg" alt="Shoes" /></figure>
</div>
          
          
           </div>

        </div>
    );
};

export default Popular;