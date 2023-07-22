import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputText = ({ id, name,label,value ,onChange, onClick,type, height,placeholder }) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginBottom: "30px",
        '& .MuiInputBase-input': {
          height: height || 'auto'
        },
      }}
    >
      <TextField fullWidth label={label}  onClick={onClick}  onChange={onChange} value={value} type={type} placeholder={placeholder} id={id} name={name} />
    </Box>
  );
}

export default InputText;