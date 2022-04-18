export const required=(value)=>{
    if (value){return undefined}    /* if everything is ok - return undefined */
    return "Field is required"
    
}


/* validator on the type of thunk */
export const maxLengthCreator = (maxLength)=>{

    return(
        (value)=>{
            if( value &&  value.length>maxLength){return `max length is ${maxLength} symbols`}
            return undefined}
    )
}

