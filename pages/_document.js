import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const { renderPage } = ctx;
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...initialProps, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.png"
          />
          <link rel="stylesheet" href="/static/css/global.css" />
          <link rel="stylesheet" href="/static/css/carousel.css" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div vw="" className="enabled">
            <div vw-access-button="" className="active"></div>
            <div vw-plugin-wrapper="">
              <div className="vw-plugin-top-wrapper"></div>
            </div>
          </div>
        </body>
        <Head />
      </Html>
    );
  }
}

export default MyDocument;