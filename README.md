# Track Suit

## Description
Track your physical activity with track suit. List past and future workouts to chart progress while keeping in shape.

**Deployed Application:** https://fit-logger-app.herokuapp.com/

#### Table of Contents

[Demo](#demo) &nbsp;&nbsp;| &nbsp;&nbsp; [Installation](#installation) &nbsp;&nbsp; | &nbsp;&nbsp; [Usage](#usage) &nbsp;&nbsp; | &nbsp;&nbsp; [Contributing](#contributing) &nbsp;&nbsp; | &nbsp;&nbsp; [License](#license) &nbsp;&nbsp; |  &nbsp;&nbsp; [Questions](#questions)

## Demo

**Link to demo video:** https://drive.google.com/file/d/1ZzyUplgqkow0Y0-_rp0t0pF3UQcHPvUM/view

![Demo GIF](assets/readmeImages/Fitness-Tracker.gif)

 ## Installation
 #### Heroku Setup
- Make sure you have [Heroku](https://devcenter.heroku.com/articles/heroku-cli) installed on your machine
- After Forking or Cloning the repository, navigate to the repository folder in your terminal and ```npm i``` to install node modules
- Log into Heroku : ```heroku login```
- Run the command : ```git remote –v```
- Run the command : ```heroku create```
- Run ```git remote -v``` again to confirm you see the heroku remote links
- Commit any changes you would like to make to the app as usual and then run the command : ```git push heroku master```
- Go to your Heroku dashboard to find the link to your own personal "Take Note" app and start taking good notes! 

 #### Mongo Atlas Connection to Heroku
- Make sure you have a [Mongo Atlas](https://www.mongodb.com/cloud/atlas) account and Cluster set up
**Create a database for your application:**
- From the Mongo Atlas Dashboard navigate to Clusters and select Collections
- If you have not created any databases yet, select "Add My Own Data", otherwise, select "+ Create Database"
- In the next modal, add the name of your database and collection used in the application. The database and collection used in this code are "workout" (database) and "workouts" (collection). 
- Click the "Create" button to complete the creation.
**Connect the Mongo Atlas database to Heroku:**
- Navigate to your application in Heroku and click the "Settings" tab.
- Scroll down the page to "Config Vars" and click "Reveal Config Vars"
- Add the following to the "KEY" field: ```MONGODB_URI```
- For the "VALUE" field you will need to go back to your Mongo Atlas account - use another tab/window so you keep Heroku open, too
- From the Mongo Atlas screen, navigate to your Cluster and click the "Connect" button (located in the upper right hand of the screen)
- Select "Connect your application" from the next modal that pops up.
- Copy the URL from option #2 in the next modal.
- Navigate back to Heroku and paste the URL in the "VALUE" field for the Config Vars.
- **IMPORTANT:** You will need to update the URL to include your password and database name. For example:<br>
```mongodb+srv://youraccount:YOURPASSWORD@cluster0.hfmuv.mongodb.net/YOURDATABASE?retryWrites=true&w=majority```
- Once this step is complete you should be set.

## Usage

- This application is meant to be used for recording your fitness activities. 
- The stats for your latest workout are available on the Fitness Tracker landing page.
- Stats for workouts completed within the last 7 days are available on the Dashboard page (Linked from the top nav).

## Contributing

- Fork the repository
- Navigate to the folder containing app.js in the terminal and enter ```npm install``` to download dependencies
- Add your stamp to the program's functionality and be sure to reach out with your update/improvements. I would like to see what you've done! 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

- Please click the "Ask me anything" badge at the top of the page if you have any questions about this application.