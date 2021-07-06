import { Layout } from "antd";

import "antd/dist/antd.css";

import AddModal from "./components/Modal";
import HeaderAnota from "./components/Header";
import ContentAnota from "./components/Content";
import FooterAnota from "./components/Footer";

import "./style.scss";

const App = () => {
  return (
    <Layout className="anota">
      <HeaderAnota />
      <ContentAnota />
      <FooterAnota />
      <AddModal />
    </Layout>
  );
};

export default App;
