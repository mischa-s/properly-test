# Properly Coding Challenge
Code challenge for full stack developers.

## Solution
To view the result, clone the repo, navigate to it, and install the dependencies:

```
git clone https://github.com/mischa-s/properly-test
cd properly-test
npm install
```

Run the project in development mode using

### `npm start`

You can then view the application at `http://localhost:3000`

The page will reload if you make edits.

### Functions
The functions used to solve the challenge are all in ```src/helperFunctions```.

### Components 
Each challenge completed has it's own component in ```src/Components```. These components are then passed to ```src/Home.js``` to render the results and demonstrate that the functions work with data provided.

# The format of the Code Challenge is as follows:

- Please clone/download the Git repository to have access to all the assets you need to complete this tasks.

- Estimate the time needed to complete each task and provide an estimated date of delivery by replying to this email

- Complete the tasks and upload the resulting code and any other assets to a public GitHub repository. You may need to create an account with GitHub.

- Provide the link to the repository so we can review the solution, also via email


After we review your solution we will get back in touch and we may ask some questions about the implementation.

Feel free to send any questions you have about the challenge or the problem statement at any time.


For the position of Intermediate Fullstack Developer we expect you to solve all of "Task Group 1", at least 3 items of "Task Group 2" and all of "Task Group 3".


The challenge is an open format, we prefer you use JavaScript, but you are free to pick any language.


You are also free to leverage any frameworks and libraries of your preference.

Along with your submission, please include instruction on how to run your code.
## Objectives
 - Assess software development skills such as:
    - Problem solving
    - Software quality
    - Code quality
    - Testing
    - Task sizing and work estimation
    - Use of tools (e.g. Git)
    - Delivery

## Problem Statement

Given a **Database** of:
### Users
 - name
 - email
 - location
 - subscriptionId

### Subscriptions
 - id
 - name
 - priceType

### Properties
 - id
 - userId
 - title
 - location
 - type
 - numberOfRooms
 - timeZone

### Bookings

 - id
 - propertyId
 - startDate
 - endDate

Use the **JSON dataset** that we have provided in the repository. 

#### Task Group 1
Create functions that return:

 - 1.1. All users from a particular city

 - 1.2. All users from a particular company (a user of a company is a user that has the same email domain. E.g for john@getproperly.com and company@getproperly.com "getproperly.com" is the email domain)

 - 1.3. All users from Free tier subscription which have more than 6 properties

 - 1.4. All users from Premium tier subscription which have less than 4 properties

 - 1.5. All users that live in a different city than their properties

#### Task Group 2
Create functions that return:

 - 2.1. All bookings for a **given period** (start and end dates).
 
    2.1.a - The bookings returned should have the startDate and endDate formated to dd/MM/YYYY HH:mm using the property timeZone. 
    
    2.1.b - The **given period** is also provided in the Property timeZone.

- 2.2. All bookings longer or equal to 25 days.

- 2.3. All bookings shorter or equal to 3 days.

- 2.4. All Properties with Bookings with 1 day or less between bookings

- 2.5. With the functions created expose them in a restful application and create a dashboard (simple UI) to display the results

#### Task Group 3

 - 3.1. How would you identify users who live in any given city and make it mandatory that users from that city are only allowed to have a premium subscription?


## To present my solutions to this challenge I used [Razzle](https://github.com/jaredpalmer/razzle) created by [Jared Palmer](https://github.com/jaredpalmer) to generate a simple react app 

MIT License

## Razzle Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars2.githubusercontent.com/u/4060187?v=4" width="100px;"/><br /><sub>Jared Palmer</sub>](http://jaredpalmer.com)<br />[💬](#question-jaredpalmer 'Answering Questions') [💻](https://github.com/jaredpalmer/razzle/commits?author=jaredpalmer 'Code') [🎨](#design-jaredpalmer 'Design') [📖](https://github.com/jaredpalmer/razzle/commits?author=jaredpalmer 'Documentation') [💡](#example-jaredpalmer 'Examples') [🤔](#ideas-jaredpalmer 'Ideas, Planning, & Feedback') [👀](#review-jaredpalmer 'Reviewed Pull Requests') [⚠️](https://github.com/jaredpalmer/razzle/commits?author=jaredpalmer 'Tests') [🔧](#tool-jaredpalmer 'Tools') | [<img src="https://avatars3.githubusercontent.com/u/1415847?v=4" width="100px;"/><br /><sub>Jari Zwarts</sub>](https://jari.io)<br />[💬](#question-jariz 'Answering Questions') [💻](https://github.com/jaredpalmer/razzle/commits?author=jariz 'Code') [🤔](#ideas-jariz 'Ideas, Planning, & Feedback') [🔌](#plugin-jariz 'Plugin/utility libraries') [👀](#review-jariz 'Reviewed Pull Requests') | [<img src="https://avatars0.githubusercontent.com/u/810438?v=4" width="100px;"/><br /><sub>Dan Abramov</sub>](http://twitter.com/dan_abramov)<br />[💻](https://github.com/jaredpalmer/razzle/commits?author=gaearon 'Code') [🤔](#ideas-gaearon 'Ideas, Planning, & Feedback') | [<img src="https://avatars0.githubusercontent.com/u/15182?v=4" width="100px;"/><br /><sub>Eric Clemmons</sub>](http://ericclemmons.github.com/)<br />[💻](https://github.com/jaredpalmer/razzle/commits?author=ericclemmons 'Code') [🤔](#ideas-ericclemmons 'Ideas, Planning, & Feedback') |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
