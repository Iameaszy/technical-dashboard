import React from 'react';
import { Notification1Style, Notification2Style } from './notification.style';

export const Notification1 = (props) => {
  const { children, onClose } = props;
  return (
    <Notification1Style {...props}>
      <div className="notification-content">
        {children}
      </div>
      <div onClose={onClose} className="close-notification">X</div>
    </Notification1Style>
  );
};


export const Notification2 = (props) => {
  const { children } = props;
  return (
    <Notification2Style {...props}>
      <div className="notification-content">
        {children}
      </div>
    </Notification2Style>
  );
};
