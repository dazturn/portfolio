/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Topicos(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1598px"
      height="63px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Topicos")}
      {...rest}
    >
      <Text
        fontFamily="Bariol"
        fontSize="48px"
        fontWeight="700"
        color="rgba(37,40,43,1)"
        lineHeight="63.0703125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="8.49px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="• Zoom:"
        {...getOverrideProps(overrides, "\u2022 Zoom:")}
      ></Text>
      <Text
        fontFamily="Bariol"
        fontSize="48px"
        fontWeight="700"
        color="rgba(130,130,130,1)"
        lineHeight="63.0703125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="8.49px"
        width="666px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5px"
        right="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Ctrl + scroll"
        {...getOverrideProps(overrides, "Ctrl + scroll")}
      ></Text>
    </View>
  );
}
