import React from 'react';
import 'antd/dist/antd.css';
import {Header, Footer,Sidebar} from "../index"

export default ({children}) => {
  return (
      <>
        <Header/>
        <Sidebar/>
        {children}
        <Footer/>
      </>
  )
}
