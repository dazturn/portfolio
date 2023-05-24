/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TabactiveOverridesProps = {
    Tabactive?: PrimitiveOverrideProps<FlexProps>;
    Sobre?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type TabactiveProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TabactiveOverridesProps | undefined | null;
}>;
export default function Tabactive(props: TabactiveProps): React.ReactElement;
