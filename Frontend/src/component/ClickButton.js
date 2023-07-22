import * as React from 'react';
import Button from '@mui/material/Button';

const ClickButton = ({name,id,buttonText,style,onClick}) => {
  return (
    <Button variant="contained" style={style} onClick={onClick} disableElevation id={id} name={name} buttonText ={buttonText }>
       {buttonText}
    </Button>
  );
}

export default ClickButton;