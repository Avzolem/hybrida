import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Seo from "@/components/common/Seo";
import { Toaster } from "react-hot-toast";

const Layout = ({
    title,
    description,
    children,
    childrenClassName,
    ...rest
}) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Hybrida</title>
                <meta
                    name="description"
                    content="Hybrida es una plataforma de arte digital que busca crear un espacio de colaboración entre artistas y coleccionistas."
                />
            </Head>
            <Seo subtitle={title} description={description} />
            <div className="flex min-h-screen w-full flex-col" {...rest}>
                <Header />
                <Toaster position="bottom-center" reverseOrder={false} />
                <div className={`my-0 ${childrenClassName}`}>{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
