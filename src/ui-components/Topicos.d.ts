/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopicosOverridesProps = {
    Topicos?: PrimitiveOverrideProps<ViewProps>;
    "\u2022 Zoom:"?: PrimitiveOverrideProps<TextProps>;
    "Ctrl + scroll"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TopicosProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopicosOverridesProps | undefined | null;
}>;
export default function Topicos(props: TopicosProps): React.ReactElement;
