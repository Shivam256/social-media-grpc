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

const proto = require('./post_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.PostServiceClient =
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
proto.PostServicePromiseClient =
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
 *   !proto.CreatePostRequest,
 *   !proto.CreatePostResponse>}
 */
const methodDescriptor_PostService_createPost = new grpc.web.MethodDescriptor(
  '/PostService/createPost',
  grpc.web.MethodType.UNARY,
  proto.CreatePostRequest,
  proto.CreatePostResponse,
  /**
   * @param {!proto.CreatePostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreatePostResponse.deserializeBinary
);


/**
 * @param {!proto.CreatePostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CreatePostResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreatePostResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PostServiceClient.prototype.createPost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PostService/createPost',
      request,
      metadata || {},
      methodDescriptor_PostService_createPost,
      callback);
};


/**
 * @param {!proto.CreatePostRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreatePostResponse>}
 *     Promise that resolves to the response
 */
proto.PostServicePromiseClient.prototype.createPost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PostService/createPost',
      request,
      metadata || {},
      methodDescriptor_PostService_createPost);
};


module.exports = proto;

