import React from 'react'
import {Navbar,Nav, Form,FormControl,Button} from 'react-bootstrap'

const NavBar = ({setinputsearch}) => {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">BIENVENUE DANS VOTRE SITE</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/add">Ajouter un client </Nav.Link>
        <Nav.Link href="/contacts">Mes clients</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl onChange={(e)=>setinputsearch(e.target.value)} type="text" placeholder="Search CONTACT" className="mr-sm-2" />
      </Form>
    </Navbar>

    )
}

export default NavBar
