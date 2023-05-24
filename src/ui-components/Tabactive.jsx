/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Tabactive(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="2px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Tabactive")}
      {...rest}
    >
      <Text
        fontFamily="Raleway"
        fontSize="18px"
        fontWeight="500"
        color="rgba(37,40,43,1)"
        lineHeight="28px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sobre"
        {...getOverrideProps(overrides, "Sobre")}
      ></Text>
      <View
        width="unset"
        height="2px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(37,40,43,1)"
        {...getOverrideProps(overrides, "Rectangle 11")}
      ></View>
    </Flex>
  );
}
