// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
// determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

// Solution 1: BFS and Memoization
var wordBreak = function(s, wordDict) {
  if(!wordDict || wordDict.length === 0) return false;
  let queue = [''];
  let memo = new Map();
  while(queue.length > 0){
    const val = queue.shift();
    for(let word of wordDict){
      const searchWord = `${val}${word}`;
      const startsWith = s.indexOf(searchWord) === 0;
      if(searchWord === s) return true;
      else if (!memo.has(searchWord) && startsWith){
        memo.set(searchWord, true);
        queue.push(searchWord);
      }
    }
  }
  return false;
};

// Solution 2: Dynamic Programming
// var wordBreak = function(s, wordDict) {
//   if(!wordDict || wordDict.length === 0) return false;
//   let dp = new Array(s.length + 1);
//   dp.fill(false);
//   dp[0] = true;
//   for(let i = 1; i <= s.length; i++){
//     for(let j = 0; j < i; j++){
//       if(dp[j] && wordDict.indexOf(s.substring(j, i)) >= 0){
//         dp[i] = true;
//         break;
//       }
//     }
//   }
//   return dp[s.length];
// };


console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("a", []));