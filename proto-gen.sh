cp protos/$1.proto client/src/protos
cp protos/$1.proto server/protos

protoc -I=. client/src/protos/$1.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.