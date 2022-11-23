import { Navbar as NavbarBS, Container, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Badge, IconButton } from "@mui/material"



export function Navbar(){
    return <NavbarBS sticky='top' className='bg-white shadow-sm mb-3 p-3'>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
                        <Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
                        <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
                    </Nav>
                    <IconButton>
                        <Badge color="error" badgeContent={1}>
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Container>
           </NavbarBS>
}