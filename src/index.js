module.exports = function toReadable (number) {

    
 let result = '';

    function digitToReadable(digit) {

        switch (digit) {
            
            case 1:
              return 'one';
            case 2:
              return 'two';
            case 3:
              return 'three';
            case 4:
              return  'four';
            case 5:
              return 'five';
            case 6:
              return 'six';
            case 7:
              return 'seven';
            case 8:
              return 'eight';
            case 9:
              return 'nine';
            case 10: 
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14: 
                return 'fourteen';
            case 15:
             return 'fifteen';
            case 16:
                 return 'sixteen';
            case 17:
                 return 'seventeen';
            case 18:
                 return 'eighteen';
            case 19:
                return 'nineteen'; 
            default:
              return ' ';}
    }

    function tensToReadable(ten) {
        switch (ten) {
            case 20: 
            return 'twenty';
            case 30:
                return 'thirty';
                case 40:
                    return 'forty';
                    case 50:
                    return 'fifty';
                    case 60:
                        return 'sixty';
                        case 70:
                            return 'seventy';
                            case 80: 
                            return 'eighty';
                            case 90: 
                            return 'ninety';
                            default: '';

        }
    }
    if (number == 0) {
      result = 'zero';
    }
else if (number < 20){
    return digitToReadable(number);
} else if (number >= 20 && number < 100){
    let tens = tensToReadable(number - Number(number.toString()[1]));
    let decimal = digitToReadable(Number(number.toString()[1]));
    result = tens + " " + decimal;
} else if (number >= 100 && number < 1000 && Number(number.toString()[1]) != 1 && Number(number.toString()[1]) != 0){
          
    let hundreds = digitToReadable(Number(number.toString()[0]));
    let tens3 = tensToReadable((number % 100) - Number(number.toString()[2]));
    let decimal1 = digitToReadable(Number(number.toString()[2]));
   result = hundreds + " hundred " + tens3 + " " + decimal1;  

    } else if (number >= 100 && number < 1000 && Number(number.toString()[1]) == 1){
        let hundreds = digitToReadable(Number(number.toString()[0]));
        let teens = digitToReadable(number % 100);
        result = hundreds + ' hundred ' + teens;
    } else if (number >= 100 && number < 1000 && Number(number.toString()[1]) == 0){
        let hundreds = digitToReadable(Number(number.toString()[0]));
        let decimal1 = digitToReadable(Number(number.toString()[2]));
        result = hundreds + ' hundred ' + decimal1;
    }
    
    else result = "unknown number";

    return result.trim();

}
