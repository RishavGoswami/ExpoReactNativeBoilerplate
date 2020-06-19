/*
 * @Author: Rishav G
 * @Date: 2020-05-09 18:49:06
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:23:30
 **/
import React from "react";

// styles
import { Title } from "./styles";

const Header = ({ title }) => {
  return <Title>{title}</Title>;
};

Header.defaultProps = {
  title: "Headed",
};

export default Header;
