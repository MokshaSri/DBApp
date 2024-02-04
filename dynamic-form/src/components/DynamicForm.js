import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const DynamicForm = ({ onInputChange }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldName, value) => {
    const updatedFormData = { ...formData, [fieldName]: value };
    setFormData(updatedFormData);
    onInputChange(updatedFormData);
  };

  return (
    <div>
      <TextField
        label="Field 1"
        onChange={(e) => handleInputChange('field1', e.target.value)}
      />
      {/* Add more TextField components for additional fields */}
    </div>
  );
};

export default DynamicForm;
