import React from "react";
import fundHouse from "../../../../images/zerodhaFundhouse.png";
import streakLogo from "../../../../images/streakLogo.png";
import smallcaseLogo from "../../../../images/smallcaseLogo.png";
import sensibullLogo from "../../../../images/sensibullLogo.svg";
import tijori from "../../../../images/tijori.svg";
import dittoLogo from "../../../../images/dittoLogo.png";

function Universe() {
  return (
    <div className="container text-center pt-5">
      <h3 className="p-4" style={{ color: "#424242" }}>
        The Zerodha Universe
      </h3>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row justify-content-center" style={{ marginTop: "59px" }}>
        <div className="col-6 col-md-3 mb-4">
          <img
            style={{ width: "70%" }}
            src={fundHouse}
            alt="Zerodha Fundhouse"
          />
          <p
            style={{
              fontSize: "12px",
              height: "60px",
              marginTop: "16px",
              color: "#9b9b9b",
            }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            style={{ width: "70%", marginTop: "46px" }}
            src={streakLogo}
            alt="Streak Logo"
          />
          <p
            style={{
              fontSize: "12px",
              height: "60px",
              marginTop: "16px",
              color: "#9b9b9b",
            }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img
            style={{ width: "85%", paddingTop: "100px" }}
            src={sensibullLogo}
            alt="Sensibull Logo"
          />
          <p
            style={{
              fontSize: "12px",
              height: "60px",
              marginTop: "16px",
              color: "#9b9b9b",
            }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img
            style={{ width: "70%" }}
            src={smallcaseLogo}
            alt="Smallcase Logo"
          />
          <p
            style={{
              fontSize: "12px",
              height: "60px",
              marginTop: "16px",
              color: "#9b9b9b",
            }}
          >
            Smallcase is a platform that allows you to invest in diversified
            portfolios of stocks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
