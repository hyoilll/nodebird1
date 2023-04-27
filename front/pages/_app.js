import PropTypes from "prop-types";
//import "antd/dist/antd.css";
import Head from "next/head";
import wrapper from "../store/configureStore";

// Component : pagesの各ファイルのreturn componentが入る、全てのページで共通しているもの
// AppLayout : 特定のcomponentだけが共通しているもの

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
