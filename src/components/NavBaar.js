import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from "react-bootstrap";
import { useState } from 'react';
const NavBaar = ({filterbysearch}) => {
 const onsearch=()=>
 {
  filterbysearch(searchvalue);
 }
 const [searchvalue,setsearchvalue]=useState('')

  return (
    <Row>
       <Navbar bg="dark" variant='dark' expand="lg">
      <Container >
        <Navbar.Brand href="#"><div style={{color:'red'}}>Resturant</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex w-100">
            <Form.Control
              type="text"
              placeholder="ابحث....."
              className="me-2 "
              style={{textAlign:'center'}}
             onChange={(e)=>setsearchvalue(e.target.value)}
             value={searchvalue}
            />
            <Button onClick={()=>onsearch()}  variant="outline-success" className='mx-2 '>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavBaar
