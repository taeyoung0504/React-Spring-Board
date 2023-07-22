import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextArea = ({ id, name, label, style, value,  onChange, onClick, rows,placeholder }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 5, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id={id}
          name={name}
          label={label}
          style={style}
          multiline
          onChange={onChange}
          value={value}
          onClick={onClick}
          rows={rows} 
          placeholder={placeholder}
        />
      </div>
    </Box>
  );
};

export default TextArea;
