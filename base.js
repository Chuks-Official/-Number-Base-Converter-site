function convertNumber() {
    const input = document.getElementById('inputNumber').value.trim();
    const base = parseInt(document.getElementById('baseSelector').value);
  
    let decimal;
    try {
      decimal = parseInt(input, base);
      if (isNaN(decimal)) throw "Invalid number!";
    } catch {
      alert("Please enter a valid number for the selected base.");
      return;
    }
  
    document.getElementById('decimalOutput').textContent = decimal.toString(10);
    document.getElementById('binaryOutput').textContent = decimal.toString(2);
    document.getElementById('octalOutput').textContent = decimal.toString(8);
    document.getElementById('hexOutput').textContent = decimal.toString(16).toUpperCase();
    
  }
  