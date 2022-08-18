function isHappy(n) {
    let sum = 0;
    while (n > 0) {
      let e = n % 10;
      n = Math.floor(n / 10);
      sum += e * e;
      console.log(e , n , sum)
    }
    if (sum === 1) {
      return true;
    } else if (sum > 1 && sum <= 4) {
      return false;
    }
    return isHappy(sum);
  }

  console.log(isHappy(19))