import React from 'react';
import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

const MainContainer = ({children, title, keywords}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta keywords={keywords}></meta>
                <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.svg"/>
            </Head>

            <Header/>

            <main>{children}</main>

            <Footer/>
        </>
    );
};

export default MainContainer;