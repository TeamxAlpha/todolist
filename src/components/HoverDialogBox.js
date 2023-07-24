import React from 'react';
import './HoverDialogBox.css';
const HoverDialog = () => {
  return (
    <div className="hover-container">
      <p className="hover-paragraph">
        Note:
      </p>
      <div className="dialog-box">
        <p>The ▢ indicates that if you completed your tasks or not.</p>
        <p>The 📝 indicates that if you want to Edit your tasks.</p>
        <p>The 🗑️ indicates that if you want to delete any tasks.</p>
      </div>
    </div>
  );
};

export default HoverDialog;
