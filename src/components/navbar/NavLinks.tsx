import Link from "next/link";
import { PagesType } from "./NavBar";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"

export default function NavLinks({ href, name, onClick }: PagesType) {
    const actual = usePathname()
    const active = actual === href
    return (
        <li className={`${styles.nav_links} ${active ? styles.nav_link_active : ""}`}>
            <Link href={href} onClick={() => onClick}>{name}</Link>
        </li>
    )
}