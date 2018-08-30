NPM ...package.json

Travis CI

Unit Testing: Mocha with Chai assertion library and nyc coverage report


1. See the page by running `npm start` or `node server.js` and visiting localhost:3000 or
   change the localhost port at line 3 in server.js

2. visit my Heroku deployment at https://zerodep.herokuapp.com/ it may take half
   a minute to serve it up the first time

3. deploy to your own PAAS platform by adding the required setup file
   (in the case of Heroku, it is the Procfile)

4. Deploy through a CI + CD pipeline by adding the required config
   file (in the case of CircleCI, it is the .circleci/config.yml) To use
   CircleCI you simply log into your free CircleCI web account and add a
   webhook to your GitHub repo using the 'Add Projects' tab on the left.
