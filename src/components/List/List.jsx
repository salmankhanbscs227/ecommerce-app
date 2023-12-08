import { DriveFileRenameOutline } from "@mui/icons-material"
import Card from "../Card/Card.jsx"
import React from 'react'
import "./list.scss"

const List = () => {
    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/11411384/pexels-photo-11411384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        

        },
        {
            id:2,
            img:"https://images.pexels.com/photos/7820738/pexels-photo-7820738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            isNew:true,
            oldPrice:20,
            price:12,

        },
        {
            id:3,
            img:"https://images.pexels.com/photos/13214677/pexels-photo-13214677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Skirt",
            isNew:true,
            oldPrice:20,
            price:12,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/2084359/pexels-photo-2084359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Hat",
            isNew:true,
            oldPrice:20,
            price:12,
        }
    ]
  return (
    <div className='list'>
      {data?.map(item=>(
     <Card item={item} key={item.id}/>
  
  ))}
 </div>
  );

}
export default List