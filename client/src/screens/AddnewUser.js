import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { newregisterNewUser } from '../actions/newuserActions';
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from '../components/Success';

export default function AddnewUser() {
    const registerstates = useSelector(state=>state.newregisterNewUserReducer)
    const {loading , error,success} = registerstates
    const states = {
        India: ['Rajasthan', 'Maharashtra'],
        USA: ['Texas', 'California']
      }
    
      const cities = {
        Rajasthan: ['Jaipur', 'Kota'],
        Maharashtra: ['Mumbai', 'Nagpur'],
        Texas: ['Houstan', 'Austin'],
        California: ['Los Angeles', 'San Francisco']
      }
      
      
    
      const handleCountryChoice = (e) => {
        const val = e.target.value;
        setCountryChoice(() => val);
      }
    
      const handleStateChoice = (e) => {
        const val = e.target.value;
        setStateChoice(() => val);
      }
      const handleCityChoice = (e) => {
        const val = e.target.value;
        setCityChoice(() => val);
      }
    

    const [firstname , setfirstname] = useState("")
    const [lastname , setlastname] = useState("")
    const [countryChoice, setCountryChoice] = useState('select');
    const [stateChoice, setStateChoice] = useState('select');
    const [dob, setDOB] = useState('');
    const [age, setAge] = useState('');  
    const [selectedOption, setSelectedOption] = useState('');
    const [email, setEmail] = useState('');
    const [cityChoice,setCityChoice] = useState('')
    const [validEmail, setValidEmail] = useState(true);
  
    const handleEmailChange = (event) => {
      const emailInput = event.target.value;
      setEmail(emailInput);
  
      // Email validation regex
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
      // Check if the entered email matches the regex pattern
      const isValidEmail = emailInput.match(emailRegex);
  
      setValidEmail(isValidEmail);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (validEmail) {
          alert('Valid email address!');
          // Perform further actions
        } else {
          alert('Invalid email address!');
        }
      };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };  
    useEffect(() => {
      if (dob) {
        const dobDate = new Date(dob);
        const today = new Date();
  
        let calculatedAge = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
  
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
          calculatedAge--;
        }
  
        setAge(calculatedAge);
      }
    }, [dob]);

    const [validDOB, setValidDOB] = useState(true);

  const handleDOBChange = (event) => {
    const dobInput = event.target.value;
    setDOB(dobInput);
    setValidDOB(validateDOB(dobInput));
  };

  const validateDOB = (dob) => {
    const selectedDate = new Date(dob);
    const currentDate = new Date();
    const minAgeDate = new Date(currentDate.getFullYear() - 14, currentDate.getMonth(), currentDate.getDate());

    return selectedDate <= minAgeDate;
  };

  const handleSubmits = (event) => {
    event.preventDefault();
    if (validDOB) {
        // Perform form submission logic here
        console.log('Form submitted!');
        console.log('DOB:', dob);
  
        // Reset form values
        setDOB('');
      } else {
        console.log('Invalid DOB!');
      }
    };

    if (validDOB) {
      // Perform form submission logic here
      console.log('Form submitted!');
      console.log('DOB:', dob);
    }
    const today = new Date().toISOString().split('T')[0];

    const dispatch= useDispatch()
    function register(e) {  
    e.preventDefault()

        const user = {
            firstname : firstname ,
            lastname: lastname,
            email : email ,
            countryChoice:countryChoice,
            stateChoice:stateChoice,
            selectedOption:selectedOption,
            city:cityChoice,
            dob:dob,
            age:age,
          
    
        }
         selectedOption !== "" && validDOB && validEmail ?
        dispatch(newregisterNewUser(user) )
        :
        alert("Any data is incorrect ")
    }
    
 


  return (
   <div>
   <div className='row justify-content-center m-3'>
   <div className='col-md-5 card p-3 shadow p-3 mb-5 bg-white rounded' style={{marginTop: '100px'}}>
        <div className='div' onSubmit={register}>
            <h2 className='text-center m-3'style={{display: 'inline'}}>Register</h2>
            <i className='fa fa-user-plus'></i>
            {error && (<Error error="Email Id Already Registered" />)}
            {loading && (<Loader />)}
            {success && (<Success success='Your Registration is Successful'/>)}
            <form>
            <input type = "text"  pattern="[A-Za-z]+"  placeholder='First Name' className='form-control' value = {firstname} required onChange = {(e)=>{setfirstname(e.target.value)}} /><br></br>
            <input type = "text" pattern="[A-Za-z]+" placeholder='Last Name' className='form-control' value = {lastname} required onChange = {(e)=>{setlastname(e.target.value)}} /><br></br>
            <input
        type="text"
        value={email}
        
        onChange={handleEmailChange}
        placeholder="Enter your email address"
        className={!validEmail ? 'invalid form-control' : 'form-control'}
      />
      {!validEmail && <div className="error-message " style={{fontWeight:"bold"}}>Invalid email address</div>}<br></br>
            <select className='form-control'  onChange={(e) => handleCountryChoice(e)} name="country" id="country">
          <option value="select">Select</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {
          countryChoice !== 'select' &&
          <select className='form-control'  onChange={(e) => handleStateChoice(e)} name="city" id="city">
            <option value="select">Select</option>
            {
              states[countryChoice].map((city, idx) => <option key={idx} value={city}>{city}</option>)
            }
          </select>
        }
        {
          stateChoice !== 'select' &&
          <select className='form-control'  name="city" id="city" onChange={(e) => handleCityChoice(e)}>
            {
              cities[stateChoice].map((city, idx) => <option key={idx} value={city}>{city}</option>)
            }
          </select>
        }<br></br>
         <input
          type="radio"
          value="Male"
          checked={selectedOption === 'Male'}
          onChange={handleOptionChange}
          required
        />
        Male<div></div>
        <input
          type="radio"
          value="Female"
          checked={selectedOption === 'Female'}
          onChange={handleOptionChange}
          required
        />Female  <br></br>
 <input
          type="date"
          value={dob}
          className='form-control'
          onChange={handleDOBChange}
          required
          max = {today}
        />
      {!validDOB && <p className="error-message">Invalid date of birth</p>}
     
        <input className='form-control'  type="text" id="age" name="age" value={age} readOnly /><br></br>
        <div className='text-end'>
        <button type = 'submit' className='btn mt-3' >Register</button>
        </div>
        
        </form>    
        </div>
        <a style= {{color:'black'}} href='/user' className='m-3'>Click Here for Users</a>
      </div>
     </div>     
   </div>
   
  )
}
