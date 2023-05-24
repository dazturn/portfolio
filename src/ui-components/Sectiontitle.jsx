/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Sectiontitle(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Sectiontitle")}
      {...rest}
    >
      <Text
        fontFamily="Playfair Display"
        fontSize="48px"
        fontWeight="700"
        color="rgba(37,40,43,1)"
        lineHeight="72px"
        textAlign="center"
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
        children="Projects"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
      <View
        width="100px"
        height="4px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(165,166,246,1)"
        {...getOverrideProps(overrides, "Rectangle 19")}
      ></View>
    </Flex>
  );
}
