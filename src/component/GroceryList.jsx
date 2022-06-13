import React from "react"
const G_list=({data,g_del})=>{
    console.log(data)
return(<>

{
    data.map((e)=>(
<div key={e.id} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
<b><h3>{e.item}</h3></b>
<br />
<button onClick={()=>{g_del(e.id)}}>REMOVE</button>
</div>

    ))
}
</>
   
)
}

 export default G_list