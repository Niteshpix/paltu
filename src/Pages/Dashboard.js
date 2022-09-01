import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../Redux/services/Apis';


function Dashboard() {

  const dispatch = useDispatch();
  const  auth  = useSelector((state) => state.auth);
  console.log(auth)


  useEffect(() => {
    dispatch(getCategories())
  
  }, [dispatch])
  


  return (
    <div className='dashbard'>
    <h3>Categories</h3>
    </div>
  )
}

export default Dashboard