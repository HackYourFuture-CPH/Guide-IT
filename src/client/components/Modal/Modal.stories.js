import React, { useState } from 'react';
import Modal from './Modal.js';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    fontFamily: {
      control: {
        type: 'radio',
        options: ['Roboto', 'Roboto Mono'],
      },
    },
  },
};

const Template = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <div
        id="hover-to-show-modal" // this id should be pass as parameter to Modal.
        style={{
          fontSize: '18px',
          width: '200px',
          border: 'solid 1px ',
        }}
        onMouseEnter={openModal}
      >
        Hvoer over here to View Modal
      </div>
      <Modal
        id="hover-to-show-modal"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        {...args}
      >
        <div>
          lore congue pharetra nibh. Nulla eu lobortis ante. Vivamus tortor
          sapien, dictum sit amet lacus sit amet, libero ante malesuada ante.
          Maecenas fermentum ex nec just
        </div>
      </Modal>
    </>
  );
};
export const ModalView = Template.bind({});
ModalView.args = {
  backgroundColor: '#FBFF4A',
  width: 17,
  fontFamily: 'Roboto',
};
