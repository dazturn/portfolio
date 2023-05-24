/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LabelProps } from "./Label";
import { TextareaProps } from "./Textarea";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormgrouptextareaOverridesProps = {
    Formgrouptextarea?: PrimitiveOverrideProps<FlexProps>;
    label?: LabelProps;
    textarea?: TextareaProps;
} & EscapeHatchProps;
export declare type FormgrouptextareaProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormgrouptextareaOverridesProps | undefined | null;
}>;
export default function Formgrouptextarea(props: FormgrouptextareaProps): React.ReactElement;
