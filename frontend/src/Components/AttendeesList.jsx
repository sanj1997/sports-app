import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ListItem } from "@chakra-ui/react";
import React from "react";

const AttendeesList = ({data}) => {
  return (
    <ListItem>
       {data}
    </ListItem>
  );
};

export default AttendeesList;
