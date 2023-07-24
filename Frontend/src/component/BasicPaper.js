import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const  BasicPaper =({title,borderTop,height,width,content,buttonText,Marginleft})=> {
  return (
    <Card sx={{ width: width , marginLeft:Marginleft,borderTop:borderTop }}>
      <CardMedia
        sx={{ height: height  }}
        title={title} 
      />
     <CardContent>
        <Typography gutterBottom variant="h5" >
          {title} {/* Use the 'title' prop here */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content} {/* Use the 'content' prop here */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{buttonText}</Button> {/* Use the 'buttonText' prop here */}
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}
export default BasicPaper;