import { useState } from 'react'
import './App.css'

function App() {

  const [text,setText] = useState('');
  const [length,setLength] = useState(0);

  const[checkbox,setCheckbox] = useState([]);

  const characters ={
   numbers : '0123456789',
   upperCase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
   lowerCase : 'abcdefghijklmnopqrstuvwxyz',
   symbols : '!@#$%^&*()_<>?{}~'
  }

  function checked(e){
    if(e.target.checked){
      setCheckbox([...checkbox,characters[e.target.value]]);
    }  
    else{
      setCheckbox(checkbox.filter((ch)=>{
          return ch !== characters[e.target.value];
      }));
    }  
  }
  
  
 
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

      const terms = checkbox.join("");
       
        let pass = '';
        for(let i=0;i<length;i++){
          pass += terms[Math.floor(Math.random()*terms.length)];
          
        }
        setText(pass);
   }

   function copy(){
    navigator.clipboard.writeText(text);
    alert("Password Copied!!!");
    location.reload();
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
      <input type="number" placeholder='0' onChange={e=>setLength(e.target.value)}></input>
     </div>
    

     <div id="checkbox">
      <input type="checkbox" id="upperCase" value ="upperCase" onChange={(e)=>checked(e)} ></input><label>Include Upper Case</label>
      <br></br>
      <input type="checkbox" id="lowerCase" value = "lowerCase" onChange={(e)=>checked(e)}></input><label>Include Lower Case</label>
      <br></br>
      <input type="checkbox" id="numbers" value="numbers" onChange={(e)=>checked(e)}></input><label>Include Numbers</label>
      <br></br>
      <input type="checkbox" id="symbols" value="symbols" onChange={(e)=>checked(e)} ></input><label>Include Symbols</label>
     </div>
     <div id="button">
     <button onClick={generatePassword} id="generate">Generate Password</button>
     </div>
    </div>
  )
}

export default App;
