function convertToRoman(num) {
  	const romanNumerals = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
 let roman = "";
    let i = 0;
    while (num > 0) {
        while (num >= romanNumerals[i][1]) {
            roman += romanNumerals[i][0];
            num -= romanNumerals[i][1];
        }
        i++;
    }
    return roman;
	 
  // let roman = '';
  // for (let key in romanNumerals) {
  //   while (num >= romanNumerals[key]) {
  //     roman += key;
  //     num -= romanNumerals[key];
  //   }
  // }
  // return roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 //console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
