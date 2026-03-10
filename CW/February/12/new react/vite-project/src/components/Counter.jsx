import React from 'react';
import { useState } from 'react';

function Counter() {


  const [sortOrder , setSortOrder] = useState("asc")
  let arr = ["Parth", "Harshit", "Alex", "Mohit"];
  let arr2 = [...arr]

  if(sortOrder === "asc"){
    arr2.sort();
  }
  else{
     arr2.sort().reverse();
  }

  return (
    <div>

    <select 
    value={sortOrder}
     onChange={(e) => setSortOrder(e.target.value)}
    name="select1" id="select1">
      
      <option value="asc">A to Z</option>
      <option value="desc">Z to A</option>
    </select>

      {
        arr2.map((name, index) => (
          <p key={index}>{name}</p>
        ))
      }
    </div>
  );
}

export default Counter;