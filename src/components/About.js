import React from 'react'

export default function About(props) {



    // Tt was for about section for enable dark and light mode
    // ------------------------------------------------------------------


    // const [myStyle, setMyStyle] = useState( {
    //     color:'black',
    //     backgroundColor:'white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{             
    //         if(myStyle.color==='black'){
    //             setMyStyle({color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         }) 
    //         setBtnText("Enable Light Mode")        

    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")  
    //     }
    // }

    let myStyle={
        color:props.mode==='dark'?'white':'#6d1e5b',
        backgroundColor:props.mode==='dark'?'#323343':'white' 
    }



  return (
    <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>My App</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        It is my first React App Looking forward to make more advance applications
                        </div>
                    </div>
                </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                It is free to use for anybody and everybody 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Contact</strong>
                    </button>
                </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Contact us via email and customer support
                </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}
