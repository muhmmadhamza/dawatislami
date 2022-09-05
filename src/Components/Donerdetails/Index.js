import React from "react";
import "./index.css";
function DonnerDetials() {
  return (
<>
    <div className="containte">

      <p className="dontionate-info">Donation detalists</p>
      {/* <h6 className="donation-text-info">Donation Details</h6> */}
      <div className="wrapper-container">
        <input type="text" className="text-heade-one" placeholder="Cell no" />
        <input type="text" className="text-head-to" placeholder="Donor name" />
        <input type="text" className="text-header-three" placeholder="Donor Email" />
        <input type="text" className="text-header-four" placeholder="Address" />
 
        <p className="third-dropdown">
          <select name="cars" id="cars" className="text-header2">
            <option value="purpose">pakistan</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </p>
        <p className="fourth-dropdown">
          <select name="cars" id="cars" className="text-header2">
            <option value="volvo">Lahore</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          {/* <select name="cars" id="cars" className="text-box">
            <option value="volvo">Finance department</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select> */}
       <input type= "text" className="text-headers" placeholder="Additional information" />
        </p>

       
      </div>
      <div className="footer">
      <p className="total-amount">Total Amount:PKR.0</p>
      <div className="button-group">
      <button className="btn-danger">Save</button>
      <p className="line">|</p>
      <button className="btn-warnings">+ Add line</button>
      </div>
    </div>
    </div>
    
    </>
  )
}
export default DonnerDetials;
