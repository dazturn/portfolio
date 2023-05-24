/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Buttonprimary(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="8px 24px 8px 24px"
      backgroundColor="rgba(253,196,53,1)"
      {...getOverrideProps(overrides, "Buttonprimary")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="500"
        color="rgba(37,40,43,1)"
        lineHeight="27px"
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
        children="Projects"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </Flex>
  );
}
