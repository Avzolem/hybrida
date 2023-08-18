import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="es-MX" className="h-full  bg-white">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="h-full">
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                    html,
                    body,
                    body > div:first-child,
                    div#__next,
                    div#__next > div {
                        height: 100%;
                    }
                `}</style>
            </Html>
        );
    }
}

export default MyDocument;
