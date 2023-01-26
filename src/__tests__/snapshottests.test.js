import { render } from '@testing-library/react';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Snapshot for Calculator and Home', () => {
  it('Snapshot should match component render', () => {
    const homepage = render(<Home />);
    expect(homepage).toMatchSnapshot();
  });
  it('Snapshot should match component render', () => {
    const quoterender = render(<Quote />);
    expect(quoterender).toMatchSnapshot();
  });
});
