# Rejection

A portfolio project for professional developers to highlight skills with modern tech stacks like React, Redux, Serverless, etc. [EricElliottJS.com](https://ericelliottjs.com).

Want to work as a team?

You gotta lose to win.

Train yourself to:

* Get a raise
* Sell more
* Develop more business
* Negotiate better deals

The game has one rule:

**You must be rejected by a human being at least once per day.**

Ask for things outside your comfort zone, and you'll find yourself winning a lot more.

Win = 1 point.
Rejection = 10 points.

How long can you make your rejection streak last?


## Basic Level

Build a UI that lets you keep track of your score. Include a text input for the ask, who you asked, and two buttons: "Accepted" or "Rejected". For asynchronous requests such as emails or messages, record the score at the time you get the answer, not at the time you ask.

Use HTML+CSS and store a record of the data in `localStorage`.

Your data structure can be a simple array of ask objects:

```js
interface Question {
  id: String           // id of the question so you can get/edit/remove by id
  timestamp: Number,   // output from Date.now()
  question: String,    // the ask
  askee: String,       // person asked
  status: String       // 'Accepted', 'Rejected', 'Unanswered'
}
```

You can calculate everything else you need to know by reducing over the list of asks.

It may be useful to display a running tally of the user's current score. Just remember that the current day's subtotal needs to be recalculated each time an ask is accepted or rejected, so it will be useful to keep the list in an array that you can [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) with each new ask added by the user.


## Mid level

Add an API to store data using a web service and database. Track multiple users (which means you'll need to [add user authentication](https://medium.com/javascript-scene/passwords-are-obsolete-how-to-secure-your-app-and-protect-your-users-1cd6c7b7c3bc)).

Try [Firebase](https://firebase.google.com/) for data storage.


## Extra credit

* Add mobile apps by turning your web app into a [Progressive Web Application](https://web.dev/pwa-checklist/).


## To Implement:

1. Fork this repo
2. Implement your solution.
3. Open an issue with a link to your fork.

To get credit, you must [open an issue](https://github.com/learn-javascript-courses/rejection/issues/new?title=Challenge+completed+level:+basic/mid/advanced) with a link to your fork.
