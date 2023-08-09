import './Calculator.css';

const CalculatorDisplay = () => (
  <div className="calculator-display">
    0
  </div>
);

const CalculatorButtons = () => {
  const buttons = [
    { key: 'AC' }, { key: '+/-' }, { key: '%' }, { key: '÷', className: 'operator' },
    { key: '7' }, { key: '8' }, { key: '9' }, { key: '*', className: 'operator' },
    { key: '4' }, { key: '5' }, { key: '6' }, { key: '-', className: 'operator' },
    { key: '1' }, { key: '2' }, { key: '3' }, { key: '+', className: 'operator' },
    { key: '0' }, { key: '.' }, { key: '=', className: 'operator' },
  ];

  return (
    <section className="calculator-buttons">
      {buttons.map((button) => <button type="button" key={button.key} className={button.className}>{button.key}</button>)}
    </section>
  );
};

const Calculator = () => (
  <div className="calculator-container">
    <CalculatorDisplay />
    <CalculatorButtons />
  </div>
);

export default Calculator;
