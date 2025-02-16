import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"

export interface PagesType {
    name: string,
    href: string,
    icon?: React.ReactNode,
    onClick?: () => void
}

export default function NavLinks({ href, name, onClick }: PagesType) {
    const actual = usePathname()
    const active = actual === href
    return (
        <li>
            <div className={`${styles.nav_links_container} ${active ? styles.nav_link_active : ""}`}>
                <Link href={href} onClick={onClick}>{name}</Link>
            </div>
        </li>
    )
}