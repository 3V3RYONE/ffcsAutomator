import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background:#111111
`

const Tabs = styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`
const Navbar = ()=>{
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Course Registration</Tabs>
                <Tabs to='/all'>All Courses</Tabs>
                <Tabs to='/add'>Add Course</Tabs>
                <Tabs to='/view'>View Courses</Tabs>
            </Toolbar>
        </Header>
    )
}
export default Navbar;