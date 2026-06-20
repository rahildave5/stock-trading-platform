import React from "react";
import coinImg from "../../../../images/coin.png";
import googlePlay from "../../../../images/googlePlayBadge.svg";
import appStore from "../../../../images/appstoreBadge.svg";

function Coin() {
  return (
    <section className="coin" style={{ marginBottom: "80px" }}>
      <div className="container">
        <div className="row" style={{ margin: "30px 79.333px" }}>
          <div className="col-6 text-center">
            <img style={{ width: "90%" }} src={coinImg} alt="Coin" />
          </div>

          <div className="col-5 p-4 " style={{ marginLeft: "20px" }}>
            <h3 style={{ padding: "20px 0" }}>Coin</h3>
            <p style={{ fontWeight: "400" }}>
              Buy direct mutual funds online, commission-free, delivered
              directly to your Demat account. Enjoy the investment experience on
              your Android and iOS devices.
            </p>
            <div className="links" style={{ paddingTop: "17px" }}>
              <a className="fs-6" href="/demo" style={{ color: "#387ED1" }}>
                Coin <i className="fa-solid fa-arrow-right"></i>
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

export default Coin;
