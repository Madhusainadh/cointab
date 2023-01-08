import React, { useEffect, useState } from "react";
import { Box, Button, chakra, Flex, Icon } from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconBase } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchuserdetails } from "../Store/fetchdata/fectdataaction";

export const Pagination = () => {
  // const [products, setProducts] = useState([1,2,3,4,5,6,7]);
  const [page, setPage] = useState(1);
  const { data, loading, 
    totalpages,currentpage,sort,limit
     } = useSelector((store) => store.fetchreducer);

  let dispatch = useDispatch()
 
  
  const activeStyle = {
    bg: "blue",
    _dark: { bg: "brand.500" },
    color: "white",
  };
  console.log(sort)

  const selectPageHandler = async (selectedPage) => {
   
      setPage(selectedPage);
    console.log(sort)
   dispatch(fetchuserdetails({page:selectedPage||1,sort,limit}))
   
  };
  
  return (
    <div className="App">
      {true && (
        <Box m={"10px"} >
          <Button
          disabled={currentpage===1}
            onClick={() => selectPageHandler(currentpage - 1)}
            mx={1}
            px={4}
            py={2}
            rounded="md"
            bg="black"
            _dark={{ bg: "gray.800" }}
            color="white"
            opacity={0.6}
            _hover={activeStyle}
          >
            <IconBase
              as={IoIosArrowBack}
              color="gray.700"
              _dark={{ color: "gray.200" }}
              boxSize={4}
            />
          </Button>
          {[...Array( totalpages)].map((_, i) => {
            return (
              <Button
              key={i}
                disabled={currentpage===i+1}
                onClick={() => selectPageHandler(i + 1)}
                mx={1}
                px={4}
                py={2}
                rounded="md"
                bg="black"
                _dark={{ bg: "gray.800" }}
                color="white"
                opacity={0.6}
                _hover={activeStyle}
              >
                {i + 1}
              </Button>
            );
          })}{" "}
          <Button
          disabled={page===totalpages}
            onClick={() => selectPageHandler(currentpage + 1)}
            mx={1}
            px={4}
            py={2}
            rounded="md"
            bg="black"
            _dark={{ bg: "gray.800" }}
            color="white"
            opacity={0.6}
            _hover={activeStyle}
          >
            <Icon
              as={IoIosArrowForward}
              color="gray.700"
              _dark={{ color: "gray.200" }}
              boxSize={4}
            />
          </Button>
        </Box>
      )}
    </div>
  );
};
