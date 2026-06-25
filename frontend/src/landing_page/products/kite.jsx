import React from "react";
import kiteImg from "../../../../images/kite.png";
import googlePlay from "../../../../images/googlePlayBadge.svg";
import appStore from "../../../../images/appstoreBadge.svg";

function Kite() {
  return (
    <section className="kite" style={{ marginBottom: "80px" }}>
      <div className="container">
        <div className="row" style={{ margin: "110px 0 0 79.333px" }}>
          <div className="col-6 text-center">
            <img style={{ width: "90%" }} src={kiteImg} alt="Kite" />
          </div>

          <div className="col-5 p-4 " style={{ marginLeft: "20px" }}>
            <h3 style={{ padding: "20px 0" }}>Kite</h3>
            <p style={{ fontWeight: "400" }}>
              Our ultra-fast flagship trading platform with streaming market
              data, advanced charts, an elegant UI, and more. Enjoy the Kite
              experience seamlessly on your Android and iOS devices.
            </p>
            <div className="links" style={{ paddingTop: "17px" }}>
              <a
                className="fs-6"
                href="/demo"
                style={{ color: "#387ED1", marginRight: "90px" }}
              >
                Try Demo <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a className="fs-6" href="/demo" style={{ color: "#387ED1" }}>
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="d-flex mt-3" style={{ paddingTop: "17px" }}>
              <img
                src={googlePlay}
                alt="Google Play"
                style={{ width: "150px", marginRight: "40px" }}
              />
              <img src={appStore} alt="App Store" style={{ width: "150px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kite;
