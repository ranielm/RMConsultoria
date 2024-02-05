// src/components/AlarmButton.tsx

import React from 'react';

const AlarmButton: React.FC = () => {
  const createAlarm = () => {
    alert("You're gay")
  };

  return (
    <button onClick={createAlarm}>
      Gay Test
    </button>
  );
};

export default AlarmButton;
