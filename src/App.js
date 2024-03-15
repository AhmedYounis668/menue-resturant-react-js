import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Cardd from "./components/Cardd";
import Header from "./components/Header";
import Itemslest from "./components/Itemslest";
import NavBaar from "./components/NavBaar";
import { items } from "./Data";


function App() {
  const allcat=['الكل',...new Set(items.map((i)=>i.category))]
  const [data,setdata]=useState(items);
  const filterbycat=(cat)=>
  {
if(cat==="الكل")
{
  setdata(items)
}
else
{
  const newarray=items.filter((item)=>item.category===cat)
  setdata(newarray);

}
  }

 const filterbysearch=(word)=>{
  if(word!='')
  {
    const newarr=items.filter((item)=>item.category===word)
    setdata(newarr);
  }
 }
  return (
    <div className="">
   <NavBaar filterbysearch={filterbysearch} />
   <Container>

    <Header/>
    <Itemslest filterbycat={filterbycat} allcat={allcat}/>
<Cardd data={data}/>
    


   </Container>
    </div>
  );
}

export default App;
