// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// Example 1:

// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

var numDecodings = function(s) {
  // Dynamic Programming Solution
  let cur = 0;
  let prev = 1;
  let prev2 = 0;
  for(let i = s.length - 1; i >= 0; i--){
    if(s[i] === '0'){
      cur = 0;
    } else {
      cur = prev;
      if(parseInt(s[i] + s[i + 1]) <= 26){
        cur += prev2;
      }
    }
    prev2 = prev;
    prev = cur;
  } 
  return cur;
};


console.log(numDecodings("12"));