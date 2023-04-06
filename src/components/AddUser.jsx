import { FormGroup,FormControl, InputLabel,Input,Typography,styled
,Button} from "@mui/material";

import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";
const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div{
    margin-top:20px;
}
`

const defaultValue = {
    name:"",
    username:"",
    email:"",
    phone:""
}


const  AddUser = ()=>{

    const navigate = useNavigate();
    const [user,setUser] = useState(defaultValue);
     console.log(user);


    const onValueChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }

    const addUserDetails= async()=>{
            await addUser(user);
            navigate('/all');
    }

    return(
        <Container>
            <Typography variant="h4">Add Course</Typography>
            <FormControl>
                <InputLabel>Course Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Course Code</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Faculty Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Slot</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>{addUserDetails()}}>Add Course</Button>
            </FormControl>

        </Container>
    )
}
export default AddUser;