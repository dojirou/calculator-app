function calculate() {
  const input = document.getElementById('input').value;
  let result = '';

  try {
    // bin(1010) → 2進数処理
    if (input.includes('bin(')) {
      const expr = input.replace(/bin\((.*?)\)/g, (_, binNum) => parseInt(binNum, 2));
      result = eval(expr).toString(2);
    }
    // hex(1A) → 16進数処理
    else if (input.includes('hex(')) {
      const expr = input.replace(/hex\((.*?)\)/g, (_, hexNum) => parseInt(hexNum, 16));
      result = eval(expr).toString(16).toUpperCase();
    }
    // 微分：derivative(x^2,x)
    else if (input.startsWith('derivative')) {
      const [_, expr, variable] = input.match(/derivative\((.+),\s*(.+)\)/);
      result = math.derivative(expr, variable).toString();
    }
    // 積分：integrate(x^2,x)
    else if (input.startsWith('integrate')) {
      const [_, expr, variable] = input.match(/integrate\((.+),\s*(.+)\)/);
      result = math.integral(expr, variable).toString();
    }
    else {
      result = math.evaluate(input);
    }
  } catch (e) {
    result = 'エラー: ' + e.message;
  }

  document.getElementById('result').textContent = result;
}
