
## Build a basic version of CanPay

Step 1
Creating basic template

```
mkdir database
mkdir middleware
mkdir routes

touch database/index.js
 ```



Step 2 - User Mongoose schemas
1. Created DB connection
2. Creating schemas
3. Creating Model using the Schema which we created
 



Step 3
 
We need to support 3 routes for user authentication
Allow user to sign up.
Allow user to sign in.
Allow user to update their information (firstName, lastName, password).
 
To start off, create the mongo schema for the users table
Create a new file (db.js) in the root folder
Import mongoose and connect to a database of your choice
Create the mongoose schema for the users table 
Export the mongoose model from the file (call it User)

hello this is a test
