import { LinkProps } from "next/link";
import React from "react";

export interface PagesType {
    name: string,
    href: string,
    icon?: React.ReactElement,
    onClick?: () => void
}

export interface LinkButtonType extends LinkProps {

    /**
     * Define el color del botón.
     * @default "primary"
     */
    variant?: "primary" | "icons",

    children: React.ReactElement
}