import React from 'react';

const Controls = ({ onRestart, onBackToMenu }) => {
  return (
    <div className="action-group">
      <button className="reset-timeline-btn" onClick={onRestart}>
        REBOOT_NODE
      </button>
      <button className="back-menu-btn" onClick={onBackToMenu}>
        CHANGE_DATA_STREAM
      </button>
    </div>
  );
};

export default Controls;