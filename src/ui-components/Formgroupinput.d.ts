/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LabelProps } from "./Label";
import { InputProps } from "./Input";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormgroupinputOverridesProps = {
    Formgroupinput?: PrimitiveOverrideProps<FlexProps>;
    label?: LabelProps;
    input?: InputProps;
} & EscapeHatchProps;
export declare type FormgroupinputProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormgroupinputOverridesProps | undefined | null;
}>;
export default function Formgroupinput(props: FormgroupinputProps): React.ReactElement;
