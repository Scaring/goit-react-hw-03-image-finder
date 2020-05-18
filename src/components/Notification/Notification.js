import React from 'react';
import propTypes from 'prop-types';
import 'react-notifications/lib/notifications.css';

function Notification({ message }) {
  return (
    <div className="notification-container">
      <h1 className="notification  notification-error ">{message}</h1>
    </div>
  );
}

Notification.propTypes = {
  message: propTypes.string,
};

export default Notification;
