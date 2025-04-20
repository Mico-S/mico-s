---
title: "Frustration with Firestore Timestamps"
date: 2025-04-20
layout: post.njk
tags: posts
---

`Timestamp` is Firestore's native data type to store a point in time. This data type has worked well for me, but there is one thing to be aware of: how front-end views display timestamps with timezones.

### Background

From Firestore's [Timestamp docs](https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Timestamp), we can learn that the `Timestamp` object stores two things:

- `seconds`: The number of seconds of UTC time since Unix epoch
- `nanoseconds`: The non-negative fractions of a second at nanosecond resolution

This allows for `Timestamp` to store absolute point-in-time data with extreme accuracy. But in order to display these times in a human-readable way on any front-end, you'll need to convert the `Timestamp` into JavaScript's `Date` object. You can do this using the object's built in `toDate` method, but this is where things can get confusing and annoying.

### The problem

Let's use an example. If a user performs an action that requires you to create a new Firestore document, you can store a `Timestamp` field called `dateCreated` to mark when that document was created. The code might look something like this:

```javascript
import { Timestamp, setDoc, doc } from "firebase/firestore";

// Using January 1, 2025 at midnight UTC for this example
const myDate = new Date("2025-01-01T00:00:00Z");

await setDoc(doc(db, "documents", "document1"), {
  name: "Micah's Document",
  dateCreated: Timestamp.fromDate(myDate),
});
```

This is great, and Firestore will successfully store the timestamp. But when you check your Firestore Database console to double check the operation, you might see the date string `December 31, 2024 at 5:00:00PM UTC-7`. What's going on here? Why do I not see my January 1, 2025 date string? Did I store my timestamp incorrectly?

### The realization

This took me a (embarrassingly) long time to recognize, but `December 31, 2024 at 5:00:00PM UTC-7` and `2025-01-01T00:00:00Z` are the same points in time. One is displayed in my local timezone (Denver) and the other is displayed in UTC time. The application front-end always tries to convert the `Timestamp` to your browser's local timezone via the `Date` object, so if you don't remember your timezone conversions, you might believe that your stored timestamp is 7 hours off.

This can be really annoying because when reading a database, you want to read what you've stored before any conversions have occurred. Also, if you're working with an application that relies on displaying times with day, month, or year formats, it gets frustrating because your `2025-01-01T00:00:00Z` date will display as December 31, 2024 to the user. This is likely to cause a lot of confusion and bugs.

### Conclusion

This is a very long way of saying that you need to pay attention to how your front-end handles time-based objects. Depending on your use case, make sure that your front-end is performing the correct timezone conversions or not doing any conversions at all.

- [Firestore Timestamp.fromDate not UTC](https://stackoverflow.com/questions/55714631/firestore-timestamp-fromdate-not-utc) on Stack Overflow. Looks like I'm not the only one who has struggled with this concept or found Firestore's way of displaying timestamps to be frustrating.
