import React from 'react'
import offer1 from "../assets/offer1.jpeg"
import offer2 from "../assets/offer2.jpeg"
import offer3 from "../assets/offer3.jpeg"
import offer4 from "../assets/offer4.jpeg"

const Offers = () => {
  return (
    <section class="offers">
        <div class="container">
            <img class="offer" src={offer1} />
            <img class="offer" src={offer2} />
            <img class="offer" src={offer3} />
            <img class="offer" src={offer4} />
        </div>
    </section>
  )
}

export default Offers