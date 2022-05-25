import React from 'react';
import restaurant1 from "../assets/restaurant1.jpeg"
import restaurant2 from "../assets/restaurant2.jpeg"
import restaurant3 from "../assets/restaurant3.jpeg"
import restaurant4 from "../assets/restaurant4.jpeg"
import restaurant5 from "../assets/restaurant5.jpeg"
import restaurant6 from "../assets/restaurant6.jpeg"
import restaurant7 from "../assets/restaurant7.jpeg"

const Restorents = () => {
  return (
    
    
    <div className="container divider">
            <div className="cards">
                <div class="card">
                    <img width="254" height="160px" src={restaurant1} />
                    <div class="restaurant-details">
                        <div class="restaurant-title">Chaitanya Parathas</div>
                        <div class="restaurant-subtitle">North India, Punjabi, Chinese, Thalis Combo, Beverages </div>
                    </div>
                    <div class="restaurant-info">
                        <div class="restaurant-ratings">
                            <i class="material-icons star-icon">star</i> 4.3
                        </div>
                         .<div class="restaurant-delivery-timings"> 33 MINS</div> .
                        <div class="restaurant-cost-for-two">₹200 FOR TWO</div>
                    </div>
                    <div class="offer-banner">
                        <span class="material-icons"> local_offer </span>
                        <span class="offer-text">20% off | Use TRYNEW</span>
                    </div>
                </div>
                <div class="card">
                    <img width="254" height="160px" src={restaurant2} />
                    <div class="restaurant-details">
                        <div class="restaurant-title">MH 12 Pav Bhaji</div>
                        <div class="restaurant-subtitle">Snacks, Pizza, Beverages, Steet Food</div>
                    </div>
                    <div class="restaurant-info">
                        <div class="restaurant-ratings">
                            <i class="material-icons star-icon">star</i> 4.0
                        </div>
                         .<div class="restaurant-delivery-timings"> 25 MINS</div> .
                        <div class="restaurant-cost-for-two">₹250 FOR TWO</div>
                    </div>
                    <div class="offer-banner">
                        <span class="material-icons"> local_offer </span>
                        <span class="offer-text">10% off | Use TRYNEW</span>
                    </div>
                </div>
                <div class="card">
                    <img width="254" height="160px" src={restaurant3}/>
                    <div class="restaurant-details">
                        <div class="restaurant-title">Lunch Box</div>
                        <div class="restaurant-subtitle">North India, Punjabi, Combo, Biryani, Healthy Food, Jain, Thalis </div>
                    </div>
                    <div class="restaurant-info">
                        <div class="restaurant-ratings">
                            <i class="material-icons star-icon">star</i> 4.2
                        </div>
                         .<div class="restaurant-delivery-timings"> 31 MINS</div> .
                        <div class="restaurant-cost-for-two">₹200 FOR TWO</div>
                    </div>
                    <div class="offer-banner">
                        <span class="material-icons"> local_offer </span>
                        <span class="offer-text">20% off | Use TRYNEW</span>
                    </div>
                </div>
                <div class="card">
                    <img width="254" height="160px" src={restaurant4} />
                    <div class="restaurant-details">
                        <div class="restaurant-title">The Hungry Hippe</div>
                        <div class="restaurant-subtitle">Chinese, Italian, Thai</div>
                    </div>
                    <div class="restaurant-info">
                        <div class="restaurant-ratings">
                            <i class="material-icons star-icon">star</i> 2.0
                        </div>
                        .
                        <div class="restaurant-delivery-timings"> 38 MINS</div>
                        .
                        <div class="restaurant-cost-for-two">₹500 FOR TWO</div>
                    </div>
                    <div class="offer-banner">
                        <span class="material-icons"> local_offer </span>
                        <span class="offer-text">40% off | Use TRYNEW</span>
                    </div>
                </div>
                <div class="card">
                    <img width="254" height="160px" src={restaurant5} />
                    <div class="restaurant-details">
                        <div class="restaurant-title">Ovenstory Pizzas</div>
                        <div class="restaurant-subtitle">Pizzas</div>
                    </div>
                    <div class="restaurant-info">
                        <div class="restaurant-ratings">
                            <i class="material-icons star-icon">star</i> 4.1
                        </div>
                         .<div class="restaurant-delivery-timings"> 45 MINS</div> .
                        <div class="restaurant-cost-for-two">₹600 FOR TWO</div>
                    </div>
                    <div class="offer-banner">
                        <span class="material-icons"> local_offer </span>
                        <span class="offer-text">50% off | Use TRYNEW</span>
                    </div>
                </div>
                <div class="card">
                    <img width="254" height="160px" src={restaurant6} />
                    <div class="restaurant-details">
                        <div class="restaurant-title">Starbucks Coffee</div>
                        <div class="restaurant-subtitle">Beverages, Ice Cream</div>
                    </div>
                    <div class="restaurant-info">
                        <div class="restaurant-ratings">
                            <i class="material-icons star-icon">star</i> 4.3
                        </div>
                         .<div class="restaurant-delivery-timings"> 38 MINS</div> .
                        <div class="restaurant-cost-for-two">₹400 FOR TWO</div>
                    </div>
                    <div class="offer-banner">
                        <span class="material-icons"> local_offer </span>
                        <span class="offer-text">40% off | Use TRYNEW</span>
                    </div>
                </div>
                <div class="card">
                    <img width="254" height="160px" src={restaurant7} />
                    <div class="restaurant-details">
                        <div class="restaurant-title">Punjabi Dhaba</div>
                        <div class="restaurant-subtitle">North Indian , Punjabi</div>
                    </div>
                    <div class="restaurant-info">
                        <div class="restaurant-ratings">
                            <i class="material-icons star-icon">star</i> 4.3
                        </div>
                         .<div class="restaurant-delivery-timings"> 38 MINS</div> .
                        <div class="restaurant-cost-for-two">₹400 FOR TWO</div>
                    </div>
                    <div class="offer-banner">
                        <span class="material-icons"> local_offer </span>
                        <span class="offer-text">40% off | Use TRYNEW</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Restorents