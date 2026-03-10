import React, { useState } from 'react'

function BB() {
    const [text , setText] = useState("");
      const [text1 , setText1] = useState("");
      const [tempText , setTempText] = useState("");


    function area (e){
        setText(e.target.value)
    }
          function area1 (e){
        setText1(e.target.value)
    }

    function area3 (){
        setTempText(text1)
    }


  return (
    <div>
      <input 
      onChange={area}
      type="text"
      value={text}
      placeholder='Enter Text'
      />
    <p>You Typed : {text}</p>



    <input 
      type="text"
      value={text1}
      placeholder='Enter Text'
      onChange={area1}
       />
    <button onClick={area3}> Submit </button>
    <p>You Typed : {tempText}</p>
    
    </div>
  )
}

export default BB
