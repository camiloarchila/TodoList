import { Link } from "react-router-dom";
import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";

export function Menu() {
  return (
      <UnorderedList ml="30">
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/AboutUs">About Us</Link>
        </ListItem>
        <ListItem>
          <Link to="/App">Task List</Link>
        </ListItem>
      </UnorderedList>
  );
}