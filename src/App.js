import './App.css';
import useFetchHook from './UseFetchHook';
function App() {
  let {error,currData,loading}=useFetchHook("https://dummyjson.com/products",{}); //calling like normal function
  console.log(loading,error,currData);
  return (
    <div className="App">
      <h1>Use Fetch Custom Hook &#129517;</h1>
      {
        loading?<h3>Its Loading Please Wait!</h3>:null
      }
      <div className='data'>{
        currData&&currData.map((i)=><h3 key={i.key}>{i.title}</h3>)
      }</div>
      
    


    </div>
  );
}

export default App;
