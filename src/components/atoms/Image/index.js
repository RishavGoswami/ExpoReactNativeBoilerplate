/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-08 02:42:38
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 20:51:31
 */

import React from "react";
import { Image } from "react-native";

const Images = ({ source, style, isUrl }) => {
  const imgSrc = isUrl
    ? {
        uri: source,
      }
    : source;
  return <Image source={imgSrc} style={style} />;
};

export default Images;
