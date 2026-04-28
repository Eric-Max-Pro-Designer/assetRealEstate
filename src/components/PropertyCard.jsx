import React from "react";
import propertyimg1 from '../../public/img/property-1.jpg'; 
// import img2 from '../../public/img/property-2.jpg';
// import img3 from '../../public/img/property-3.jpg';
// import img4 from '../../public/img/property-4.jpg'; 
// import img5 from '../../public/img/property-5.jpg';
// import img6 from '../../public/img/property-6.jpg';


function PropertyCard() {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp"}}>
      <div className="property-item rounded overflow-hidden">
        <div className="position-relative overflow-hidden">
          <a href="/"><img className="img-fluid" src={propertyimg1} alt="Property Image" /></a>
          <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
          <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
        </div>
        <div className="p-4 pb-0">
          <h5 className="text-primary mb-3">$12,345</h5>
          <a className="d-block h5 mb-2" href="/">Golden Urban House For Sell</a>
          <p><i className="fa fa-map-marker-alt text-primary me-2"></i>KG 123 St, Nyarutarama</p>
        </div>
        <div className="d-flex border-top">
          <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
          <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
          <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;