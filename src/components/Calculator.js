import './Calculator.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function CalculatorDisplay({ result }) {
  return (
    <div className="calculator-display">
      {result.total}
      {result.operation}
      {result.next}
    </div>
  );
}

CalculatorDisplay.propTypes = {
  result: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

function CalculatorButtons({ result, setResult }) {
  const buttons = [
    { key: 'AC' }, { key: '+/-' }, { key: '%' }, { key: '÷', className: 'operator' },
    { key: '7' }, { key: '8' }, { key: '9' }, { key: '*', className: 'operator' },
    { key: '4' }, { key: '5' }, { key: '6' }, { key: '-', className: 'operator' },
    { key: '1' }, { key: '2' }, { key: '3' }, { key: '+', className: 'operator' },
    { key: '0' }, { key: '.' }, { key: '=', className: 'operator' },
  ];

  const handleClick = (e) => {
    const output = calculate(result, e.target.textContent);
    setResult(output);
  };

  return (
    <section className="calculator-buttons">
      {buttons.map((button) => (
        <button
          type="button"
          key={button.key}
          className={button.className}
          onClick={handleClick}
        >
          {button.key}
        </button>
      ))}
    </section>
  );
}

CalculatorButtons.propTypes = {
  result: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  setResult: PropTypes.func.isRequired,
};

function Calculator() {
  const [result, setResult] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  return (
    <article className="calculator-container">
      <h2>Let&apos;s do some math</h2>
      <div className="calculator">
        <CalculatorDisplay result={result} />
        <CalculatorButtons result={result} setResult={setResult} />
      </div>
    </article>
  );
}

export default Calculator;
