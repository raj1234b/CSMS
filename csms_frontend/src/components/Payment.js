import React from 'react'

export default function Payment(props) {

 const handleClick = () => {
    props.toggle();
   };
console.log("in payment")
  return (
    <div className="modal" style={{
      display: "none",
      position: "fixed",
      zIndex: "1",
      backgroundColor: "rgba(0, 0, 0, 0.25)"
    }}>
     <div className="modal_content" style={{ backgroundColor: "white",
  position: "absolute"}}>
     <span className="close" onClick={()=>{handleClick()}}>&times;    </span>
     <p>I'm A Pop Up!!!</p>
    </div>
   </div>
  )
}
