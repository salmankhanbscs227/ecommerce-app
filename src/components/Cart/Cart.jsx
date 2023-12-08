import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

const Cart = () => {
  const data = [
    {
      id:1,
      img:"https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/11411384/pexels-photo-11411384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Long Sleeve Graphic T-shirt",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam sit nobis totam recusandae soluta veritatis consequatur, voluptas culpa officiis harum error, hic ea aperiam quos illo omnis iusto ut.",
      isNew:true,
      oldPrice:19,
      price:12,


  },
  {
      id:2,
      img:"https://images.pexels.com/photos/7820738/pexels-photo-7820738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Coat",
      esc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam sit nobis totam recusandae soluta veritatis consequatur, voluptas culpa officiis harum error, hic ea aperiam quos illo omnis iusto ut.",
      isNew:true,
      oldPrice:20,
      price:12,

  }
  ];
  return (
    <div className='cart'>
      <h1>Product in your Cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="price">1 x {item.price}</div>

          </div>
          <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123
        </span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">reset cart</span>
      
    </div>
  )
}

export default Cart
