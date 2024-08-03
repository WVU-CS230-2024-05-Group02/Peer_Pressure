# Peer_Pressure

## Created By Lucas, Violet, Ezra, Banafsheh, and Shawn for WVU - CS230 - Summer Semester 2024

This app we set out to accomplish a few major steps in improving group project management. We wanted an easy app designed to help a group stay on task and reflect. 
We did this in a few major steps with this web app including:
- [x] Easy Course Creation and Evaluation Sending for the Instructor
- [x] Easy form to answer the Evaluation for the student
- [x] Automatic Grade calculation for a student
- [x] Options for Instructor to edit student grades according to student justifications

This GitHub Project's app is being hosted on AWS Elastic Beanstalk at this link: [(http://peerpressurebuild-dev.us-east-1.elasticbeanstalk.com/)]

The project can be cloned and run on localhost. To do this take the following steps:

  1. Clone the repository into folder
  2. Type in the following commands to get the main build folder running:

```
npm i
cd backend
npm start
```

  3. To enable hot reload and ability to change the react frontend type in these commands from the main directory:

```
npm i
cd backend
npm start
```
  3.1 Then in a separate terminal back in the main folder type in and go into localhost 3001 to view the app:

```
npm start
y
```

##### Project Structure

The project has 2 different sections - the backend folder where the main build is running and the server is run, and the main folder. The main folder contains all of the react code that styles the page and interparates the data from the backend. When in development use the main folder to edit the localhost server by following step 3 above. After changes are complete then create the build folder for the main folder and move the build folder from the main folder up into the backend folder. 
