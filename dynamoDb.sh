# this creates a table in dynamodb
# https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html

# AttributeName=Password,AttributeType=S \

# aws dynamodb create-table \
#     --table-name Accounts \
#     --attribute-definitions \
#         AttributeName=Username,AttributeType=S \
#     --key-schema \
#         AttributeName=Username,KeyType=HASH \
#     --provisioned-throughput \
#         ReadCapacityUnits=10,WriteCapacityUnits=5 \
#     --endpoint-url http://localhost:8000

aws dynamodb create-table \
    --table-name TokenVault \
    --attribute-definitions \
        AttributeName=Token,AttributeType=S \
    --key-schema \
        AttributeName=Token,KeyType=HASH \
    --provisioned-throughput \
        ReadCapacityUnits=10,WriteCapacityUnits=5 \
    --endpoint-url http://localhost:8000
<<<<<<< HEAD

# aws dynamodb create-table \
#     --table-name TokenVault \
#     --attribute-definitions \
#         AttributeName=Token,AttributeType=S \
#         # AttributeName=Data,AttributeType=S \
#     --key-schema \
#         AttributeName=Token,KeyType=HASH \
#         # AttributeName=Data,KeyType=RANGE \
#     --provisioned-throughput \
#         ReadCapacityUnits=10,WriteCapacityUnits=5 \
#     --endpoint-url http://localhost:8000
=======
>>>>>>> main
