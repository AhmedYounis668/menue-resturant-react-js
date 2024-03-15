import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Itemslest = ({filterbycat,allcat}) => {
   const onfilter=(cat)=>
   {
filterbycat(cat);
   }
  return (
    <Row className='my-2 mb-5' >
    
        
      <Col className='justify-content-center d-flex'>  
     
      {
        allcat.length>=1?(allcat.map((cat)=>{
return(
    <div >


<Button onClick={()=>onfilter(cat)} className="btn btn-danger  mb-5 mx-1">{cat}</Button>
</div>
)
        })):null
 
      }
                


     
    
      
      </Col>
  
      
         
    </Row>
  )
}

export default Itemslest
