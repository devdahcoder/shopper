import React from 'react'
import "./assets/style/index.css"
const CompanyProfile = () => {
    return (
      <div>
        <div className="company-profile">
          <form action="">
            <div className="business-name">
              <label className="company-label" htmlFor="">
                Business Name
              </label>
              <input
                className="company-input"
                type="email"
                name=""
                id=""
                placeholder="xyz.abc@deb.com"
              />
            </div>

            <div className="company-select-input">
              <div>
                <select className="company-input" name="" id="">
                  <option value="business type">Business Type</option>
                </select>
              </div>
              <div>
                <select className="company-input" name="" id="">
                  <option value="main sale channel">Main Sale Channel</option>
                </select>
              </div>
              <div>
                <select className="company-input" name="" id="">
                  <option value="year established">Year Established</option>
                </select>
              </div>
            </div>

            <div className="business-licence">
              <div>
                <label className="company-label" htmlFor="">
                  Business Identity Type
                </label>
                <select className="company-input" name="" id="">
                  <option value="retail business licence">
                    Retail Business Licence
                  </option>
                </select>
              </div>
              <div>
                <label className="company-label" htmlFor="">
                  Business ID Number
                </label>
                <input
                  className="company-input"
                  type="number"
                  name=""
                  id=""
                  placeholder="eg.32756158421584"
                />
              </div>
            </div>
          </form>
          <div className="company-btn-container">
            <button className="btn back-btn">Go Back</button>
            <button className="btn next-btn">Next</button>
          </div>
        </div>
      </div>
    );
}

export default CompanyProfile
