import { Box, Flex, Heading, Text } from "@chakra-ui/react";
export default function View({ type, data }) {
  return (
    <Box
      w={"full"}
      flex={"1"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      bg={"cyan.200"}
      border={"1px solid"}
      borderColor={"green.950"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"green.900"}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
      </Flex>
      {data.map((item) => (
        <Flex
          bg={type === "expense" ? "red.50" : "blue.50"}
          mt={"4"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid"}
          borderColor={type === "expense" ? "red.100" : "blue.100"}
          p={"4"}
          borderRadius={"8"}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text ml={"3"} fontWeight={"bold"} color={"green.950"}>
              {item.description}
            </Text>
          </Flex>
          <Text>{item.amount}</Text>
        </Flex>
      ))}
    </Box>
  );
}
