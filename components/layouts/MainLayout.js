import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Seo from "@/components/common/Seo";
import { Toaster } from "react-hot-toast";

const Layout = ({ title, description, children, ...rest }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Seo subtitle={title} description={description} />
            <div className="mb-auto flex w-full flex-col" {...rest}>
                <Header />
                <Toaster position="bottom-center" reverseOrder={false} />
                <div className="my-0">{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
