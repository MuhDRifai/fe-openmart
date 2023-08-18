import React from 'react'
import Card from "../Card/Card.jsx"
import "./List.scss"

function List({ cstId, maxPrice, sort }) {
    const data = [
        {
            id: 1,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/1/14/3aca2029-a968-4b09-9d50-f66e5b882d2b.png",
            img2: "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/7/1/b7fc1d19-10da-47b1-b168-aef9a290779f.jpg",
            tittle: "Kopi Kapal Api Tanker",
            isNew: true,
            oldPrice: 48000,
            newPrice: 40000
        },
        {
            id: 2,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/18/6a79339b-844e-4967-8d59-34336a8f6272.jpg",
            img2: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/5/3/e99ef9bc-6fd4-46f1-beb7-01541f538dea.jpg",
            tittle: "Minyak Goreng Sunco 2L",
            isNew: true,
            oldPrice: 36500,
            newPrice: 35000
        },
        {
            id: 3,
            img: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/9/16/b4607c17-d06e-41f3-8f3d-967e7be3331c.jpg",
            img2: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/25/adc5500c-4bfe-4397-a70f-c6b0f4b19775.jpg",
            tittle: "LE MINERALE GALON 15L",
            isNew: true,
            oldPrice: 23000,
            newPrice: 20500
        },
        {
            id: 4,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/29/e621fd16-592f-4e60-9907-bfa2b549a873.png",
            img2: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/29/136cd0f8-b5b1-451b-b4fe-f4b238a86f74.png",
            tittle: "TUKU - TUKUCUR Cokelat 1L ",
            isNew: true,
            oldPrice: 120000,
            newPrice: 105000
        }
    ]

     
  let sortedProducts = [...data];
  if (sort === 'asc') {
    sortedProducts.sort((a, b) => a.newPrice - b.newPrice);
  } else if (sort === 'desc') {
    sortedProducts.sort((a, b) => b.newPrice - a.newPrice);
  }

  const filteredProducts = sortedProducts.filter(item => item.newPrice <= maxPrice);

  return (
     <div className='list'>{filteredProducts.map(item => (
      <Card item={item} key={item.id} />
    ))}</div>
  );
}

export default List

