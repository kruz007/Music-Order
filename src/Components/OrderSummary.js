import React, { useState } from "react";
import "../Components/OrderSummary.css";
import MusicVibes from "../Assets/illustration-hero.svg";
import Icon from "../Assets/icon-music.svg";

const OrderSummary = () => {
  let annualPlan = { plan: "Annual Plan", price: "$59.99/year" };
  let monthlyPlan = { plan: "Monthly Plan", price: "$4.99/month" };

  const [subscription, setSubscription] = useState(annualPlan);

  let change = () => {
    if (subscription.plan === "Annual Plan") {
      setSubscription(monthlyPlan);
    } else {
      setSubscription(annualPlan);
    }
  };

  let remove = () => {
    setSubscription([]);
  };

  let done = ()=>{
    alert("Payment Successful")
  }

  return (
    <>
      <div className="container">
        <div className="hero">
          <img src={MusicVibes} placeholder="music vibes"></img>
        </div>
        <div className="rookie">
          <section className="section-1">
            <h1>Order Summary</h1>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </section>
          <section className="section-2">
            <div className="section-2-main">
              <img src={Icon}></img>
              <div>
                <h3>{subscription.plan}</h3>
                <p>{subscription.price}</p>
              </div>
            </div>
            <div className="section-2-sub">
              <p id="change" onClick={change}>
                Change
              </p>
            </div>
          </section>
          <section className="section-3">
            <button onClick={done}>
              Proceed to Payment
            </button>
            <p onClick={remove}>Cancel Order</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
