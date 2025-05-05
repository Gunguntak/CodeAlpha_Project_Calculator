function appendValue(val) {
    document.getElementById('display').value += val;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }
  
  function calculate() {
    try {
      // Percentage calculation logic
      let expression = document.getElementById('display').value;
      if (expression.includes('%')) {
        expression = expression.replace('%', '/100');
      }
      const result = eval(expression);
      document.getElementById('display').value = result;
    } catch {
      document.getElementById('display').value = 'Error';
    }
  }
  