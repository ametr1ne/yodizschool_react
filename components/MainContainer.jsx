import React from 'react';
import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

const MainContainer = ({children, title, keywords}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta keywords={keywords}></meta>
                <link rel="shortcut icon" type="image/x-icon" href="../assets/img/favicon.svg"/>
            </Head>

            <Header/>

            <div>{children}</div>

            <Footer/>
        </div>
    );
};

export default MainContainer;