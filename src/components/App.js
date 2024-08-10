
import { useEffect } from "react";
import React,{useState} from "react";
 function App(){
    const [dogImage, setDogImage]=useState([])
    const [isLoading, setLoading]=useState(true)
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response)=>response.json())
        .then((data)=>{
            setDogImage(data.message)
            setLoading(false)
        })
    },[])
return(
    <div>
        {isLoading ? (<p>Loading...</p>):(<img src={dogImage} alt="A Random Dog"/>)}
    </div>
)
 }
 export default App