import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders App', () => {
  const app = render(<BrowserRouter><App /></BrowserRouter>);
  expect(app).toMatchSnapshot();
});
