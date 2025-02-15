"use client"
import Link from "next/link"
import style from "./navbar.module.css"
import { useEffect, useState } from "react";
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
    const [expand, updateExpanded] = useState<boolean>(false);
    const [navColour, updateNavbar] = useState<boolean>(false);

    useEffect(() => {
        function scrollHandler() {
            if (window.scrollY >= 20) {
                updateNavbar(true);
            } else {
                updateNavbar(false);
            }
        }

        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    return (
        <nav className={`${style.nav} ${navColour ? style.nav_scrolled : ""}`}>
            <div></div>
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
                                return <Link href={page.href} onClick={() => updateExpanded(false)} key={"link-" + index}>{page.name}</Link>
                            })}
                        </div>
                    </div>
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