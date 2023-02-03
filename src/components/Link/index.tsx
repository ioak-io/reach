import React, { useState, useRef, useEffect } from "react";
import ThemeType from "../types/ThemeType";
import "./style.css";

export interface LinkProps {
    theme?: ThemeType;
    noUnderline?: boolean;
    noGlow?: boolean;
    onClick?: any;
    onSubmit?: any;
    onReset?: any;
    children?: any;
    label?: string;
};

/**
 * Component to render drop down input form element. Supports multi select and auto complete features
 */
const Link = (props: LinkProps) => {
    return (
        <div>{props.label}</div>
    );
};

export default Link;