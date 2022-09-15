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

const proto = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.AuthServiceClient =
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
proto.AuthServicePromiseClient =
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
 *   !proto.SignUpRequest,
 *   !proto.SignUpResponse>}
 */
const methodDescriptor_AuthService_signup = new grpc.web.MethodDescriptor(
  '/AuthService/signup',
  grpc.web.MethodType.UNARY,
  proto.SignUpRequest,
  proto.SignUpResponse,
  /**
   * @param {!proto.SignUpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SignUpResponse.deserializeBinary
);


/**
 * @param {!proto.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SignUpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SignUpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthServiceClient.prototype.signup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AuthService/signup',
      request,
      metadata || {},
      methodDescriptor_AuthService_signup,
      callback);
};


/**
 * @param {!proto.SignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SignUpResponse>}
 *     Promise that resolves to the response
 */
proto.AuthServicePromiseClient.prototype.signup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AuthService/signup',
      request,
      metadata || {},
      methodDescriptor_AuthService_signup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LoginRequest,
 *   !proto.LoginResponse>}
 */
const methodDescriptor_AuthService_login = new grpc.web.MethodDescriptor(
  '/AuthService/login',
  grpc.web.MethodType.UNARY,
  proto.LoginRequest,
  proto.LoginResponse,
  /**
   * @param {!proto.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AuthService/login',
      request,
      metadata || {},
      methodDescriptor_AuthService_login,
      callback);
};


/**
 * @param {!proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AuthService/login',
      request,
      metadata || {},
      methodDescriptor_AuthService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.InitializeRequest,
 *   !proto.InitializeResponse>}
 */
const methodDescriptor_AuthService_initialize = new grpc.web.MethodDescriptor(
  '/AuthService/initialize',
  grpc.web.MethodType.UNARY,
  proto.InitializeRequest,
  proto.InitializeResponse,
  /**
   * @param {!proto.InitializeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.InitializeResponse.deserializeBinary
);


/**
 * @param {!proto.InitializeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.InitializeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.InitializeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthServiceClient.prototype.initialize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AuthService/initialize',
      request,
      metadata || {},
      methodDescriptor_AuthService_initialize,
      callback);
};


/**
 * @param {!proto.InitializeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.InitializeResponse>}
 *     Promise that resolves to the response
 */
proto.AuthServicePromiseClient.prototype.initialize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AuthService/initialize',
      request,
      metadata || {},
      methodDescriptor_AuthService_initialize);
};


module.exports = proto;

