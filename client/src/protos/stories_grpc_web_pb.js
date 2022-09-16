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

const proto = require('./stories_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.StoryServiceClient =
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
proto.StoryServicePromiseClient =
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
 *   !proto.AddStoryRequest,
 *   !proto.AddStoryResponse>}
 */
const methodDescriptor_StoryService_addStory = new grpc.web.MethodDescriptor(
  '/StoryService/addStory',
  grpc.web.MethodType.UNARY,
  proto.AddStoryRequest,
  proto.AddStoryResponse,
  /**
   * @param {!proto.AddStoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddStoryResponse.deserializeBinary
);


/**
 * @param {!proto.AddStoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.AddStoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddStoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoryServiceClient.prototype.addStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoryService/addStory',
      request,
      metadata || {},
      methodDescriptor_StoryService_addStory,
      callback);
};


/**
 * @param {!proto.AddStoryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddStoryResponse>}
 *     Promise that resolves to the response
 */
proto.StoryServicePromiseClient.prototype.addStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StoryService/addStory',
      request,
      metadata || {},
      methodDescriptor_StoryService_addStory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.getStoriesRequest,
 *   !proto.ViewAllStories>}
 */
const methodDescriptor_StoryService_getStories = new grpc.web.MethodDescriptor(
  '/StoryService/getStories',
  grpc.web.MethodType.UNARY,
  proto.getStoriesRequest,
  proto.ViewAllStories,
  /**
   * @param {!proto.getStoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ViewAllStories.deserializeBinary
);


/**
 * @param {!proto.getStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ViewAllStories)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ViewAllStories>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoryServiceClient.prototype.getStories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoryService/getStories',
      request,
      metadata || {},
      methodDescriptor_StoryService_getStories,
      callback);
};


/**
 * @param {!proto.getStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ViewAllStories>}
 *     Promise that resolves to the response
 */
proto.StoryServicePromiseClient.prototype.getStories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StoryService/getStories',
      request,
      metadata || {},
      methodDescriptor_StoryService_getStories);
};


module.exports = proto;

