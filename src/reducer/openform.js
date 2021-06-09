const initialState = false;    /// For the default value of state here state is like a variable
const  formhandle  = ( state=initialState ,action) => {   /// We have to inc/dec number so create function changeTheNumber which takes two arguments state(a variable) and action (which action we have to perform which we have declared in action/index.js file)
   
 switch (action.type) {   		
        case "FORMOPEN":    /// For the increment action which we had defined in action/index.js
            state = true;
            console.log("Form is opened")
            return state;
            break;
    
        case "FORMCLOSE":       /// For the decrement action which we had defined in action/index.js
        console.log("Form is closed")
            state = false;
            return state
            break;
            
        default:
            return state     /// By default
            break;
    }
} 

export default formhandle; 
