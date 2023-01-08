import React from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchdata, fetchuserdetails } from "../Store/fetchdata/fectdataaction";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    let dispatch = useDispatch()
 let navigate = useNavigate()

    const fetchusers = ()=>{
      navigate("/")
        dispatch(fetchdata())
    }

    const userdetails =()=>{
      navigate("/usersDetails")
      dispatch(fetchuserdetails({page:1,sort:""}))
    }

  return (
    <Box>
      <Flex justifyContent={'space-around'} pt={"20px"} flexWrap={"wrap"} >
        <Button onClick={fetchusers}  >Fetch Users</Button>
        <Button  onClick={()=>dispatch({type:"Deleteuser"})} >Delete Users</Button>
        <Button  onClick={userdetails}   >Users Deteils</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
