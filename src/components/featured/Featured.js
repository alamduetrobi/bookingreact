import React from 'react'
import"./feature.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
        <img className='featuredImg' src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" alt="" />
            <div className="featuredTitles">
               
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
        <img className='featuredImg' src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" alt="" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
        <img className='featuredImg' src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" alt="" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured