/*
Happy Holidays fellow Code Warriors!
Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

Sort Santa's Reindeer
Write a function called sortReindeer (sort_reindeer in Ruby) that accepts an array of Reindeer names, and returns an array with the Reindeer names sorted by their last names. */


return reindeerNames.sort(function(a, b) { return a.split(' ')[1] > b.split(' ')[1];});
