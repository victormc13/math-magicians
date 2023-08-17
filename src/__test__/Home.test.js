import { render } from '@testing-library/react';
import Home from '../components/Home';

test('Should render the Home page', () => {
  const home = render(<Home />);
  expect(home).toMatchSnapshot();
});
