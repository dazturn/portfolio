/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Bienvelopefill(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Bienvelopefill")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="42px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.67%"
        bottom="16.67%"
        left="6.25%"
        right="6.25%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="42px"
          height="32px"
          viewBox={{ minX: 0, minY: 0, width: 42, height: 32 }}
          paths={[
            {
              d: "M0.13125 4.14667C0.395898 2.96865 1.04647 1.91683 1.97642 1.16349C2.90637 0.410143 4.06057 -8.13185e-05 5.25 1.2091e-08L36.75 1.2091e-08C37.9394 -8.13185e-05 39.0936 0.410143 40.0236 1.16349C40.9535 1.91683 41.6041 2.96865 41.8687 4.14667L21 17.104L0.13125 4.14667ZM0 7.192L0 26.136L15.2329 16.648L0 7.192ZM17.7476 18.2133L0.501375 28.952C0.927482 29.8648 1.60001 30.6358 2.44068 31.1754C3.28135 31.715 4.25558 32.001 5.25 32L36.75 32C37.7443 32.0002 38.7181 31.7136 39.5583 31.1736C40.3985 30.6335 41.0705 29.8622 41.496 28.9493L24.2498 18.2107L21 20.2293L17.7476 18.2107L17.7476 18.2133ZM26.7671 16.6507L42 26.136L42 7.192L26.7671 16.648L26.7671 16.6507Z",
              fill: "rgba(37,40,43,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
