import React, {useEffect, useState} from 'react'
import './App.css'

const Component = () => {
  const [data, setData] = useState({
    item: "Item",
    brand: "Brand",
    units: "Units",
    quantity: "Quantity"
  })

  const stuffs = [
    {
      item: 'Butter Bread',
      brand: 'Natures Own',
      units: '12oz',
      quantity: 1,
      isPurchased: false
    },
    {
      item: 'Whole Milk',
      brand: 'Great Value',
      units: '128oz',
      quantity: 1,
      isPurchased: false
    },
    {
      item: 'Plain Almonds',
      brand: 'Blue Diamond',
      units: '14oz',
      quantity: 0,
      isPurchased: false
    }
  ]

  const handleSumbit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return(
    <div>
      <h3> Add a New Item </h3>
      <form onSubmit={handleSumbit}>
        <input onChange={(e) => setData({...data, item: e.target.value})} type="text" id="item" defaultValue={data.item}/><br/>
        <input onChange={(e) => setData({...data, brand: e.target.value})} type="text" id="brand" defaultValue={data.brand} /><br/>
        <input onChange={(e) => setData({...data, units: e.target.value})} type="text" id="units" defaultValue={data.units} /><br/>
        <input onChange={(e) => setData({...data, quantity: e.target.value})} type="text" id="qty" defaultValue={data.quantity} /><br/>
        <input type="submit" value="Add Item" id="submit"/>
      </form> <br/> <br/>

      {stuffs.map((stuff, i) => {
        return(
          <div key={i} id="list">
            {!stuff.isPurchased ? 
            <div id="item"> 
            <h1> {stuff.item} </h1>
            <h3> Brand: {stuff.brand} </h3>
            <h3> Units: {stuff.units} </h3>
            <h3> Quantity: {stuff.quantity} </h3> </div> : null }
          </div> 
      )})}
    
    </div>
  )
}

export default Component
