import React from "react"
import styles from './FormsControls.module.css'


// export const Textarea = ({input, meta, ...props})=>{   /*  here we apply destructurisation, Rest operator.  input separately, meta separately, and whatever left goes to props */
// /* let {input, meta} = props  */   /* here we assign input, but props still have the same input and everything else */
 
// const hasError = meta.touched && meta.error

// return(
//         <div className={`${styles.formControl} ${hasError? styles.error : "" }         ` }>
//             <div>
//             <textarea   {...input}  {...props} />
//             </div>
//            {hasError &&  <span>{meta.error}</span>} 
//         </div>
//     )
// }







export const Textarea = (props)=>{  
    const {input, meta, ...RestProps} = props
    return(<FormControl {...props}> <textarea   {...input}  {...RestProps} /> </FormControl>)     /* so we render FormControl and inside him sending a "child" textarea */
}






// export const Input = ({input, meta, ...props})=>{ 
 
// const hasError = meta.touched && meta.error

// return(
//         <div className={`${styles.formControl} ${hasError? styles.error : "" }         ` }>
//             <div>
//             <input   {...input}  {...props} />
//             </div>
//            {hasError &&  <span>{meta.error}</span>} 
//         </div>
//     )
// }


export const Input = (props)=>{ 
    const {input, meta, ...RestProps} = props
return(
<FormControl {...props}> <input   {...input}  {...RestProps} /> </FormControl>
    )
}




const FormControl = ({input, meta, children, ...props})=>{

    const hasError = meta.touched && meta.error

    return(
            <div className={`${styles.formControl} ${hasError? styles.error : "" }         ` }>
                <div>
                {props.children}
                </div>
               {hasError &&  <span>{meta.error}</span>} 
            </div>
        )

}



export const TestComponent = (props)=>{
    //debugger
    const {input, meta, ...restProps} = props
    const hasError = meta.touched && meta.error
    return(
                <div className={`${styles.formControl} ${hasError? styles.error : "" }` }>
                    <div>
                    <input   {...input}  {...props} />
                    </div>
                   {hasError &&  <span>{meta.error}</span>} 
                </div>
            )
}