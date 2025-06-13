import React from 'react';
import './LoadingOverlay.scss';

function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
}

export default LoadingOverlay;
