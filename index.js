// expecting time to be a string in the format like '8:15' or '12:30'

// edge cases: 0:00, 12:00
// get the mins from time -> check if it's > 30 or not
// if it can be devided by 15 -> use quarter but 30 is using half


const numberWords = {
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
  "10": "ten",
  "11": "eleven",
  "12": "twelve",
  "13": "thirteen",
  "14": "fourteen",
  "15": "fifteen",
  "16": "sixteen",
  "17": "seventeen",
  "18": "eighteen",
  "19": "nineteen",
  "20": "twenty",
  "21": "twenty one",
  "22": "twenty two",
  "23": "twenty three",
  "24": "twenty four",
  "25": "twenty five",
  "26": "twenty six",
  "27": "twenty seven",
  "28": "twenty eight",
  "29": "twenty nine"
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === "12:00") {
    return "midday";
  }

  const timeArr = time.split(":");
  const hours = timeArr[0];
  console.log("hours", hours);
  const mins = timeArr[1];
  console.log("mins", mins);

  let resultHours = "", resultMiddle = "", resultMins = "";

  if (mins === "00") {
    return `${numberWords[hours]} o'clock`;
  }

  // less than 30
  if (parseInt(mins)<=30) {

    resultMiddle = "past";
    resultHours = numberWords[hours];

    console.log("divide 15", canDivideBy15(parseInt(mins)));
    if(canDivideBy15(parseInt(mins))) {
      console.log("mins === 30", mins === "30");
      if (mins === "30") {
        console.log("equal 30");
        resultMins = "half";
      } else {
        resultMins = "quarter";
      }
    } else {
      resultMins = numberWords[mins];
    }
  }

  // over 30
  if (parseInt(mins)>30) {

    resultMiddle = "to";
    resultHours = numberWords[(parseInt(hours)+1).toString()];

    const diffMinsInNumber = 60 - parseInt(mins);
    const diffMins = diffMinsInNumber.toString();

    if (canDivideBy15(diffMinsInNumber)) {
      resultMins = "quarter";
    } else {
      resultMins = numberWords[diffMins];
    }
    
  }
  
  const result = `${resultMins} ${resultMiddle} ${resultHours}`;
  console.log("result:", result);

  return result;
}

function canDivideBy15(num) {
  return num%15 === 0
}

module.exports = { convertTimeToWords };