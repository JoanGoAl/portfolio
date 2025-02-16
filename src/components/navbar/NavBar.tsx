"use client"
import Link from "next/link"
import style from "./navbar.module.css"
import { useEffect, useState } from "react";
import Icon from "../icon/Icon";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import NavLinks from "./NavLinks";
export interface PagesType {
    name: string,
    href: string,
    icon?: React.ReactNode,
    onClick?: () => void
}

const pages: PagesType[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About",
        href: "/about"
    }, {
        name: "Projects",
        href: "/projects"
    }, {
        name: "Resume",
        href: "/resume"
    }
]

export default function NavBar() {

    const [expand, updateExpanded] = useState<boolean>(false);

    return (
        <nav className={`${style.nav}`}>
            <div>{"currentPage"}</div>
            <div className={style.container_links}>
                <div className={style.container__collapsed}>
                    <Icon>
                        <AiOutlineMenu onClick={() => updateExpanded(true)} />
                    </Icon>

                    <div className={`${style.lateral_nav} ${expand ? style.show_lateral_nav : ""}`}>
                        <div className={style.links_collapsed}>
                            <Icon>
                                <RxCross2 onClick={() => updateExpanded(false)} />
                            </Icon>
                            {pages.map((page: PagesType, index: number) => {
                                return <NavLinks href={page.href} name={page.name} onClick={() => updateExpanded(false)} key={"link-" + index} />
                            })}
                        </div>
                    </div>
                </div>
                <div className={style.link__full_screen}>
                    <ul>
                        {pages.map((page: PagesType, index: number) => {
                            return <NavLinks href={page.href} name={page.name} onClick={() => updateExpanded(false)} key={"link-" + index} />
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}