# User Cards React App

This is a React application that implements user cards according to the technical task. The user cards have an avatar, user name, number of tweets, number of followers, and a button that allows you to follow/unfollow the user. The app uses a mock API service to fetch user data.

## Criteria for Completion

- The layout is fixed in pixels, semantic, and valid.
- There are no errors in the browser console.
- The app is built using native JS with bundlers or React.
- Interactivity works according to the technical task.
- The code is formatted and without comments.
- The repository has a README.md file.

## Technical Task

According to the design, the user cards should be implemented.

When the Follow button is clicked, the text changes to Following, and the button color changes. The number of followers is also increased by 1, including your own follow. The initial number of followers is 100,500, and it becomes 100,501 when the button is clicked.

When the page is refreshed, the state of the button remains in the Following state, and the color does not change. The number of followers does not decrease to the initial value.

When the Follow button is clicked again, its text and color change back to the initial state. The number of followers is also decreased by 1 (from 100,501 to 100,500).

The number 100,500 should be written in the code as one value. In the UI, it should be displayed with a comma (100,500).

A personal backend should be created using the UI service mockapi.io. A resource named users should be created. The user object should have the following fields: id, user, tweets, followers, and avatar.

The app should display at least 12 users with different values in the database. Pagination should be implemented, with 3 tweets displayed per page. The rest of the tweets should be loaded when the Load More button is clicked.

## Follow and Following Design

Design: https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1

## Additional Task

For completing the additional task, extra points will be given. You cannot get the maximum score without completing this task.

Implement routing using React Router. The application should have the following routes:

- `/` - displays the user cards
- `/users/:userId` - displays the user details page, where you can see the user's tweets and followers.
