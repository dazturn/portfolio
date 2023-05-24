/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
import Formgroupinput from "./Formgroupinput";
import Formgrouptextarea from "./Formgrouptextarea";
import Buttonprimary from "./Buttonprimary";
import Footericons from "./Footericons";
import Sectiontitle from "./Sectiontitle";
export default function Footerform(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1004px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Footerform")}
      {...rest}
    >
      <Icon
        width="1440px"
        height="344px"
        viewBox={{ minX: 0, minY: 0, width: 1440, height: 344 }}
        paths={[
          {
            d: "M0 258L60 229.333C120 200.667 240 143.333 360 150.5C480 157.667 600 229.333 720 229.333C840 229.333 960 157.667 1080 107.5C1200 57.3333 1320 28.6667 1380 14.3333L1440 0L1440 344L1380 344C1320 344 1200 344 1080 344C960 344 840 344 720 344C600 344 480 344 360 344C240 344 120 344 60 344L0 344L0 258Z",
            fill: "rgba(120,121,241,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="65.74%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
      <Flex
        gap="56px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="160.5px"
        left="520px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3352")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-end"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "form")}
        >
          <Formgroupinput
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "form-group / input14182")}
          ></Formgroupinput>
          <Formgroupinput
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "form-group / input14255")}
          ></Formgroupinput>
          <Formgrouptextarea
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "form-group / textarea")}
          ></Formgrouptextarea>
          <Buttonprimary
            display="flex"
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 24px 8px 24px"
            backgroundColor="rgba(165,166,246,1)"
            {...getOverrideProps(overrides, "button / primary")}
          ></Buttonprimary>
        </Flex>
        <Footericons
          display="flex"
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "footer / icons")}
        ></Footericons>
      </Flex>
      <Sectiontitle
        display="flex"
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="618px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "section-title")}
      ></Sectiontitle>
    </View>
  );
}
