import { useState } from 'react'
import './App.css'

function App() {

  const [text,setText] = useState('');
  const [length,setLength] = useState(0);

  const[checkbox,setCheckbox] = useState([]);

   const numbers ='0123456789';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = '!@#$%^&*()_<>?{}~';
  
  
 
   function generatePassword(){
      
        console.log(length);

        if(length<8 || length>50){
          alert("Length out of mentioned range");
          console.log("length")
          return;
        }
        if(checkbox.length == 0){
          alert("--All checks are empty--");
          console.log("length")
          return;
        }

        console.log(checkbox);
        let terms =[];
        checkbox.map((e)=>{
          //  console.log(e);
           terms+= eval(...e);
           console.log(terms);
        })
       
        let pass = '';
        for(let i=0;i<length;i++){
          let index =  Math.floor(Math.random()*terms.length);
          pass+= terms[index];
        }
        setText(pass);
        
   }

   function copy(){
    navigator.clipboard.writeText(text);
    alert("Password Copied!!!");
   }

  return (
    <div id="container">
     <h1>Password Generator</h1>
     <div id="password">
      <input type="text" disabled value={text}></input>
      <button onClick={copy}>📋</button>
     </div>
     <div id="input">
      <label>Select Password length (**8-50 characters**)</label>
      <input type="number" placeholder='8' onChange={e=>setLength(e.target.value)}></input>
     </div>
    

     <div id="checkox">
      <input type="checkbox" id="upperCase" onChange={e=>setCheckbox([...checkbox,e.target.id])}></input><label>Include Upper Case</label>
      <br></br>
      <input type="checkbox" id="lowerCase" onChange={e=>setCheckbox([...checkbox,e.target.id])}></input><label>Include Lower Case</label>
      <br></br>
      <input type="checkbox" id="numbers" onChange={e=>setCheckbox([...checkbox,e.target.id])}></input><label>Include Numbers</label>
      <br></br>
      <input type="checkbox" id="symbols" onChange={e=>setCheckbox([...checkbox,e.target.id])}></input><label>Include Symbols</label>
     </div>
<div id="button">
     <button onClick={generatePassword} id="generate">Generate Password</button>
     </div>
    </div>
  )
}

export default App;
