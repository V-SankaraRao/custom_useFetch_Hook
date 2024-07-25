import { useEffect,useState } from "react";

export default function useFetchHook(url,options={}){

const [loading,setLoading]=useState(false); // to display loading component
const [currData,setCurrData]=useState(null); // to hold cur data
const [error,setError]=useState(null);       // if error occurs


async function fetchData()
{
    setLoading(true);
    try{
        let res=await fetch(url);
        let data=await res.json();
        setCurrData(data.products);
        setLoading(false);
        setError(null);

    }
    catch(e){
     console.log(e);
     setError(e);
     setLoading(false);
    }

}


useEffect(()=>{
   fetchData();
},[url]);  // it have to render when url changes

return {error,currData,loading}; // return data items

}