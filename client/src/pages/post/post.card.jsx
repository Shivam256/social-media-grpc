import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const PostCard = ({post}) => {
    console.log(post)
  return (
    <>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={post.imagelink}
        alt="Image Not Found"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained"  size="small" color="success" >Like ({post.likes})</Button>
        <Button variant="contained"  size="small" color="info" >Comment</Button>
        <Button  variant="contained" size="small" color="error" >Delete</Button>
        <Button variant="contained"  size="small" color="secondary" >Edit</Button>

      </CardActions>
    </Card>
    </>
  )
}

export default PostCard