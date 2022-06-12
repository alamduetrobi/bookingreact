import React from 'react'
import "./searchitem.css"

function SearchItem() {
  return (
    <div className='searchItem'>
        <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" alt="" className='siImg' />
        <div className="siDesc">
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className='siDistance'>500m  from center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire Studio. 1 bothroom .21m 1 full bed
            </span>
            <span className='siCancelOp'>Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You Can Cancel later, so lock in this great price today
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>0.9</button>
            </div>
            <div className="isDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and frees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem