import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {PostServiceClient} from '../../protos/post_grpc_web_pb'
import {DeletePostRequest,PostSchema,AddLikeRequest} from '../../protos/post_pb'

const client = new PostServiceClient(
    "http://localhost:9090",
    null,
    null
  );


const PostCard = ({post,setPostAdded,postAdded,userID}) => {
    console.log(post)


    const deletePostHandler = (id)=>{
      const delData = new DeletePostRequest()
      console.log(id)
      delData.setPostid(id);
      client.deletePost(delData,{},(err,res)=>{
        console.log(res,err)
        setPostAdded(!postAdded)
      })
    }

    const incrementLikes = (id)=>{
        console.log(id)
        const data = new AddLikeRequest();
        data.setPostid(id)

        client.addLike(data,{},(err,res)=>{
            console.log(res)
        })

        setPostAdded(!postAdded)
    }

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
        <Button variant="contained"  size="small" onClick={()=>incrementLikes(post.postid)} color="success" >Like ({post.likes})</Button>
        <Button variant="contained"  size="small" color="info" >Comment</Button>
        {
          post?.userid==userID?<><Button  variant="contained" size="small" onClick={()=>deletePostHandler(post.postid)} color="error" >Delete</Button>
          <Button variant="contained"  size="small" color="secondary" >Edit</Button>
  </>:<></>
        }
        
      </CardActions>
    </Card>
    </>
  )
}

export default PostCard