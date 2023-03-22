import { Layout } from 'antd';

// import 'antd/dist/antd.less';

import ContentAnota from 'components/Content';
import FooterAnota from 'components/Footer';
import HeaderAnota from 'components/Header';
import AddModal from 'components/Modal';

import './style.scss';

const App = () => (
  <Layout className="anota">
    <HeaderAnota />
    <ContentAnota />
    <FooterAnota />
    <AddModal />
  </Layout>
);

export default App;
