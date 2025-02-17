"use client"
import style from "./navbar.module.css"
import { useState } from "react";
import Icon from "../icon/Icon";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import NavLinks from "./NavLinks";
import { PagesType } from "@/types";

import { VscHome } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { PiCodeBold } from "react-icons/pi";
import { PiReadCvLogoLight } from "react-icons/pi";

const pages: PagesType[] = [
    {
        name: "Home",
        href: "/",
        icon: <VscHome />
    },
    {
        name: "About",
        href: "/about",
        icon: <FaRegUser />
    }, {
        name: "Projects",
        href: "/projects",
        icon: <PiCodeBold />
    }, {
        name: "Resume",
        href: "/resume",
        icon: <PiReadCvLogoLight />
    }
]

export default function NavBar() {

    const [expand, updateExpanded] = useState<boolean>(false);

    return (
        <nav className={`${style.nav}`}>
            <div></div>
            <div className={style.container_links}>
                <div className={style.container__collapsed}>

                    <div className={`${style.lateral_nav} ${expand ? style.show_lateral_nav : ""}`}>
                        <div className={style.links_collapsed}>
                            <Icon>
                                <RxCross2 onClick={() => updateExpanded(false)} />
                            </Icon>
                            <ul>
                                {pages.map((page: PagesType, index: number) => {
                                    return <NavLinks href={page.href} name={page.name} icon={page.icon} onClick={() => updateExpanded(false)} key={"link-" + index} />
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.link__full_screen}>
                    <ul>
                        {pages.map((page: PagesType, index: number) => {
                            return <NavLinks href={page.href} name={page.name} icon={page.icon} onClick={() => updateExpanded(false)} key={"link-" + index} />
                        })}
                    </ul>
                </div>
            </div>
            <div>
                <div className={style.icon_toggle}>
                    <Icon>
                        <AiOutlineMenu onClick={() => updateExpanded(true)} />
                    </Icon>
                </div>
            </div>
        </nav>
    )
}