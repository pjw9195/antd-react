import React, {Component} from 'react';
import {Layout} from "../components/common"
import {Layout as antdLayout} from"antd"
import LineDemo from "../components/chart/chart"
const {Content} = antdLayout
class MainContainer extends Component {
  render() {
    return (
      <Layout>
        <Content style={{ margin: '24px 16px 15px', overflow: 'initial' }} >
          <div style={{ padding: 24, background: '#fff', textAlign: 'center', marginLeft:'200px' }}>
            <LineDemo />
          </div>
        </Content>
      </Layout>
    )
  }
}
export default MainContainer