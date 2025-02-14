import style from "./icon.module.css"

export default function Icon({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={style.icon}>
            {children}
        </div>
    )
}