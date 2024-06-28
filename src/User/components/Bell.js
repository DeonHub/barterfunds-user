import React from 'react';

const Bell = ({ notificationCount }) => {
  return (
    <span className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
      <div className="status"style={{
          position: "relative",
          display: "inline-block"
        }}>
        <em className="icon la la-bell"></em>
        {notificationCount > 0 && <span className="badge" style={{
            position: "absolute",
            top: "-5px",
            right: "-10px",
            backgroundColor: "#810020",
            color: "#fff",
            borderRadius: "50%",
            fontSize: "8px",
            fontWeight: "bold",
            }}>{notificationCount}</span>}
      </div>
    </span>
  );
};

export default Bell;
