import { TableBody, TableHead, TableRow, TableCell,Table,styled, Button } from "@mui/material";
import { color } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";


import {Link} from 'react-router-dom'
import { getUsers,deleteUser } from "../service/api";


const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0px auto;
`

const THead  = styled(TableRow)`
background :#000000;
& > th{
    color:#fff;
    font-size:20px;

}
`;

const TBody = styled(TableRow)`
& > td{
    font-size : 20px;
}
`
const  AllUser = ()=>{
   
    useEffect(()=>{
      getAllUsers();
    },[]);

    const [users,setUsers] = useState([]);
   const getAllUsers = async ()=>{
     let response = await getUsers();
     setUsers(response.data);
     console.log(response);
   }

   const deleteUserdetails = async (id)=>{
    await deleteUser(id);
    getAllUsers();
   }

    return(
        <StyledTable >
                <TableHead>
                    <THead>
                        <TableCell>Id</TableCell>
                        <TableCell>Course Name</TableCell>
                        <TableCell>Course Code</TableCell>
                        <TableCell>Faculty Name</TableCell>
                        <TableCell>Slot</TableCell>
                        <TableCell></TableCell>
                    </THead>
                </TableHead>
                <TableBody>
                    {
                        users.map(user=>(
                            <TBody>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={()=>deleteUserdetails(user._id)}>Delete</Button>
                                </TableCell>
                            </TBody>
                        ))
                    }
                </TableBody>
        </StyledTable >
    )
}
export default AllUser;