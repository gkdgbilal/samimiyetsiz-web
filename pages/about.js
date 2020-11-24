import Link from "next/link";
import Header from "../src/components/header";
import React from "react";
import Layout from "../src/components/layout";
import Head from "next/head";

export default function About() {
    return <Layout>
        <Head>
            <title>About</title>
        </Head>
        <h1>About1</h1>
        <Link  href="/"><a>Back to the home</a></Link>
    </Layout>
}