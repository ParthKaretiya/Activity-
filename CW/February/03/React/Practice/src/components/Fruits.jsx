import React from 'react';

function Fruits() {
    const fruits = [
        { name: "Orange", price: "120" },
        { name: "Banana", price: "150" },
        { name: "Apple", price: "180" }
    ];

    return (
        <div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {fruit.name} - ₹{fruit.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Fruits;
