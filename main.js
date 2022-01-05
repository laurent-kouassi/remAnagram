function remAnagram(a, b) {

   // make hash array for both string and
   // calculate freguency of each character
   
   var count_a = Array.from({length: 26}, (_, i) => 0);
   var count_b = Array.from({length: 26}, (_, i) => 0);
   
   // count frequency of each character in a
   for(var i = 0; i < a.length; i++) {
      count_a[a.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
   }
   
   // count frequency of each character in b
   for(var i = 0; i < b.length; i++){
      count_b[b.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
   }
   
   // traverse count arrays to find number of charracters to be removed
   
   var result = 0;
   for(var i = 0; i < 26; i++){
      result += Math.abs(count_a[i] - count_b[i]);
   }
   
   return result;
}
