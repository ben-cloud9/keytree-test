This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# React assignment
This is an assignment i did for a contract - the brief was to get data from the github API and display the results in the browser using react

Overall I spent about 5 hours solid on this, I would have liked to have done more but ran out of time! Here's a few of the things I would have liked to have done/finished:
- More types - there are quite a few `any` types which I would have preferred to have not left
- More unit tests - There are more scenarios and edge cases that could be covered with these
- Another page - I set up the router but never got round to adding a 2nd route. I was going to add the organisations data
- Shared SCSS variables - colors, breakpoints, etc
- Taken the time to meet all the PWA guidelines to enable the 'add to homescreen' prompt
- Add 404 page

## Running locally
`npm run start:dev`
Run in development mode with hot reloading

## Tests
`npm run test` - run unit tests in watch mode

`CI=true npm run test` - run unit tests once in CI mode


## Integration tests
A few integration tests have been written using cypress.io

To run these you will need the app running locally on port 3000

Run `npm run cypress:open` (in seperate terminal tab/window) and select the test spec to run it


## Deploy
`npm run deploy`

This will run unit tests and, if they pass, deploy to EC2 instance.
You will need the appropriate private key in your `~/.ssh` folder to do this

this is a test

oiefjaisopgjpodsgj
