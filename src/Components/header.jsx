import { Text } from "@chakra-ui/react";

function Header(){


    return <nav>
        <Text
            ml={2}
            textTransform="uppercase"
            fontSize="large"
            fontWeight="bold"
            color="#319795"
          >
            Todo List
          </Text>
    </nav>
}

export default  Header;