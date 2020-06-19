/*
 * @Author: Rishav G
 * @Date: 2020-05-14 18:06:43
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 19:49:45
 **/
import styled from "styled-components";

// styles
import { color } from "../../../style";

export const CardWrapper = styled.View({
  flex: 1,
  borderRadius: ({ isBorder }) => isBorder || 0,
  backgroundColor: ({ bg }) => (bg ? bg : color.white),
});
