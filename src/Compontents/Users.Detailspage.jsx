import React, { useEffect, useState } from "react";
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
import { Pagination } from "./Pagination";
import { fetchuserdetails } from "../Store/fetchdata/fectdataaction";
import Filters from "./Filters";
const UsersDetailspage = () => {
  const [usersdata, setusersdata] = useState([]);
  const { data, loading, totalpages, currentpage,sort } = useSelector(
    (store) => store.fetchreducer
  );
  
  const dispatch = useDispatch();
  if (loading === true) {
    return (
      <Container>
        <Img
          alt="Loading..."
          src={
            "https://motiongraphicsphoebe.files.wordpress.com/2018/10/giphy.gif"
          }
        />
      </Container>
    );
  }
  if (data.length === 0) {
    return (
      <Container p={"50px"}>
        <Heading>Click on Fectch button to get the data</Heading>
      </Container>
    );
  }
  return (
    <Box>
      <Container pt={"40px"}>
       <Filters/>
        <Table>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Gender</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((e) => (
              <Tr key={e._id}>
                <Td>
                  <Image src={e.picture.medium} />
                </Td>
                <Td>{e.name.first}</Td>
                <Td>{e.dob.age}</Td>
                <Td>{e.gender}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
      <Container pt={"20px"} minW={"700px"}>
        {" "}
        <Pagination />
      </Container>
    </Box>
  );
};

export default UsersDetailspage;
