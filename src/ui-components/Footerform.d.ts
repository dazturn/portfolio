/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
import { FormgroupinputProps } from "./Formgroupinput";
import { FormgrouptextareaProps } from "./Formgrouptextarea";
import { ButtonprimaryProps } from "./Buttonprimary";
import { FootericonsProps } from "./Footericons";
import { SectiontitleProps } from "./Sectiontitle";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterformOverridesProps = {
    Footerform?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Frame 3352"?: PrimitiveOverrideProps<FlexProps>;
    form?: PrimitiveOverrideProps<FlexProps>;
    "form-group / input14182"?: FormgroupinputProps;
    "form-group / input14255"?: FormgroupinputProps;
    "form-group / textarea"?: FormgrouptextareaProps;
    "button / primary"?: ButtonprimaryProps;
    "footer / icons"?: FootericonsProps;
    "section-title"?: SectiontitleProps;
} & EscapeHatchProps;
export declare type FooterformProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterformOverridesProps | undefined | null;
}>;
export default function Footerform(props: FooterformProps): React.ReactElement;
