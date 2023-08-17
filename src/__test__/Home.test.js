import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('home ', () => {
  test('Should render the Home page', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });

  test('has the correct CSS class for home container', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toHaveClass('welcome-container');
  });

  test('has the correct CSS class', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('.welcome-title')).toBeInTheDocument();
  });

  test('has the correct CSS class', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('.welcome-msg')).toBeInTheDocument();
  });

  test('has the correct CSS element of h2', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  test('has the correct CSS element of P', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('p')).toBeInTheDocument();
  });
});
