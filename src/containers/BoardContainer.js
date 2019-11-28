import React, {Component} from 'react';
import {Layout} from "../components/common"
import {Layout as antdLayout} from"antd"
import Board from "../components/board/board"

const {Content} = antdLayout
class BoardContainer extends Component {
  render() {
    return (
        <Layout>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
            <div style={{ padding: 24, background: '#fff', textAlign: 'center', marginLeft: '200px' }}>
              <Board></Board>
            </div>
          </Content>
        </Layout>
    )
  }
}
export default BoardContainer