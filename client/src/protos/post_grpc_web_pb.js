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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ViewAllPostRequest,
 *   !proto.ViewAllPostResponse>}
 */
const methodDescriptor_PostService_viewAllPosts = new grpc.web.MethodDescriptor(
  '/PostService/viewAllPosts',
  grpc.web.MethodType.UNARY,
  proto.ViewAllPostRequest,
  proto.ViewAllPostResponse,
  /**
   * @param {!proto.ViewAllPostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ViewAllPostResponse.deserializeBinary
);


/**
 * @param {!proto.ViewAllPostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ViewAllPostResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ViewAllPostResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PostServiceClient.prototype.viewAllPosts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PostService/viewAllPosts',
      request,
      metadata || {},
      methodDescriptor_PostService_viewAllPosts,
      callback);
};


/**
 * @param {!proto.ViewAllPostRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ViewAllPostResponse>}
 *     Promise that resolves to the response
 */
proto.PostServicePromiseClient.prototype.viewAllPosts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PostService/viewAllPosts',
      request,
      metadata || {},
      methodDescriptor_PostService_viewAllPosts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeletePostRequest,
 *   !proto.DeletePostResponse>}
 */
const methodDescriptor_PostService_deletePost = new grpc.web.MethodDescriptor(
  '/PostService/deletePost',
  grpc.web.MethodType.UNARY,
  proto.DeletePostRequest,
  proto.DeletePostResponse,
  /**
   * @param {!proto.DeletePostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeletePostResponse.deserializeBinary
);


/**
 * @param {!proto.DeletePostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.DeletePostResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeletePostResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PostServiceClient.prototype.deletePost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PostService/deletePost',
      request,
      metadata || {},
      methodDescriptor_PostService_deletePost,
      callback);
};


/**
 * @param {!proto.DeletePostRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeletePostResponse>}
 *     Promise that resolves to the response
 */
proto.PostServicePromiseClient.prototype.deletePost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PostService/deletePost',
      request,
      metadata || {},
      methodDescriptor_PostService_deletePost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.addCommentRequest,
 *   !proto.addCommentResponse>}
 */
const methodDescriptor_PostService_addComment = new grpc.web.MethodDescriptor(
  '/PostService/addComment',
  grpc.web.MethodType.UNARY,
  proto.addCommentRequest,
  proto.addCommentResponse,
  /**
   * @param {!proto.addCommentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.addCommentResponse.deserializeBinary
);


/**
 * @param {!proto.addCommentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.addCommentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.addCommentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PostServiceClient.prototype.addComment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PostService/addComment',
      request,
      metadata || {},
      methodDescriptor_PostService_addComment,
      callback);
};


/**
 * @param {!proto.addCommentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.addCommentResponse>}
 *     Promise that resolves to the response
 */
proto.PostServicePromiseClient.prototype.addComment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PostService/addComment',
      request,
      metadata || {},
      methodDescriptor_PostService_addComment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddLikeRequest,
 *   !proto.AddLikeResponse>}
 */
const methodDescriptor_PostService_addLike = new grpc.web.MethodDescriptor(
  '/PostService/addLike',
  grpc.web.MethodType.UNARY,
  proto.AddLikeRequest,
  proto.AddLikeResponse,
  /**
   * @param {!proto.AddLikeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddLikeResponse.deserializeBinary
);


/**
 * @param {!proto.AddLikeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.AddLikeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddLikeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PostServiceClient.prototype.addLike =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PostService/addLike',
      request,
      metadata || {},
      methodDescriptor_PostService_addLike,
      callback);
};


/**
 * @param {!proto.AddLikeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddLikeResponse>}
 *     Promise that resolves to the response
 */
proto.PostServicePromiseClient.prototype.addLike =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PostService/addLike',
      request,
      metadata || {},
      methodDescriptor_PostService_addLike);
};


module.exports = proto;

