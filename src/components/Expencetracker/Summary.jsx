import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Transaction from "./Transcition";
import Chartt from "./Chart";
export default function Summary({ onClose, isOpen, totalin, totalex }) {
  return (
    <Box
      display="flex"
      p="6"
      overflow={"hidden"}
      borderRadius={"10"}
      background={"green.300"}
    >
      <Flex
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={"1"}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"20"}
          mr={"2"}
          bg={"green.200"}
        >
          <Heading size={"md"} mb={"2"} color={"green.950"} mt={"1"}>
            Balance is ${totalin - totalex}
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            height={"100px"}
            border={"1px solid"}
            borderColor={"green.950"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"green.950"}>$ {totalin}</Heading>
              <Text color={"green.950"}>Total income</Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            height={"100px"}
            border={"1px solid"}
            borderColor={"green.950"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"green.950"}>$ {totalex}</Heading>
              <Text color={"green.950"}>Total Expence</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={"1"}
          mt={"10"}
          ml={"-90px"}
          mr={"5"}
          w={"300px"}
          h={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading>
            <Chartt expense={totalex} income={totalin} />
          </Heading>
        </Box>
      </Flex>
      <Transaction onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}
