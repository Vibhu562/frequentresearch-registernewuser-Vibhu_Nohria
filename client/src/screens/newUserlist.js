import React from "react";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getAllNewUsers } from "../actions/newuserActions";
export default function NewUserslist() {
  const dispatch = useDispatch()
  const getallnewusersstate = useSelector((state) => state.getAllNewUsersReducer);
  const { users, loading, error } = getallnewusersstate;
  useEffect(() => {
    dispatch(getAllNewUsers());
  }, [])
 
  return (
    <div className="table-responsive-sm me-3 ms-2 card text-center shadow p-3 mb-5 bg-white rounded">
    
      <h2 className="justify-content-center ">User list</h2>
      <table className='table table-bordered '>
        <thead>
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          {users &&  users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td> 
                  <td>{user.email}</td>  
                  <td>{user.countryChoice}</td>          
                  <td>{user.stateChoice}</td>          
                  <td>{user.city}</td>    
                  <td>{user.selectedOption}</td>      
                  <td>{user.dob}</td> 
                  <td>{user.age}</td>          
         


         
                  <td>
                   
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <a style= {{color:'black'}} href='/' className='m-3'>Click Here to Register</a>

    </div>
  );
}
