"use client"
import Link from "next/link"
import style from "./navbar.module.css"
import { useState } from "react";
import Icon from "../icon/Icon";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

interface PagesType {
    name: string,
    href: string,
    icon?: React.ReactNode
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
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);
    return (
        <nav className={`${style.nav} `}>
            <div></div>
            <div className={style.container_links}>
                <div className={style.container__collapsed}>
                    {
                        expand ? <>
                            <Icon>
                                <RxCross2 onClick={() => updateExpanded(false)} />
                            </Icon>
                            <div className={style.links_collapsed}>
                                {pages.map((page: PagesType, index: number) => {
                                    return <Link href={page.href} key={"link-" + index}>{page.name}</Link>
                                })}
                            </div>
                        </> : <Icon>
                            <AiOutlineMenu onClick={() => updateExpanded(true)} />
                        </Icon>
                    }


                </div>
                <div className={style.link__full_screen}>
                    {pages.map((page: PagesType, index: number) => {
                        return <Link href={page.href} key={"link-" + index}>{page.name}</Link>
                    })}
                </div>
            </div>
        </nav>
    )
}