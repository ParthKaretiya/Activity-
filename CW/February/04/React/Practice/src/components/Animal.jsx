function Animal (){

    let animals = ["cat" , "dog" , "horse"]
    return (
        <div>
            
       {animals.map((animal) => (
        <h1>{animal}</h1>
       ))}

        </div>
    )
}

export default Animal