import React from 'react'

function Alert(props) {

  const capital = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div style={{height:'50px'}}>
        {/* here props.alert && 1st comes under checking if this become False nxt part will not be evaluated and if it is true next part will get evaluated (kind of if else) here as props.alert was null declared so this concept was needed */}

        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                          <strong>{capital(props.alert.type)}</strong>:{props.alert.msg} {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                        </div>}

    </div>
  )
}

export default Alert
