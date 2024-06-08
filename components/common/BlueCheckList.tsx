import { Flex, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

type Props = {
  listItems: string[];
};

function BlueCheckList({ listItems }: Props) {
  return (
    <List spacing={4} my="3rem">
      {listItems.map((item, index) => (
        <ListItem key={index}>
          <Flex align="center">
            <FaCheck color="#3585F7" size={24} style={{ marginRight: '1.5rem' }} />
            {item}
          </Flex>
        </ListItem>
      ))}
    </List>
  );
}

export default BlueCheckList;
