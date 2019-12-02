import React from 'react';
import {Layout} from 'antd'
import 'antd/dist/antd.css';

const {Footer: Index} = Layout;

export default () => {
  return (
      <Index style={{position: 'absolute', bottom: '0', width: '100%', marginLeft: '200px'}}>
        <div style={{textAlign:'center', marginRight:'200px'}}>Ant Design ©2018 Created by Ant UED</div>
      </Index>
  )
}
