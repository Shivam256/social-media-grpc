/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./friend_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.FriendServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.FriendServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddFriendrequest,
 *   !proto.FriendResponse>}
 */
const methodDescriptor_FriendService_addFriend = new grpc.web.MethodDescriptor(
  '/FriendService/addFriend',
  grpc.web.MethodType.UNARY,
  proto.AddFriendrequest,
  proto.FriendResponse,
  /**
   * @param {!proto.AddFriendrequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.FriendResponse.deserializeBinary
);


/**
 * @param {!proto.AddFriendrequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.FriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.FriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FriendServiceClient.prototype.addFriend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FriendService/addFriend',
      request,
      metadata || {},
      methodDescriptor_FriendService_addFriend,
      callback);
};


/**
 * @param {!proto.AddFriendrequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.FriendResponse>}
 *     Promise that resolves to the response
 */
proto.FriendServicePromiseClient.prototype.addFriend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FriendService/addFriend',
      request,
      metadata || {},
      methodDescriptor_FriendService_addFriend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RequestId,
 *   !proto.FriendResponse>}
 */
const methodDescriptor_FriendService_rejectFriendRequest = new grpc.web.MethodDescriptor(
  '/FriendService/rejectFriendRequest',
  grpc.web.MethodType.UNARY,
  proto.RequestId,
  proto.FriendResponse,
  /**
   * @param {!proto.RequestId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.FriendResponse.deserializeBinary
);


/**
 * @param {!proto.RequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.FriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.FriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FriendServiceClient.prototype.rejectFriendRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FriendService/rejectFriendRequest',
      request,
      metadata || {},
      methodDescriptor_FriendService_rejectFriendRequest,
      callback);
};


/**
 * @param {!proto.RequestId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.FriendResponse>}
 *     Promise that resolves to the response
 */
proto.FriendServicePromiseClient.prototype.rejectFriendRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FriendService/rejectFriendRequest',
      request,
      metadata || {},
      methodDescriptor_FriendService_rejectFriendRequest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RequestId,
 *   !proto.FriendResponse>}
 */
const methodDescriptor_FriendService_approveFriendRequest = new grpc.web.MethodDescriptor(
  '/FriendService/approveFriendRequest',
  grpc.web.MethodType.UNARY,
  proto.RequestId,
  proto.FriendResponse,
  /**
   * @param {!proto.RequestId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.FriendResponse.deserializeBinary
);


/**
 * @param {!proto.RequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.FriendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.FriendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FriendServiceClient.prototype.approveFriendRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FriendService/approveFriendRequest',
      request,
      metadata || {},
      methodDescriptor_FriendService_approveFriendRequest,
      callback);
};


/**
 * @param {!proto.RequestId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.FriendResponse>}
 *     Promise that resolves to the response
 */
proto.FriendServicePromiseClient.prototype.approveFriendRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FriendService/approveFriendRequest',
      request,
      metadata || {},
      methodDescriptor_FriendService_approveFriendRequest);
};


module.exports = proto;

