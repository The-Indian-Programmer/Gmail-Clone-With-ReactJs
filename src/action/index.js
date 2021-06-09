export const formopen = () =>{
    return {
        type:"FORMOPEN"
    }
}

export const formclose = () =>{
    return {
        type:"FORMCLOSE"
    }
}

export const signinwithgoogle = (data) =>{
    console.log(data)
    return{
        type:"SIGNIN",
        payload:data
    }
}