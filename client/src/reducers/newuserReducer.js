export const newregisterNewUserReducer = (state ={} , action )=>{

    switch(action.type)
    {
        case 'NEWUSER_REGISTER_REQUEST' : return {
            ...state , 
            loading : true
        }
        case 'NEWUSER_REGISTER_SUCCESS' : return {
            ...state , 
            loading : false ,
            success : true
        }
        case 'NEWUSER_REGISTER_FAILED' : return {
            ...state , 
            loading : true ,
            error : 'User Already Register'
        }
        default : return state 
    }
}




export const getAllNewUsersReducer = (state={users : []} , action)=>{

    switch(action.type)
    {
      case 'GET_ALLNEWUSERS_REQUEST' : return {
          ...state ,
          loading : true
      }
      case 'GET_ALLNEWUSERS_SUCCESS' : return {
          ...state ,
          loading : false , 
          users : action.payload
      }
      case 'GET_ALLNEWUSERS_FAILED' : return {
          ...state ,
          loading : false,
          error : action.payload
      }
  
      default : return state
    }
  
  }

  