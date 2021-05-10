import React from 'react';

import SideMenu from './SideMenu.component';

import PropTypes from 'prop-types';

export default {
  title: 'sidebar',
  component: SideMenu,
  argTypes: {
    highLightItem: {
      control: { type: 'select', options: [0, 1, 2] },
    },
  },
};
const SideMenuTemplate = ({ highLightItem }) => {
  return <SideMenu highLightItem={highLightItem} />;
};
export const SideBar = SideMenuTemplate.bind({});
SideBar.args = {
  highLightItem: 2,
};
SideMenuTemplate.propTypes = {
  highLightItem: PropTypes.number.isRequired,
};
