/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SectiontitleOverridesProps = {
    Sectiontitle?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SectiontitleProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SectiontitleOverridesProps | undefined | null;
}>;
export default function Sectiontitle(props: SectiontitleProps): React.ReactElement;
