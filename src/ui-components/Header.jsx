/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Tabdefault from "./Tabdefault";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="56px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Text
        fontFamily="Comfortaa"
        fontSize="18px"
        fontWeight="700"
        color="rgba(37,40,43,1)"
        lineHeight="32.39999771118164px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12px"
        left="120px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Daziah Turner"
        {...getOverrideProps(overrides, "Daziah Turner")}
      ></Text>
      <Flex
        gap="48px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="14px"
        right="120px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "nav")}
      >
        <Tabdefault
          display="flex"
          gap="2px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "tab / default5275")}
        ></Tabdefault>
        <Tabdefault
          display="flex"
          gap="2px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "tab / default5276")}
        ></Tabdefault>
        <Tabdefault
          display="flex"
          gap="2px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "tab / default5280")}
        ></Tabdefault>
      </Flex>
    </View>
  );
}
