import React ,{useEffect, useState} from 'react'

function Event() {
    const [count , setCount] = useState(0)
    const [factor , setFactor] = useState(1)
    const [text , setText] = useState("");
    const [time ,setTime] = useState(0);
    const [isStart ,setStart] = useState(true)


    function start (){
        if(isStart){
            setInterval(() => {
                setTime(prev => prev+1)
            }, 1000);
            
        }
        else{
            clearInterval = 
        }
    }

    function increase(){
        setCount(count+factor)
    }

    function decrease(){
        if(count >0){
            setCount(count-factor)
        }
    }
    function up(){
       
        setFactor(factor+1)
    }
    function down(){
        if(factor > 0){
             setFactor(factor-1)
        }
       
    }
   useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

    

    function texto (e){
        setText(e.target.value) 
    }

   function reset() {
  setCount(0);
  setFactor(1);
  setText("");
}


    

  return (
    <div>

        <h1>This is my counter: {count}</h1>
      

    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>

    <br />


    <input  
    type="text"
     placeholder='Enter Text' 
     value={text}
     onChange={texto}
     />

     <h2>You Type : {text}</h2>

     <br />

      <h1>This is my Factor: {factor}</h1>
       <button onClick={up}>Increase</button>
    <button onClick={down}>Decrease</button>

<button onClick={reset}>Reset all </button>

<br />

<button onClick={start}>Start</button>

<h2>This is Time : {time}</h2>


    </div>
  )
}

export default Event

