import Head from "next/head";

export  default function Error404(params) {
    return (
        <>
        <Head>
            <title>page not foud 404</title>
            <meta name="404 description" content="404 page content"/>
        </Head>
        <div>
            <h1>ERROR 404 page not found</h1>
        </div>
        </>
    )
}