import React, { useState, useEffect, useCallback } from 'react';

function PaypalFee() {
  const [amount, setAmount] = useState('');
  const [paypalPercentage, setPaypalPercentage] = useState(4.9);
  const paypalAddition = 0.30;
  const [totalFees, setTotalFees] = useState('');
  const [youReceive, setYouReceive] = useState('');
  const [youAsk, setYouAsk] = useState('');

  // Memoize the function with useCallback
  const setPapPalCommissionToolsPg = useCallback(() => {
    let amt = parseFloat(amount);
    let percentage = 4.9;
    if (!isNaN(amt) && amt >= 1) {
      if (amt >= 3000.01 && amt <= 10000) {
        percentage = 3.9;
      } else if (amt >= 10000.01 && amt <= 100000) {
        percentage = 3.7;
      } else if (amt > 100000) {
        percentage = 3.4;
      }
    }
    setPaypalPercentage(percentage);
  }, [amount]);

  // Use the memoized callback in useEffect
  useEffect(() => {
    setPapPalCommissionToolsPg();
  }, [amount, setPapPalCommissionToolsPg]);

  const numberWithCommas = (x) => {
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };


  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const showResult = () => {
    let amt = parseFloat(amount);
    if (isNaN(amt) || amt < 1) {
      alert('Please enter a valid amount greater than zero');
      setAmount('');
      return;
    }

    let paypalAmt = ((amt * paypalPercentage) / 100);

    let total = paypalAmt;
    let receive = amt - paypalAmt;
    let ask = amt + paypalAmt;

    setTotalFees(`$${numberWithCommas(total.toFixed(2))}`);
    setYouReceive(`$${numberWithCommas(receive.toFixed(2))} <br><small>If you ask for $${numberWithCommas(amt.toFixed(2))}</small>`);
    setYouAsk(`$${numberWithCommas(ask.toFixed(2))} <br><small>If you need $${numberWithCommas(amt.toFixed(2))}</small>`);
  };

  const resetFields = () => {
    setAmount('');
    setTotalFees('');
    setYouReceive('');
    setYouAsk('');
    setPaypalPercentage(4.9);
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
      <div className="">
              <label type="button" onClick={(() => {window.history.back(-1)})}>
                <i className="icon la la-arrow-left" /> Back
              </label>
            </div>
        <label htmlFor="amt" style={styles.label}>Paypal Fee Calculator</label>
        <input
          type="text"
          placeholder="Enter amount here ($)"
          id="amt"
          value={amount}
          onChange={handleAmountChange}
          onBlur={setPapPalCommissionToolsPg}
          onKeyUp={setPapPalCommissionToolsPg}
          style={styles.input}
        />
        <div id="paypalFees" style={styles.paypalFees}>
          {paypalPercentage}% + {paypalAddition.toFixed(2)}
        </div>
        <div style={styles.buttonContainer}>
          <button onClick={showResult} style={styles.button}>Calculate fees</button>
          <button onClick={resetFields} style={{ ...styles.button, ...styles.resetButton }}>Reset</button>
        </div>
        <div style={styles.resultLabel}>Total fees:</div>
        <div id="totalFees" style={styles.result} dangerouslySetInnerHTML={{ __html: totalFees }} />
        <div style={styles.resultLabel}>You will receive:</div>
        <div id="youReceive" style={styles.result} dangerouslySetInnerHTML={{ __html: youReceive }} />
        <div style={styles.resultLabel}>You should ask for:</div>
        <div id="youAsk" style={styles.result} dangerouslySetInnerHTML={{ __html: youAsk }} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#f4f4f9',
    margin: 0,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    boxSizing: 'border-box',
  },
  ad: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    padding: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  calculator: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    display: 'block',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    border: '1px solid #ccc',
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  paypalFees: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#800020',
    color: 'white',
    border: 'none',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '48%',
  },
  resetButton: {
    backgroundColor: '#555555',
  },
  resultLabel: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    color: '#800020',
  },
  result: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    color: '#333',
  },
};

export default PaypalFee;
