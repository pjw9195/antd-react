import React, {Component} from 'react';
import {Layout} from "../components/common"
import {Layout as antdLayout} from"antd"

const {Content} = antdLayout
class BoardContainer extends Component {
  render() {
    return (
        <Layout>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              board
            </div>
          </Content>
        </Layout>
    )
  }
}
export default BoardContainer