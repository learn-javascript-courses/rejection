# Rejection

A student project for [Learn JavaScript with Eric Elliott](https://ericelliottjs.com).

Want to work as a team? Find a coding buddy in the [student chat](https://gitter.im/learn-javascript-courses/javascript-questions).

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

If you have wins and rejections on the same day, your `win` points are multiplied by 10.

How long can you make your rejection streak last?


## Basic Level

Build a UI that lets you keep track of your score. Include a text input for the ask, who you asked, and two buttons: "Accepted" or "Rejected". For asynchronous requests such as emails or messages, record the score at the time you get the answer, not at the time you ask.

Use HTML+CSS and store a record of the data in `localStorage`.

Your data structure can be a simple collection of ask objects:

```js
interface Ask {
  timestamp: Number, // output from Date.now()
  askee: String,     // person asked
  status: String     // 'Accepted' or 'Rejected'
}
```

You could store these in an array, and calculate everything else you need to know by reducing over the list of asks.

It may be useful to display a running tally of the user's current score. Just remember that the current day's subtotal needs to be recalculated each time an ask is accepted or rejected, so it will be useful to keep the list in an array that you can [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) with each new ask added by the user.


## Mid level

Add an API to store data using a web service and database. Track multiple users (which means you'll need to add user authentication). Hint: Redis, Mongo, or RethinkDB would be good database candidates. Social login such as Facebook or Twitter would be good login options (easier and more secure than username/password logins).


## Advanced level

* Share your score and compete with your friends on Facebook.
* For each user, keep a leaderboard from their circle of friends.

## Extra credit

* Add mobile apps


## To Implement:

1. Fork this repo
2. Implement your solution.
3. Open an issue with a link to your fork.

To get credit, you must [open an issue](https://github.com/learn-javascript-courses/rejection/issues/new?title=Challenge+completed+level:+basic/mid/advanced) with a link to your fork.
