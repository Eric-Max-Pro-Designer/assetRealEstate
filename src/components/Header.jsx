import React, { useEffect } from "react";
// If using images from public folder, just use strings. 
// If using imports, keep them as is.
// import img1 from '../../public/img/carousel-1.jpg'; 
// import img2 from '../../public/img/carousel-2.jpg';

function Header() {
  useEffect(() => {
    // 1. Initialize Owl Carousel
    if (window.$ && window.$.fn.owlCarousel) {
      window.$(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ]
      });
    }

    // 2. Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            Find A <span className="text-primary">Perfect Home</span> To Live With Your Family
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. 
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p>
          <a href="/" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
        </div>
        <div className="col-md-6 animated fadeIn">
          {/* Ensure class matches the jQuery selector above */}
          <div className="owl-carousel header-carousel h-100">
            <div className="owl-carousel-item">
                <img className="img-fluid" src="/img/carousel-1.jpg" alt="Carousel 1" />
            </div>
            <div className="owl-carousel-item">
                <img className="img-fluid" src="/img/carousel-2.jpg" alt="Carousel 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;