import axios from 'axios';

export const newregisterNewUser=(user)=>dispatch=>{

    dispatch({type : "NEWUSER_REGISTER_REQUEST"})

    axios 
        .post("/api/newusers/register" , user)
        .then(res=>{
            dispatch({type : "NEWUSER_REGISTER_SUCCESS"})
            console.log(res);
        })
        .catch(err=> {
            dispatch({type : "NEWUSER_REGISTER_FAILED" , payload: err})
            console.log(err);
        } );
}




export const getAllNewUsers=()=>dispatch=>{


    dispatch({type:'GET_ALLNEWUSERS_REQUEST'})

    axios.get('/api/newusers/getallnewusers').then(res=>{

      dispatch({type:'GET_ALLNEWUSERS_SUCCESS' , payload : res.data})


    }).catch(err=>{
      dispatch({type:'GET_ALLNEWUSERS_FAILED' , payload : err})

    })
 

}
