import Link from "next/link";
import styles from '../src/styles/navbar.module.css'

export default function Navbar () {

    return (
        <>
            <div  className={styles.bg}>
                <Link href="/"><h3>go to home </h3></Link>
                <Link href="/users"><h3>go to users</h3></Link>
                <Link href="/products"><h3>go to products </h3></Link>
            </div>
        </>
    )
}