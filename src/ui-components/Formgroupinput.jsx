/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Label from "./Label";
import Input from "./Input";
import { Flex } from "@aws-amplify/ui-react";
export default function Formgroupinput(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Formgroupinput")}
      {...rest}
    >
      <Label
        width="44px"
        height="22px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "label")}
      ></Label>
      <Input
        width="400px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(232,236,244,1)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "input")}
      ></Input>
    </Flex>
  );
}
