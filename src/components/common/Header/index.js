import React from 'react';
import {Layout} from 'antd'
import 'antd/dist/antd.css';

const {Header: Index} = Layout;

export default () => {
  return (
      <>
        <Index style={{background: '#ffffff', padding: 0}}>
          <div style={{background: '#000000',color:"white",textAlign:"center",float: "left", width: "200px"}}>
            Our Health
          </div>
        </Index>
      </>
  )
}
