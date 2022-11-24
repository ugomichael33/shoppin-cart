import { Navbar as NavbarBS, Container, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Badge, IconButton } from "@mui/material"
import { useShoppingCart } from "../context/ShoppingCartContext"



export function Navbar(){
    const {openCart, cartQuantity} = useShoppingCart()


    return <NavbarBS sticky='top' className='bg-white shadow-sm mb-3 p-3'>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
                        <Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
                        <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
                    </Nav>
                    <IconButton onClick={openCart}>
                        <Badge color="error" badgeContent={cartQuantity}>
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Container>
           </NavbarBS>
}