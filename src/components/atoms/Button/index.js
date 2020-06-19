/*
 * @Author: Rishav G
 * @Date: 2020-05-09 18:49:06
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:30:21
 **/
import React from "react";

// styles
import { Button, Label } from "./styles";

const Btn = ({ title, onPress, bg }) => {
  return (
    <Button onPress={onPress} bg={bg}>
      <Label>{title}</Label>
    </Button>
  );
};

Btn.defaultProps = {
  title: "Button",
};

export default Btn;
