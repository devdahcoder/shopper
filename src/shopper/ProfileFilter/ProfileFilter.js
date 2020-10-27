import React from 'react'
import "./assets/style/index.css"
import Material from "../Material/Material"
import Finish from "../Finish/Finish"
import Style from "../Style/Style"


const ProfileFilter = () => {
    return (
        <div className="profile-filter">
            <div className="product-filter-header">
                <p>filter products</p>
            </div>
            <Material />
            <Finish />
            <Style />

            <div className="available-filter">
                <div>
                    <div className="available-header-text"><p>available</p></div>
                    <div className="available-input">
                        <input type="checkbox" name="" id=""/> <label htmlFor="">In stock</label>
                    </div>
                </div>
            </div>

            <div className="colors-container">
                <div className="colors-header-text">
                    <p>colors</p>
                </div>
                <div className="colors-display">
                    <div className="color-1 colors"></div>
                    <div className="color-2 colors"></div>
                    <div className="color-3 colors"></div>
                    <div className="color-4 colors"></div>
                    <div className="color-5 colors"></div>
                    <div className="color-6 colors"></div>
                    <div className="color-7 colors"></div>
                </div>
            </div>
        </div>
    )
}

export default ProfileFilter







// *{
//     margin: 0;
//     padding: 0;
// }
// .rate {
//     float: left;
//     height: 46px;
//     padding: 0 10px;
// }
// .rate:not(:checked) > input {
//     position:absolute;
//     top:-9999px;
// }
// .rate:not(:checked) > label {
//     float:right;
//     width:1em;
//     overflow:hidden;
//     white-space:nowrap;
//     cursor:pointer;
//     font-size:30px;
//     color:#ccc;
// }
// .rate:not(:checked) > label:before {
//     content: '★ ';
// }
// .rate > input:checked ~ label {
//     color: #ffc700;    
// }
// .rate:not(:checked) > label:hover,
// .rate:not(:checked) > label:hover ~ label {
//     color: #deb217;  
// }
// .rate > input:checked + label:hover,
// .rate > input:checked + label:hover ~ label,
// .rate > input:checked ~ label:hover,
// .rate > input:checked ~ label:hover ~ label,
// .rate > label:hover ~ input:checked ~ label {
//     color: #c59b08;
// }

/* Modified from: https://github.com/mukulkant/Star-rating-using-pure-css */



//   <div class="rate">
//     <input type="radio" id="star5" name="rate" value="5" />
//     <label for="star5" title="text">5 stars</label>
//     <input type="radio" id="star4" name="rate" value="4" />
//     <label for="star4" title="text">4 stars</label>
//     <input type="radio" id="star3" name="rate" value="3" />
//     <label for="star3" title="text">3 stars</label>
//     <input type="radio" id="star2" name="rate" value="2" />
//     <label for="star2" title="text">2 stars</label>
//     <input type="radio" id="star1" name="rate" value="1" />
//     <label for="star1" title="text">1 star</label>
//   </div>