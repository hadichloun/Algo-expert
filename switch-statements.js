// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta



function caseInSwitch(val) {
    var answer = "";
    switch (val) {
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        return "delta";
        break;
    }
    return answer;
  }
  
  caseInSwitch(1);