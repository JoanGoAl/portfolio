import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"
import { PagesType } from "@/types";

export default function NavLinks({ href, name, onClick, icon }: PagesType) {
    const actual = usePathname()
    const active = actual === href
    return (
        <li>
            <div className={`${styles.nav_links_container} ${active ? styles.nav_link_active : ""}`}>
                <Link href={href} onClick={onClick}>{icon}{name}</Link>
            </div>
        </li>
    )
}