/*
 * @Author: Rishav G
 * @Date: 2020-05-16 00:05:33
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 20:20:42
 **/

// third-party libraries
import styled from "styled-components";

// utils
import { unitToPx } from "../../../utils";

export const Container = styled.View({
  flex: 1,
  paddingTop: ({ statusBarHeight = 48 }) => unitToPx(statusBarHeight),
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 20,
});

export const ListWrap = styled.View({
  padding: 10,
  borderWidth: 1,
  marginBottom: 10,
});

export const ListText = styled.Text({
  fontSize: 18,
  fontWeight: "400",
  padding: 2,
});

export const FlatListComp = styled.FlatList({
  marginVertical: 20,
});
