NPM ...package.json

Travis CI

Unit Testing: Mocha with Chai assertion library and nyc coverage report


1. See the page by running `npm start` or `node server.js` and
visiting localhost:3000 (may change the localhost port at line 3 in server.js)

2. visit my Heroku deployment at https://zerodep.herokuapp.com/ it may take half
   a minute to serve it up the first time

3. deploy to your own PAAS platform by adding the required setup file
   (in the case of Heroku, it is the Procfile)

4. Deploy through a CI + CD pipeline by adding the required config
   file (in the case of CircleCI, it is the .circleci/config.yml) To use
   CircleCI you simply log into your free CircleCI web account and add a
   webhook to your GitHub repo using the 'Add Projects' tab on the left.

To use CI and CD:
    1.) add branch protection to master branch on github. DE-SELECT the checkbox at
    Branches>>Branch protection rule(master)>>Rule settings>>Require status
    checks to pass before merging>>: "ci/circleci"
    (apparently that was for CircleCI 1.0). Keep "ci/circleci: build" and
    "ci/circleci: deploy" boxes checked.

    2.) Get your Heroku API key by clicking on your account avatar in the
    upper-right corner, and selecting "Account Settings". Then give CircleCI the
    environment vars for your Heroku account by pasting them in under the
    project's Settings (gear icon) >> Build Settings >> Environment Variables.  

    3.) Add deploy job AND a workflow to .circleci/config.yml

    4.) Work on a branch, commit and push to that branch, and then make a
    Pull Request from that branch to your master branch. After CircleCI runs all
    your tests and they pass, merge the branch into your master branch. Now
    CircleCI will run the workfow, push to Heroku, and the new version of your
    app is deployed.
