# Team Overcast
Patrick Bartlett, Michelle Jakab, Gwennie Kidd, Terence Tong, Shreya Tumma

# CloudHaven - Product Vision
CloudHaven provides a service for users to contain all of their important portals and applications, such as healthcare, banking, etc., in one place. 

CloudHaven will be a service for applications to use to build their front-end UI, UI-as-a-service.

CloudHaven will keep user data safe and secure by holding all personal information in one place, rather than spread out across many applications. 

This tool will also provide a messaging system that gives a platform for vendors to communicate effectively with their customers.

The future goal of CloudHaven is to give users the ability to customize the interface for different applications.

# Tech Stack
Front-end: React.js 

Back-end: Node.js, Express.js 

State management: Redux, Context 

Database: DynamoDB

# Setting Up The Local Database
1. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html#cliv2-mac-install-cmd)

2. Setup the [local database](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)

## Setting up the tables in the database
Going through the above links should tell you how to set the database up locally. To test these changes you have to setup the table as well. I will explain how to do so below.


3. Make sure the database is running
    - navigate to the directory where `DynamoDBLocal_lib` exists
    - run the following command `java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb` and leave this terminal open i.e DO NOT TERMINATE THIS PROCESS
4. run the file called `dynamoDb.sh` by using `source dynamoDb.sh` or `./dynamoDb.sh`
5. to test if the tables were created run `aws dynamodb list-tables --endpoint-url http://localhost:8000`
    - you should see a table called `Accounts` 
