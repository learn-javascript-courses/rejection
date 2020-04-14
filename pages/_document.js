import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel='preload'
                        href='/fonts/VT323-Regular.ttf'
                        as='font'
                        crossOrigin=''
                    />

                    <link
                        rel='preload'
                        href='/fonts/Roboto-Medium.ttf'
                        as='font'
                        crossOrigin=''
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
                    <style jsx>{`
                        body {
                            height: 100%;
                            margin: 0;
                        }
                    `}
                    </style>
            </Html>
        )
    }
}

export default MyDocument