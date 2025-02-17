import Image from "next/image";
import Link from "next/link";
import notFoundImage from "@/assets/not-found.webp"

export default function NotFound() {
    return (
        <div>
            WHat are you doing here?
            <Image alt="Don't pass" src={notFoundImage} width={300} height={300} />
            <Link href={"/"} >
                <button>Go to home page </button>
            </Link>
        </div>
    )
}