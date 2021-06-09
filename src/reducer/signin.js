   /// For the default value of state here state is like a variable
const signin = (state={user:null} ,action) => {   /// We have to inc/dec number so create function changeTheNumber which takes two arguments state(a variable) and action (which action we have to perform which we have declared in action/index.js file)
   
 switch (action.type) {   		
        case "SIGNIN":  
        // console.log("Fromthe sign.sj",action.payload)  
          state=action.payload 
          return{
              state
            }
            
        default:
            return{
                state
            }
    }
} 

export default signin; 