/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectnfoOverridesProps = {
    Projectnfo?: PrimitiveOverrideProps<ViewProps>;
    "Frame 3350"?: PrimitiveOverrideProps<FlexProps>;
    Text1103?: PrimitiveOverrideProps<TextProps>;
    Text1104?: PrimitiveOverrideProps<TextProps>;
    "bot\u00E3o / secud\u00E1rio"?: PrimitiveOverrideProps<FlexProps>;
    Text1108?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProjectnfoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProjectnfoOverridesProps | undefined | null;
}>;
export default function Projectnfo(props: ProjectnfoProps): React.ReactElement;
