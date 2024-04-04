import {
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Flex w="100%" justify="space-between" px="10%" py="2rem">
      <Link to="/">BowalPay</Link>

      <List display="flex" flexDir="row" alignItems="center" spacing={3}>
        <ListItem gap={4}>
          Freelancers
          <ListIcon />
        </ListItem>

        <ListItem>
          Business
          <ListIcon />
        </ListItem>

        <ListItem>
          Marketplace
          <ListIcon />
        </ListItem>
      </List>

      <VStack flexDir="row">
        <Text>Sign in</Text>

        <Button>Register</Button>
      </VStack>
    </Flex>
  );
};

export default NavigationBar;
