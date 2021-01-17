import React from 'react';
import HeaderWithDrawer from '../components/organism/HeaderWithDrawer';

const screen = (title, Component) => {
  return (
    <>
      <HeaderWithDrawer title={title} />
      {Component}
    </>
  );
};

export default screen;
