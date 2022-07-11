import { Layout } from "antd";

import "antd/dist/antd.less";

import AddModal from "./components/Modal";
import HeaderAnota from "./components/Header";
import ContentAnota from "./components/Content";
import FooterAnota from "./components/Footer";

import "./style.scss";

const App = () => (
  <Layout className="anota">
    <HeaderAnota />
    <ContentAnota />
    <FooterAnota />
    <AddModal />
  </Layout>
);

export default App;
