/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { TabdefaultProps } from "./Tabdefault";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Daziah Turner"?: PrimitiveOverrideProps<TextProps>;
    nav?: PrimitiveOverrideProps<FlexProps>;
    "tab / default5275"?: TabdefaultProps;
    "tab / default5276"?: TabdefaultProps;
    "tab / default5280"?: TabdefaultProps;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
