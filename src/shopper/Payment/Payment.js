import React from 'react'
import "./assets/style/index.css"


const Payment = () => {
    return (
      <div className="payment">
        <div className="payment-container">
          <div className="payment-item">hello world</div>

          <div className="card">
            <div>
              <p>payment</p>
            </div>

            <form className="payment-form" action="">
              <div className="payment-card">
                <div>
                  <label htmlFor="">Name on Card</label>

                  <input className="payment-input" type="text" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">Name on Card</label>

                  <input className="payment-input" type="text" name="" id="" />
                </div>
                <div className="payment-code">
                  <div>
                    <label htmlFor="">Valid Trough</label>

                    <input
                      className="payment-input"
                      type="text"
                      name=""
                      id=""
                      placeholder="MM/DD"
                    />
                  </div>
                  <div>
                    <label htmlFor="">CCV</label>

                    <input
                      className="payment-input"
                      type="text"
                      name=""
                      id=""
                      placeholder="eg.201"
                    />
                  </div>
                </div>
              </div>
              <div className="payment-email">
                <div style={{ marginBottom: "10px" }}>
                  <input
                    className="rounded-checkbox"
                    type="checkbox"
                    name=""
                    id=""
                  />{" "}
                  <span>Paypal</span>
                </div>

                <div>
                  <label htmlFor="">Email Address</label>

                  <input
                    className="payment-input"
                    type="email"
                    name=""
                    id=""
                    placeholder="abc@xyz.com"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="payment-btn">
          <button className="btn back-btn">Go Back</button>
          <button className="btn pay-btn">Pay $128.89</button>
        </div>
      </div>
    );
}

export default Payment
