const getGCD = (a, b) => {
    let c;
    if (a > b) {
      while (b !== 0) {
        c = b;
        b = a % b;
        a = c;
      }
    }
    if (a < b) {
     return getGCD(b, a);
    }
    return c;
   }

   export default getGCD;