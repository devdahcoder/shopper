import React from 'react'
import "./assets/style/index.css"


const ConfirmAccount = () => {
    return (
      <div className="confirm-account">
        <div className="confirm-code">
          <div className="confirm-input">
            <label htmlFor="">
              Enter confirm code sent to your hone number
            </label>
            <div className="get-code">
              <input type="number" name="" id="" />
              <button>Confirm</button>
            </div>
          </div>

          <div className="confirm-input set-code">
            <label htmlFor="">
              Don't have a code ? <br /> Generate new code enter your hone
              number
            </label>
            <input type="number" name="" id="" />

            <button className="generate-button">Generate Code</button>
          </div>
        </div>
      </div>
    );
}

export default ConfirmAccount
