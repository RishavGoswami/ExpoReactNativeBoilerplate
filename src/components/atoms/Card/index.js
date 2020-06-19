/*
 * @Author: Rishav G
 * @Date: 2020-05-09 13:47:47
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-05-15 18:25:00
 **/
import React from "react";

// styles
import { CardWrapper } from "./styles";

const Card = ({ children, bg, isBorder = false }) => {
  return (
    <CardWrapper bg={bg} isBorder={isBorder}>
      {children}
    </CardWrapper>
  );
};

export default Card;
