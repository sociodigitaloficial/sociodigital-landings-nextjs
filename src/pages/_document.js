import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {

    const GTM_ID = 'GTM-P9N7JC9';

    return (
      <Html lang="es">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <noscript>
            <iframe
              title="google-tag-mannager"
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};

export default MyDocument;