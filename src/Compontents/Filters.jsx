import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Container,
  Heading,
  Img,
  Image,
  Flex,
  Button,
  Select,
} from "@chakra-ui/react";
import { fetchuserdetails } from '../Store/fetchdata/fectdataaction';
const Filters = () => {
    const { data, loading, totalpages, currentpage,sort ,limit} = useSelector(
        (store) => store.fetchreducer
      );
      const dispatch = useDispatch()
  return (
    <div>
    <Flex gap={"30px"}>
    <Button
      onClick={() =>{
        dispatch(
          fetchuserdetails({ page: currentpage||1, sort: "dob.age,1" })
        )
        dispatch({ type: "setsort",  payload:{sortinfo: "dob.age,1" } })

      }
      }
      
    >
      Sort Age by Ase order
    </Button>
    <Button
      onClick={() =>{
        dispatch(
          fetchuserdetails({ page: currentpage||1, sort: "dob.age,-1" })
        )
        dispatch({ type: "setsort", payload:{sortinfo: "dob.age,-1" }})}
      }
    >
      Sort Age by Desc order
    </Button>

    <Select placeholder={limit} onChange={(e)=>{dispatch(
      fetchuserdetails({ page: currentpage||1, sort: sort,limit:e.target.value })
    )
    dispatch({type:"Limit",payload:e.target.value})
  }
  } w={"100px"} >
    <option value="5" >5</option>
    <option value="10">10</option>
    <option value="20">20</option>
    </Select>
  </Flex>
    </div>
  )
}

export default Filters
