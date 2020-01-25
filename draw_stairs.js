/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in "I\n I\n I", or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

const drawStairs = (n) => {
  let answer = '';
  let space = ' ';
  if(n === 1) {
    return 'I';
  }

  for(let i = 0; i < n; i++) {
    if(i === n - 1) {
      answer = answer + 'I';
    }
    if(i < n - 1) {
      answer = answer + 'I\n' + space;
      space = space + ' ';
    }
  }

  return answer;
}