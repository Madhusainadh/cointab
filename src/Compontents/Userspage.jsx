import React from "react";
import { useSelector } from "react-redux";
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
} from "@chakra-ui/react";
const Userspage = () => {
  const { data ,loading} = useSelector((store) => store.fetchreducer);
  console.log(data);
 if(loading===true){
  return <Container><Img alt="Loading..." src={"https://motiongraphicsphoebe.files.wordpress.com/2018/10/giphy.gif"}  /></Container>
 }
  if(data.length===0){
    return <Container p={"50px"}><Heading>Click on Fectch button to get the data</Heading></Container>
  }
  return (
    <Box>
    <Container pt={"40px"}  >
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Gender</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((e) => (
            <>
              <Tr key={Date.now()}>
                <Td>{e.name.first}</Td>
                <Td>{e.dob.age}</Td>
                <Td>{e.gender}</Td>
              </Tr>
            </>
          ))}
        
        </Tbody>
      </Table>
      </Container>
    </Box>
  );
};

export default Userspage;
