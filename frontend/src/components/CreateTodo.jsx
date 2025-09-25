import { useState } from "react"

export function CreateTodo()
{
    //  react query
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style={{
            padding: 10,
            margin:10
        }} type="text" placeholder="title" onChange={function (e) {
            const value=e.target.value;
            console.log(value);
        }}></input> <br/>

        <input style={{
            padding: 10,
            margin:10
        }} type="text" placeholder="Description"></input> <br /> <br />

        <button style={{
            padding: 10,
            margin:10
        }} onClick={() => {
            // axios
            fetch("http://localhost:3000/todos", {
                method:"POST",
                body: JSON.stringify({
                    title: title,
                    description:description
                }),
                headers:{
                    "contentType":"application/json"
                }
            })
            .then(async function(res) {
                const json=await res.json();
                alert("Todo added")
            })
        }}> Add a To-Do</button>
    </div>
}

