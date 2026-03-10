import React ,{useState} from 'react'

function Event() {
    const [count , setCount] = useState(0)
    const [factor , setFactor] = useState(1)

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
        setFactor(factor-1)
    }


  return (
    <div>

        <h1>This is my counter: {count}</h1>
      

    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>

      <h1>This is my Factor: {factor}</h1>
       <button onClick={up}>Increase</button>
    <button onClick={down}>Decrease</button>



    </div>
  )
}

export default Event

