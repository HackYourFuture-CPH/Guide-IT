import React from 'react';

import SideMenu from './sideMenu';

import PropTypes from 'prop-types';

export default {
  title: 'sidebar',
  component: SideMenu,
  argTypes: {
    highLigtItem: {
      control: { type: 'select', options: [0, 1, 2] },
    },
  },
};
const SideMenuTemplate = ({ highLigtItem }) => {
  return <SideMenu highLigtItem={highLigtItem} />;
};
export const SideBar = SideMenuTemplate.bind({});
SideBar.args = {
  highLigtItem: 2,
};
SideMenuTemplate.propTypes = {
  highLigtItem: PropTypes.number.isRequired,
};
