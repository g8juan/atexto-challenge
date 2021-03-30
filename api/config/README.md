# ATEXTO-CHALLENGE <-> AWESOME AUDIO RECORDER

AWESOME AUDIO RECORDER is a fully capable app of recording audio files from your mic through your web browser.

This guide will help you run the proyect step by step so that you can see the the code in action.

Some requisites:
Node, MongoDB capabilities, AWS Account, and of course, a browser.

### 1. Create a DB through your mongo shell. This db needs to be called: 'atexto-challenge'.

### 2. Create a Bucket in S3 (AWS).

- Link with more information about how to do this step: https://docs.aws.amazon.com/es_es/AmazonS3/latest/userguide/create-bucket-overview.html

### 3. Once you have created the bucket in S3, go to the foler ./api/routes/index.js. Then, put the name of the bucket in the variable called "bucketName".

### 4. You will need to get your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY from you dashboard in AWS.

- Link with more information about how to do this step: https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html

### 5. In the main folder of the server ('/api') create a ".env" file and put your AWS keys in there with the following format:

`AWS_ACCESS_KEY_ID=YOUR_PERSONAL_KEY`
`AWS_SECRET_ACCESS_KEY=YOUR_PERSONAL_SECRET_KEY`

## 6. In your terminal, go to the folder that contains the root of the project. Then run the following commands:

`cd api` -> to enter the server foler.
`npm install` -> to install all dependencies.

### 7. Repeat step 6 but with the following commands:

`cd app` -> to enter the app / front foler.
`npm install` -> to install all dependencies.

### 8. Open 1 terminal in the folder /api/ and run:

`npm start` -> This will start the server at the port 5000. If there was no error after this command, we can continue.

### 9. Open 1 terminal in the folder /app/ and run:

`npm run buil-dev` -> This will build a file 'bundle.js' that will contain our app to be served in the index.html of the dist folder. If there was no error after this command, we can continue.

## 10. Open the file /app/dist/index.html to see te app in action.

Please, if you have any issues trying to run this project, contact me asap to solve the problem so we can keep using the awesome audio recorder :)
