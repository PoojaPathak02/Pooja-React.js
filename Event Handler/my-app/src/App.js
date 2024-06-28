import logo from './logo.svg';
import './App.css';
import './Components/Post.css'
import Post from './Components/Post';
import { useState } from 'react';

function App() {
  const [call,setcall]=useState("false")
  return (
    <div className="App">
      <button onClick={()=>setcall(!call)}>{call ? "GET POSTS" : "POSTS"}</button>

      <div>
      {call ? "" : <Post/>}
     </div>
    </div>
  );
}

export default App;
