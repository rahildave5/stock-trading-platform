import React from "react";
import varsity from "../../../../images/varsity.png";
import googlePlay from "../../../../images/googlePlayBadge.svg";
import appStore from "../../../../images/appstoreBadge.svg";

function Varsity() {
  return (
    <section className="varsity">
      <div className="container">
        <div className="row" style={{ margin: "100px 79.333px 70px 79.333px" }}>
          <div className="col-6 text-center">
            <img style={{ width: "75%" }} src={varsity} alt="Varsity" />
          </div>

          <div className="col-5 p-4 " style={{ marginLeft: "20px" }}>
            <h3 style={{ padding: "20px 0" }}>Varsity Mobile</h3>
            <p style={{ fontWeight: "400" }}>
              An easy to grasp, collection of stock market lessons with in-depth
              coverage and illustrations. Content is broken down into bite-size
              cards to help you learn on the go.
            </p>
            <div className="links" style={{ paddingTop: "17px" }}>
              <a className="fs-6" href="/demo" style={{ color: "#387ED1" }}>
                Varsity <i className="fa-solid fa-arrow-right"></i>
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

export default Varsity;
