import React from "react";

function Hero() {
  return (
    <section className="products_header">
      <div
        className="container"
        style={{ margin: "80px 79.33px", padding: "0 75px" }}
      >
        <div className="row text-center p-3" style={{ color: "#424242" }}>
          <h3 style={{}}>Zerodha Products</h3>
          <p className="fs-5 fw-6 p-2">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p>
            Check out our{" "}
            <a
              className="fs-6"
              href="/investments"
              style={{ color: "#387ED1" }}
            >
              investment offerings <i className="fa-solid fa-arrow-right"></i>
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
