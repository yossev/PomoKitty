import React, { useState } from "react";
function Todo()
{
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]); // Array of tasks to do
    // Helper Function
    function addItem(){

        if(!newItem){
            alert("Please enter a task 🐈");
        }
        const item = { // Add a comma here
            id: Math.random(),
            value: newItem,
        };

        setItems(oldList => [...oldList, item]);
        setNewItem("");

    }

    function deleteItem(id){
        setItems(oldList => {
            const newList = oldList.filter((item) => item.id !== id);
            setItems(newList);
        });
    }

    return (
        <div className='todo'>
            <h2>My Todo-List</h2>
            <input
                className="input"
                type="text"
                placeholder="What do you want to do?"
                value = {newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={()=> addItem()}>Add</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.value}
                        <button className='delete-button' onClick={() => deleteItem(item.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;