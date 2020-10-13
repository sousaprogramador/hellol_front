/* _app.js */
import React from "react";
import App from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import withReduxStore from "../lib/with-redux-store";


class MyApp extends App {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
        </Head>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp);
