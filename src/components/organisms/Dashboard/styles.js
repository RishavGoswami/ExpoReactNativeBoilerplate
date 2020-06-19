/*
 * @Author: Rishav G
 * @Date: 2020-05-16 00:05:33
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 21:03:44
 **/

// third-party libraries
import styled from "styled-components";
import Images from "../../atoms/Image";

// utils
import { unitToPx, getDeviceWidth } from "../../../utils";

export const Container = styled.View({
  flex: 1,
  paddingTop: ({ statusBarHeight = 48 }) => unitToPx(statusBarHeight),
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 20,
});

export const ListWrap = styled.View({
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 5,
  borderWidth: 1,
  marginBottom: 10,
});

export const ImageWrap = styled(Images)({
  width: 50,
  height: 50,
  borderRadius: 50,
});

export const Details = styled.View({
  width: getDeviceWidth() / 1.5,
});

export const ListText = styled.Text({
  fontSize: 14,
  fontWeight: "400",
  padding: 2,
});

export const FlatListComp = styled.FlatList({
  marginVertical: 20,
});
