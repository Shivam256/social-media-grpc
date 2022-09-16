import React, { useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import useUtils from './useUtils';

import { FriendServiceClient } from '../protos/friend_grpc_web_pb';
import { AddFriendrequest, RequestId } from '../protos/friend_pb';

const friendClient = new FriendServiceClient(
  'http://localhost:9090',
  null,
  null
);

const useFriend = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { handleError, tokenise } = useUtils();

  const sendFriendRequest = useCallback((id) => {
    const frq = new AddFriendrequest();
    frq.setUserid(user.id).setTofriendid(id).setNote('');

    friendClient.addFriend(frq, null, (err, response) => {
      console.log(response, 'add friend error');
      if (handleError(response)) {
        enqueueSnackbar('Friend request sent successfully!', {
          variant: 'success',
        });
      }
    });
  }, []);

  const checkFriendship = useCallback((id) => {
    console.log(id);
    const fd = user.friends.find((a) => a.id === id);
    console.log(fd);
    if (fd != null) {
      return true;
    }
    return false;
  }, []);

  const checkIfRequested = useCallback((id) => {});

  const getFriendRequests = useCallback(() => {}, []);

  const approveFriendRequest = useCallback((id, userid) => {
    const arq = new RequestId();
    arq.setRequestid(id).setUserid(userid);

    friendClient.approveFriendRequest(tokenise(arq), null, (err, response) => {
      console.log(response, 'here is the response');
      if (handleError(response)) {
        //do something
        enqueueSnackbar('Friend request accepted successfully!', {
          variant: 'success',
        });
      }
    });
  }, []);

  const rejectFriendRequest = useCallback((id) => {
    const rrq = new RequestId();
    rrq.setRequestid(id);

    friendClient.rejectFriendRequest(tokenise(rrq), null, (err, response) => {
      console.log(response);
      if (handleError(response)) {
        enqueueSnackbar('Friend request rejected!', { variant: 'success' });
      }
    });
  }, []);

  return {
    sendFriendRequest,
    getFriendRequests,
    approveFriendRequest,
    rejectFriendRequest,
    checkFriendship,
  };
};

export default useFriend;
