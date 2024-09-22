import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "./Summary";
import View from "./View";
import { useContext, useEffect } from "react";
import { context } from "./Context";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { totalex, settotalex, totalin, settotalin, trans } =
    useContext(context);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    trans.forEach((element) => {
      element.type === "income"
        ? (income = income + parseFloat(element.amount))
        : (expense = expense + parseFloat(element.amount));
    });
    settotalex(expense);
    settotalin(income);
  }, [trans]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"green.800"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expence Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button
            onClick={onOpen}
            bg={"green.400"}
            color={"green.950"}
            ml={"4"}
          >
            Add new Transition
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalex={totalex}
        totalin={totalin}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <View
          data={trans.filter((item) => item.type === "expense")}
          type={"expense"}
        />
        <View
          data={trans.filter((item) => item.type === "income")}
          type={"income"}
        />
      </Flex>
    </Flex>
  );
}
