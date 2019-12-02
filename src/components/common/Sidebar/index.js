import React from 'react';
import {Icon, Layout, Menu} from 'antd'
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';

const {Sider} = Layout;

export default () => {
  return (
      <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'absolute',
            left: 0,
          }}
      >
        <div className="logo"/>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user"/>
              <span className="nav-text">Dashboard</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/board">
              <Icon type="video-camera"/>
              <span className="nav-text">Board</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/ranking">
              <Icon type="bar-chart"/>
              <span className="nav-text">Ranking</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/profile">
              <Icon type="upload"/>
              <span className="nav-text">Profile</span>
            </Link>
          </Menu.Item>

        </Menu>
      </Sider>
  )
}



