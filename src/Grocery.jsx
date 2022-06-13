import React from "react";
import G_input from "./component/GroceryInput"
import G_list from "./component/GroceryList"
import {v4 as uuid} from "uuid"



import './App.css';

function App() {

  const [data,setData]=React.useState([])
const addgrocery=(item)=>{
  const additem={
    item:item,
    id:uuid()
  }
  setData([...data,additem])
 
}
const g_del=(id)=>{
const update_item=data.filter((e)=>e.id!==id)
setData(update_item)
}
  return (
    <div className="App">
      <>
      <div>
        <G_input addgrocery={addgrocery} />
        <G_list data={data} g_del={g_del}/>
      </div>
      </>
    </div>
  );
 
}

export default App;
