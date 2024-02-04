import React, { useState } from 'react';
import DynamicForm from './components/DynamicForm';
import Typography from '@mui/material/Typography';
import Preview from './components/Preview';

function App() {
  const [jsonData, setJsonData] = useState({});

  const handleFormChange = (data) => {
    setJsonData(data);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    <div>
      <Typography variant="h4" gutterBottom>
        Dynamic Form with JSON Preview
      </Typography>
      <DynamicForm onInputChange={handleFormChange} />
    </div>
    <Preview jsonData={jsonData} />
  </div>
  );
}

export default App;
