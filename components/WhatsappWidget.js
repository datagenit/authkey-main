// components/Dialog.js
import React from 'react';

const WhatsappWidget = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div>
        <div>{children}</div>
    </div>
  );
};

export default WhatsappWidget;