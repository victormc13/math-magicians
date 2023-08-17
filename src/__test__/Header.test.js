import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  test('Renders Header component', () => {
    const header = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(header).toMatchSnapshot();
  });

  test('Check if the Header component Home string is in the document', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.getByText('Home');
    expect(element).toBeInTheDocument();
  });

  test('has the correct CSS class', () => {
    const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(container.querySelector('.header-container')).toBeInTheDocument();
  });
});
