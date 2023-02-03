function getNetPay(basicPay) {
    let ta;
    let da;
    let hra;
    let pf;
    if (basicPay <= 5000) {
      ta = 2.5;
      da = 3.4;
      hra = 5;
      pf = 3.6;
    } else if (basicPay > 5000 && basicPay <= 10000) {
      ta = 3.8;
      da = 5.5;
      hra = 8;
      pf = 7.3;
    } else if (basicPay > 10000 && basicPay <= 15000) {
      ta = 4.5;
      da = 6.5;
      hra = 10;
      pf = 9.5;
    } else if (basicPay > 15000 && basicPay <= 20000) {
      ta = 6.5;
      da = 8.5;
      hra = 12;
      pf = 12.5;
    } else if (basicPay > 20000) {
      ta = 7.5;
      da = 9.5;
      hra = 15;
      pf = 13;
    }
    let TA = (basicPay / 100) * ta;
    let DA = (basicPay / 100) * da;
    let HRA = (basicPay / 100) * hra;
    let PF = (basicPay / 100) * pf;
    let netPay = basicPay + TA + DA + HRA - PF;
    console.log(netPay);
  }
  getNetPay(5000);
  getNetPay(6000);
  getNetPay(13000);
  getNetPay(23000);