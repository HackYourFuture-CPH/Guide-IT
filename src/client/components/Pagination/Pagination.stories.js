import React from 'react';
import Pagination from './Pagination.component';
import PropTypes from 'prop-types';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    floor: {
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5],
      },
    },
  },
};

const Template = ({ floor }) => <Pagination floor={floor} />;

Template.propTypes = {
  floor: PropTypes.number,
};
Template.defaultProps = { floor: 0 };
export const Pagination1 = Template.bind({});
Pagination1.args = {
  floor: 0,
};
