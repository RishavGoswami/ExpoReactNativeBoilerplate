/*
 * @Author: Rishav G
 * @Date: 2020-05-16 00:05:33
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:31:11
 **/

// third-party libraries
import styled from "styled-components";

// utils
import { unitToPx } from "../../../utils";

export const Container = styled.View({
  flex: 1,
  paddingTop: ({ statusBarHeight = 48 }) => unitToPx(statusBarHeight),
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 20,
});

export const Wrap = styled.View({
  marginTop: 20,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "flex-start",
});
