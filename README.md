Basically, to build an app through this Pipeline, you would just work inside the "app" folder, write integration/e2e tests in the /cypress folder, and write unit tests in the /test folder.

What it does: Runs your tests, and if they pass, deploys the app to cloud host.

How to use it:
1. CircleCI will add a webhook to your GitHub/BitBucket repo which will trigger when you push or merge to that branch. When you sign up for the CircleCI account, you will authorize it to add hooks.
   Just go to the 'Add Projects' tab on the left and you should see all your repos. The webhook should be on GitHub at yourRepo/settings/hooks.

   2. Look at line 74 of .circleci/config.yml. Set these environment variables in the CircleCI platform at PROJECT/project settings/build settings/environment variables. (On Heroku, the api key is in your account settings. CircleCI will add its own ssh key to your Heroku account, to secure the transport. Heroku also needs the Procfile in the root of the repo, so leave that there.) This pipeline is configured to deploy to Heroku, but it isn't hard to change; see https://circleci.com/docs/2.0/deployment-integrations/.

   3. Write Cypress integration tests as testy_mc_test_spec.js in the cypress directory. Use Chai.js syntax and see the https://docs.cypress.io/api/api/table-of-contents.html. The Cypress setup and run is at the cypress: key in the .yml.

   4. Cypress  isn't great for unit testing, so Mocha, Chai, and nyc are installed as development dependencies. Write unit tests in /test directory. These are run in the 'build:' group a of the .yml.

   5. You can serve the app locally with `npm start` or `node server.js`. You can change the localhost port at line 3 in server.js, or replace the whole server code. But make sure there is a working server.js in the root of the repo.

   0. You ran `npm install` already...

Still some things   
to do:
* add Webpack
* shrinkwrap-package-lock
* add ESlint
