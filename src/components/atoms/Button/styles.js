/*
 * @Author: Rishav G
 * @Date: 2020-05-15 23:56:05
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 19:49:54
 **/
// third party components
import styled from "styled-components";

// utils
import { getDeviceWidth } from "../../../utils";

// styles
import { color } from "../../../style";

export const Button = styled.TouchableOpacity({
  width: getDeviceWidth() - 50,
  backgroundColor: ({ bg }) => (bg ? bg : color.matteBlack),
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 5,
  height: 38,
  padding: 5,
});

export const Label = styled.Text({
  fontSize: 24,
  letterSpacing: 2,
  color: color.sandyBeach,
});
