import React from "react";

function OpenAccount() {
  return (
    <section className="OpenAccount" style={{ paddingBottom: "120px" }}>
      <div className="container">
        <div className="row text-center">
          <h1 className="mt-4 fs-4">Open a Zerodha account</h1>
          <p
            style={{
              marginTop: "10px",
              marginBottom: "15px",
              paddingBottom: "12px",
              fontSize: "20px",
            }}
          >
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="mt-4 btn btn-primary fs-5"
            style={{ padding: "10px 30px", width: "21%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
