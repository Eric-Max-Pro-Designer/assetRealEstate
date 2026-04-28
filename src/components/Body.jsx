function Body() {
  // Data array to keep the JSX clean and professional
  const properties = [
    { id: 1, price: "$12,345", title: "Golden Urban House", location: "Kigali, Rwanda", img: "/img/property-1.jpg" },
    { id: 2, price: "$15,000", title: "Modern Glass Villa", location: "Kigali, Rwanda", img: "/img/property-2.jpg" },
    { id: 3, price: "$18,000", title: "Luxury Apartment", location: "Kigali, Rwanda", img: "/img/property-3.jpg" },
  ];

  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="text-dark display-5 animated fadeIn mb-4">
              Find A <span className="text-primary">Perfect Home</span> To Live With Your Family
            </h1>
            <p className="animated fadeIn mb-4 pb-2">
              Discover the best properties available for rent and sale.
            </p>
            <a href="#" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
              Get Started
            </a>
          </div>
          <div className="col-md-6 animated fadeIn">
            <img className="img-fluid" src="/img/header.jpg" alt="header" />
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Search Start */}
      <div className="container-fluid bg-primary mb-5" style={{ padding: "35px" }}>
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Search Keyword"
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-3" defaultValue="Property Type">
                    <option>Property Type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Home</option>
                    <option>Office</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-3" defaultValue="Location">
                    <option>Location</option>
                    <option>Kigali</option>
                    <option>Musanze</option>
                    <option>Huye</option>
                    <option>Rubavu</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100 py-3">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Search End */}

      {/* Property Section Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="text-dark mb-3">Property Listing</h1>
            <p>
              Browse available properties and find the perfect place for you.
            </p>
          </div>

          <div className="row g-4">
            {properties.map((property) => (
              <div key={property.id} className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden shadow-sm">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src={property.img}
                      alt={property.title}
                    />
                  </div>
                  <div className="p-4 pb-0">
                    <h5 className="float-left text-primary mb-3">{property.price}</h5>
                    <a className="float-left d-flex h5 mb-2" href="#">
                      {property.title}
                    </a>
                    <p className="float-left d-flex">
                      <i className="fa fa-map-marker-alt text-primary me-2"></i>
                      {property.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Property Section End */}
    </div>
  );
}

export default Body;