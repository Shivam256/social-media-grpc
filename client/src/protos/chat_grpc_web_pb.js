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

const proto = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ChatServiceClient =
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
proto.ChatServicePromiseClient =
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
 *   !proto.CreateChatRequest,
 *   !proto.CreateChatResponse>}
 */
const methodDescriptor_ChatService_createchat = new grpc.web.MethodDescriptor(
  '/ChatService/createchat',
  grpc.web.MethodType.UNARY,
  proto.CreateChatRequest,
  proto.CreateChatResponse,
  /**
   * @param {!proto.CreateChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateChatResponse.deserializeBinary
);


/**
 * @param {!proto.CreateChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CreateChatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateChatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ChatServiceClient.prototype.createchat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ChatService/createchat',
      request,
      metadata || {},
      methodDescriptor_ChatService_createchat,
      callback);
};


/**
 * @param {!proto.CreateChatRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateChatResponse>}
 *     Promise that resolves to the response
 */
proto.ChatServicePromiseClient.prototype.createchat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ChatService/createchat',
      request,
      metadata || {},
      methodDescriptor_ChatService_createchat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetChatRequest,
 *   !proto.GetChatResponse>}
 */
const methodDescriptor_ChatService_getChat = new grpc.web.MethodDescriptor(
  '/ChatService/getChat',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.GetChatRequest,
  proto.GetChatResponse,
  /**
   * @param {!proto.GetChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetChatResponse.deserializeBinary
);


/**
 * @param {!proto.GetChatRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GetChatResponse>}
 *     The XHR Node Readable Stream
 */
proto.ChatServiceClient.prototype.getChat =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ChatService/getChat',
      request,
      metadata || {},
      methodDescriptor_ChatService_getChat);
};


/**
 * @param {!proto.GetChatRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GetChatResponse>}
 *     The XHR Node Readable Stream
 */
proto.ChatServicePromiseClient.prototype.getChat =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ChatService/getChat',
      request,
      metadata || {},
      methodDescriptor_ChatService_getChat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SendMessageRequest,
 *   !proto.CreateChatResponse>}
 */
const methodDescriptor_ChatService_sendMessage = new grpc.web.MethodDescriptor(
  '/ChatService/sendMessage',
  grpc.web.MethodType.UNARY,
  proto.SendMessageRequest,
  proto.CreateChatResponse,
  /**
   * @param {!proto.SendMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateChatResponse.deserializeBinary
);


/**
 * @param {!proto.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CreateChatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateChatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ChatServiceClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ChatService/sendMessage',
      request,
      metadata || {},
      methodDescriptor_ChatService_sendMessage,
      callback);
};


/**
 * @param {!proto.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateChatResponse>}
 *     Promise that resolves to the response
 */
proto.ChatServicePromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ChatService/sendMessage',
      request,
      metadata || {},
      methodDescriptor_ChatService_sendMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ChatListRequest,
 *   !proto.ChatListResponse>}
 */
const methodDescriptor_ChatService_getMyChatList = new grpc.web.MethodDescriptor(
  '/ChatService/getMyChatList',
  grpc.web.MethodType.UNARY,
  proto.ChatListRequest,
  proto.ChatListResponse,
  /**
   * @param {!proto.ChatListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ChatListResponse.deserializeBinary
);


/**
 * @param {!proto.ChatListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ChatListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ChatListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ChatServiceClient.prototype.getMyChatList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ChatService/getMyChatList',
      request,
      metadata || {},
      methodDescriptor_ChatService_getMyChatList,
      callback);
};


/**
 * @param {!proto.ChatListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ChatListResponse>}
 *     Promise that resolves to the response
 */
proto.ChatServicePromiseClient.prototype.getMyChatList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ChatService/getMyChatList',
      request,
      metadata || {},
      methodDescriptor_ChatService_getMyChatList);
};


module.exports = proto;

