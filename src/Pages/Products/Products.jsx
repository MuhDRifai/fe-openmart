import React, { useState } from 'react';
import "./Products.scss"
import List from '../../Components/List/List';
import { useParams } from 'react-router-dom';


const Products = () => {

const catId = parseInt(useParams().id)
const [maxPrice, setMaxPrice] = useState(500000)
const[sort,setSort] = useState(null)


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Drink</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">Cake Ingredients</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">Cooking Spices</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='4' value={4} />
            <label htmlFor="4">Snacks</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='5' value={5} />
            <label htmlFor="5">Rice</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='6' value={6} />
            <label htmlFor="6">Frozen Meat</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>Rp0</span>
            <input
              type="range" min={0} max={500000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>Rp{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
  <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort('asc')} />
  <label htmlFor="asc">Price (Lowest First)</label>
</div>
<div className="inputItem">
  <input type="radio" id='desc' value='desc' name='price' onChange={e => setSort('desc')} />
  <label htmlFor="desc">Price (Highest First)</label>
</div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://images.tokopedia.net/img/cache/576x192/LGBbIR/2023/8/9/e3f1d3ea-825f-4b5f-9482-0b69387b27ec.png" alt="" />
      <List cstId= {catId} maxPrice ={maxPrice} sort ={sort}/>
      </div>
    </div>
  )
}

export default Products;
