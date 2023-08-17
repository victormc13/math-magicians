// import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  test('Renders Header component', () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });

  test('Renders Header component', () => {
    render(<Header />);
    const element = screen.getByText('Home');
    expect(element).toBeInTheDocument();
  });

  test('has the correct CSS class', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('.header-container')).toBeInTheDocument();
  });
});
