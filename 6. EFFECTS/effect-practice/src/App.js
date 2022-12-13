import {useEffect, useState} from "react";

function Hello(){
  useEffect(()=>{
    console.log("Here");
    return () => console.log("destroy");
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>  
    )
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (e) => setKeyword(e.target.value);

  // useEffect(()=>{
  //   console.log("i run only once.");
  // }, []);
  
  // useEffect(()=>{
  //   console.log("SEARCH FOR", keyword);
  // }, [keyword]);
  // return (
  //   <div>
  //     <input 
  //       value={keyword}
  //       onChange={onChange} 
  //       type="text" 
  //       placeholder="Search here.." 
  //     />
  //     <h1>{counter}</h1>
  //     <button onClick={onClick}>click me</button>
  //   </div>
    
  // );
}

export default App;
