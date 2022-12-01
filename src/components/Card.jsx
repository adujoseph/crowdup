import React from 'react';
import { useNavigate } from "react-router-dom";

const Card = () => {
  // const history = useHistory();
  let navigate = useNavigate();
  function handleClick() {
    navigate("/project_details/2");
  }
  return (
      <div className='w-[300px] h-[200px] flex items-center justify-center flex-col space-y-4 my-16 mx-10'>
          <img src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded' alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur impedit non quis omnis accusamus corrupti temporibus nesciunt. Voluptatem iusto, lique.</p>
          <button className='p-2 text-white capitalize bg-blue-500 rounded w-max' onClick={handleClick}>see details</button>
    </div>
  )
}

export default Card
