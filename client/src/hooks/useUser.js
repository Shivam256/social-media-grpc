import React, { useCallback, useState } from 'react';

import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useUtils from './useUtils';
import useAuth from './useAuth';
import useFriend from './useFriend';

import { getUsersSuccess } from '../redux/slices/user';

//grpc
import { PostServiceClient } from '../protos/post_grpc_web_pb';
import { UserServiceClient } from '../protos/user_grpc_web_pb';
import { UserIdRequest, Empty } from '../protos/user_pb';
import {GetPostByMeRequest} from '../protos/post_pb'
const postClient = new PostServiceClient('http://localhost:9090', null, null);

const userClient = new UserServiceClient('http://localhost:9090', null, null);

const useUser = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { users, pulled } = useSelector((state) => state.user);

  const [currentUserData, setCurrentUserData] = useState(null);
  const [friendRequests, setFriendRequests] = useState([]);
  const [myPosts,setMyPosts] = useState([])

  const { user: auser } = useAuth();
  const { checkFriendship } = useFriend();
  const { handleError } = useUtils();

  const getUserData = useCallback((id) => {
    const urq = new UserIdRequest();
    urq.setUserid(id);

    userClient.getUserInfo(urq, null, (err, response) => {
      console.log(response, 'user id response');
      if (handleError(response)) {
        const user = response.getUser();
        console.log(user, 'this is user response');
        console.log(user.getFriendsList(), 'this is friends');
        const nuser = {
          id: user.getId(),
          email: user.getEmail(),
          username: user.getUsername(),
          friends: user.getFriendsList(),
          isAuthenticated: user.getId() === auser.id,
          isFriend: checkFriendship(user.getId()),
        };
        setCurrentUserData(nuser);
      }
    });
  }, []);

  const fetchUsers = useCallback(() => {
    const rq = new Empty();
    if (pulled) return;
    userClient.getUsers(rq, null, (err, response) => {
      console.log(response);
      if (handleError(response)) {
        const rusers = response.getUsersList();
        const nusers = rusers.map((u) => ({
          username: u.getUsername(),
          id: u.getId(),
        }));
        console.log(nusers);
        dispatch(getUsersSuccess(nusers));
      }
    });
  }, []);

  const getFriendRequests = useCallback(() => {
    if (friendRequests.length > 0) return;

    const frq = new UserIdRequest();
    frq.setUserid(auser.id);

    userClient.getUserFriendRequests(frq, null, (error, response) => {
      console.log(response, 'friend req response');
      if (handleError(response)) {
        let reqs = response.getRequestsList();
        reqs = reqs.map((req) => ({
          user: req.getUser().getUsername(),
          userId: req.getUser().getId(),
          note: req.getNote(),
          id: req.getId(),
        }));
        setFriendRequests(reqs);

        console.log(reqs, 'hehehehe');
      }
    });
  }, []);


  const getMyPosts = useCallback((id) => {
    
      const  data = new GetPostByMeRequest();
      data.setUserid(id);
      postClient.getPostByMe(data,null,(err,res)=>{
          setMyPosts(res.toObject().postarrayList)
      })
  }, []);

  return {
    getUserData,
    fetchUsers,
    currentUserData,
    users,
    getFriendRequests,
    friendRequests,
    setFriendRequests,
    getMyPosts,
    myPosts
  };
};

export default useUser;
