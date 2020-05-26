import React, {useEffect, useRef, useReducer} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(()=>{
        //focus the input element
        inputRef.current.focus()
    },[])

    return (
        <div>
            <input ref={inputRef} type='text'/>
        </div>
    )
}

export default FocusInput
