
# Class 5

## Assignments

1. (13 pts) Create an object constructor function that represents a movie. The object should have ratings property that is an array of the rating numbers, and avgRating that should be average of the items in the array. The object should have a method addRating that adds rating to the array and also updates the averageRating.

```javascript
// Assuming object is already defined above, one should be able to do the following:
const movie = new Movie("The Lego Movie"); // Create the object
console.log(movie.title); // Output the movie title;
console.log(movie.avgRating); // Output the current average rating. Should be 0.
movie.addRating(10); // This movie is awesome, let's give it 10 stars.
console.log(movie.avgRating); // Output the current average rating.
movie.addRating(6); // Not everyone liked it :(
console.log(movie.avgRating); // Should be 8.
console.log(movie.ratings); // Should output Array [10, 6]
```

## Homework

1. (11 pts) Define a function charCount that takes a string as an argument and returns an object containing character count of letters.

```javascript
const result = charCount("Pack my box with five dozen liquor jugs.");
const aCount = result.a;
const spaceCount = result[' '];
console.log(aCount); // Should output 1
console.log(spaceCount); // Should output 7
```

P.S. Create the separate .js files for each assignment and homework. Create two branches, one for assignments and one for homework. Push your changes to the corresponding Github branches. Create pull requests to your master.
