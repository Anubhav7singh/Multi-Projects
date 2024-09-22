import {
  Modal,
  Button,
  FormControl,
  FormLabel,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Input,
} from "@chakra-ui/react";
import { useContext } from "react";
import { context } from "./Context";
export default function Transaction({ isOpen, onClose }) {
  const { data, setdata, value, setvalue, handleformsubmit } =
    useContext(context);
  function handleform(event) {
    setdata({
      ...data,
      [event.target.name]: event.target.value,
    });
  }
  function handlesubmit(event) {
    event.preventDefault();
    handleformsubmit(data);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handlesubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Discription</FormLabel>
              <Input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
                onChange={handleform}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
                onChange={handleform}
              />
            </FormControl>
            <RadioGroup mt={"5"} value={value} onChange={setvalue}>
              <Radio
                checked={data.type === "income"}
                value="income"
                colorScheme="orange"
                name="type"
                onChange={handleform}
              >
                Income
              </Radio>
              <Radio
                checked={data.type === "expense"}
                value="expense"
                colorScheme="blue"
                name="type"
                onChange={handleform}
                ml={"3"}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr={"4"} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose} type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
