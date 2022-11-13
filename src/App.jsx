import {useRef,useState} from 'react'
import List from './components/List/List'
import "./App.css"
import Form from './components/Form/Form';
import {v4 as id} from "uuid";

const App = () => {


  // const inputRef = useRef();

  const[initialState,setInitialState] = useState([
    // {text:"homework",id:1,isDone:false},
    // {text:"eat",id:2,isDone:false},
    // {text:"coffee",id:3,isDone:false}
  ]);

  const handleClick = (text) => {
    //e.preventDefault();
    //inputRef.current.focus();
    //inputRef.current.style.borderColor = "orange";
    // console.log(inputRef.current.value);
    // console.log(inputRef);


    const data = {}
      //data.text = inputRef.current.value;
      data.text = text;
      data.isDone = false;
      // data.id = Math.random(Date.now())*100000;
      data.id = id();
      //console.log(data);
    
    setInitialState([...initialState,data]);
    //spread operator ... copy all origin data to current
    
    //inputRef.current.value = ""; //clear input box after add
   
  }
  //console.log(initialState);
  // const [initialState,setInitialState] = useState(0);
  // const handlestateClick = (e) => {
  //   setInitialState(initialState + 1);
  // }

  const handleCheck = (id) => {
    console.log("hekkoo");
    console.log(id);
  //   setInitialState(initialState.map(i => {
  //     if(i.id === id){
  //       return {text:i.text,isDone:!i.isDone,id:i.id}
  //     }else{
  //       return i;
  //     }
  //   }))

  setInitialState(initialState.map(i => i.id === id ? {text:i.text,isDone:!i.isDone,id:i.id} : i))

}

const handleDelete = (id) => {
  console.log("del");
  console.log(id);
  setInitialState(initialState.filter(i => i.id !== id)) //get only not selected to del

}

console.log(initialState);

const handleEdit = (id) => {
  console.log("edit");
  console.log(id);

  const oldData = initialState.find(i => i.id ===id); //obj
  const value = prompt("Enter new value",oldData.text);
  console.log(value);

  //not empty string
  // if(value !== "")
  if(value){
  setInitialState(initialState.map(i => i.id === id ? {text:value,isDone:false,id:i.id} : i))
}

}

  return (
    <div>
      {/* useState 
       <p onClick={handlestateClick}>{initialState}</p> 
       */}
       <Form onSubmit={handleClick}/> 
      
      {/* {initialState.map((i,index) => <List key={index} data={i.text} age={i.id}/>)} //index use for static */}

      {initialState.map((i) => <List key={i.id} data={i.text} id={i.id} isDone={i.isDone} onChecked={handleCheck} onDelete={handleDelete} onEdit={handleEdit}/>)}

      {/* <List data="Bible" age={23} isDone/>
      <List data="Build" age={27} isDone/>
      <List data="Grey" age={3} isDone/>
      <List data="Mino" age={2} isDone={false}/>  */}



    </div>
  )
}

export default App

//props
//props => conditional styling 
//hook => functional component => Class componenet => life circle


///useRef hook => provide from react library

//stateless => statefull => useState hook


// Parent to Child => props
// Child to Parent => event emitting