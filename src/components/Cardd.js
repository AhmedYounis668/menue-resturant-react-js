import React from 'react'
import { Col, Row,Card } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

const Cardd = ({data}) => {
  return (
    <Row>
    {
        data.length>=1?(data.map((item)=>{
            return(

              <Zoom>
            <div key={item.id}  className='card my-3 col-12 d-flex  w-100' >
     <Card className='d-flex flex-row mb-3' style={{background:'silver'}}>
            <Card.Img loading='lazy' variant="top" src={item.imgurl} style={{width:'150px'}} className='img-card'  />
            <Card.Body>
              <Card.Title className='justify-content-between d-flex'>
              <div>{item.category}</div>
              <div>{item.price}</div>
              </Card.Title>
              <Card.Text className='my-3 mx-2'>
               <div>{item.description}</div>
                
              </Card.Text>
            </Card.Body>
          </Card> 
              
    </div>
          
          </Zoom>
            )
        })):null
    }
    
      
    </Row>
  )
}

export default Cardd
