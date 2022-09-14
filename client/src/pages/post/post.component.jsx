import React,{useState,useEffect} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { useSnackbar } from "notistack";


import {PostServiceClient} from '../../protos/post_grpc_web_pb'
import {CreatePostRequest,CreatePostResponse,PostSchema,ViewAllPostRequest,ViewAllPostResponse} from '../../protos/post_pb'

const client = new PostServiceClient(
    "http://localhost:9090",
    null,
    null
  );


const PostComponent = () => {

    const [pdata,setPdata] = useState()
    const [postArr,setPostArr] = useState()
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (e)=>{
        setPdata({...pdata,[e.target.name]:e.target.value})
        console.log(pdata)
    }

    const createNewPost = ()=>{
        const postData = new PostSchema();
        postData.setContent(pdata.content)
        postData.setImagelink(pdata.imageLink)
        postData.setLikes(1);
        postData.setUserid("632174fd5e41272ea6140722")
        // console.log(postData)
        const sendPostData = new CreatePostRequest();
        sendPostData.setPost(postData);
        
        // console.log(client)
        client.createPost(sendPostData,{},(err,response)=>{
            if(err) console.log(err)
            else {console.log(response.toObject())
            enqueueSnackbar(response.toObject().msg, { variant: "success" });
            }
        })

    }

    const getAllPosts = ()=>{
      const viewData = new ViewAllPostRequest()
      client.viewAllPosts(viewData,null,(err,res)=>{
        setPostArr(res.toObject().postarrayList)
    })
    }

    useEffect(() => {
      getAllPosts()
    }, [])
    

  return (
    <>
      <Typography sx={{mt: 5, }} variant="h4" align="center" fontWeight={"bold"} gutterBottom>
        Welcome To Post Section
      </Typography>

      <Box sx={{width: 200,p: 1,m: 1, }} >
      <TextField sx={{width: 500,m: 1, }} onChange={(e)=>handleChange(e)} name="content" id="outlined-basic"  label="Enter Content" variant="outlined" />
      <TextField sx={{width: 500,m: 1, }} onChange={(e)=>handleChange(e)} name="imageLink" id="outlined-basic" label="Enter Image Link" variant="outlined" />
      <Button sx={{width: 200,p: 1,m: 1, }} onClick={()=>createNewPost()} variant="contained">Create A Post</Button>
      </Box>

      <Box sx={{m: 5, }} >
        {
          postArr?.map((post)=>{
            return(
              <>
              <Box sx={{m: 2, }}>
                {post.content}
              </Box>
              </>
            )
          })
        }
      </Box>

    </>
  );
};

export default PostComponent;
