/* eslint-disable no-param-reassign */
const getGCD = (num1, num2) => {
  let result;
  if (num1 > num2) {
    while (num2 !== 0) {
      result = num2;
      num2 = num1 % num2;
      num1 = result;
    }
  }
  if (num1 < num2) {
    return getGCD(num2, num1);
  }
  return result;
};
/* eslint-enable no-param-reassign */

export default getGCD;
