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

const proto = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.UserServiceClient =
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
proto.UserServicePromiseClient =
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
 *   !proto.UserIdRequest,
 *   !proto.UserResponse>}
 */
const methodDescriptor_UserService_getUserInfo = new grpc.web.MethodDescriptor(
  '/UserService/getUserInfo',
  grpc.web.MethodType.UNARY,
  proto.UserIdRequest,
  proto.UserResponse,
  /**
   * @param {!proto.UserIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserResponse.deserializeBinary
);


/**
 * @param {!proto.UserIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.getUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/getUserInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_getUserInfo,
      callback);
};


/**
 * @param {!proto.UserIdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UserResponse>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.getUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/getUserInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_getUserInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.UsersResponse>}
 */
const methodDescriptor_UserService_getUsers = new grpc.web.MethodDescriptor(
  '/UserService/getUsers',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.UsersResponse,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UsersResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.getUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/getUsers',
      request,
      metadata || {},
      methodDescriptor_UserService_getUsers,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UsersResponse>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.getUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/getUsers',
      request,
      metadata || {},
      methodDescriptor_UserService_getUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UserIdRequest,
 *   !proto.FriendRequestResponse>}
 */
const methodDescriptor_UserService_getUserFriendRequests = new grpc.web.MethodDescriptor(
  '/UserService/getUserFriendRequests',
  grpc.web.MethodType.UNARY,
  proto.UserIdRequest,
  proto.FriendRequestResponse,
  /**
   * @param {!proto.UserIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.FriendRequestResponse.deserializeBinary
);


/**
 * @param {!proto.UserIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.FriendRequestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.FriendRequestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.getUserFriendRequests =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/getUserFriendRequests',
      request,
      metadata || {},
      methodDescriptor_UserService_getUserFriendRequests,
      callback);
};


/**
 * @param {!proto.UserIdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.FriendRequestResponse>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.getUserFriendRequests =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/getUserFriendRequests',
      request,
      metadata || {},
      methodDescriptor_UserService_getUserFriendRequests);
};


module.exports = proto;

