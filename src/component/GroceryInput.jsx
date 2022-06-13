import React from "react"

const G_input=({addgrocery})=>{
const [Item,setItem]=React.useState("")
// console.log(Item)

    return (
    <div>
    <input type="text"  placeholder="Add item" value={Item}
    onChange={(event)=>setItem(event.target.value)}

     />
     
     <br />
     <button
        onClick={() => {addgrocery(Item);
          setItem("");
          // inputRef.current.focus();
        }}
      >
        ADD ITEM
      </button>

    </div>
)
}
 export  default G_input