import React from "react";

function Search() {
  return (
    <div
      className="container-fluid bg-primary mb-5 wow fadeIn"
      style={{ padding: "35px" }}
    >
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
                <select className="form-select border-0 py-3">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>

              <div className="col-md-4">
                <select className="form-select border-0 py-3">
                  <option>Location</option>
                  <option>New York</option>
                  <option>London</option>
                  <option>Dubai</option>
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
  );
}

export default Search;