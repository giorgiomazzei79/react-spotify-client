import { render, screen } from '@testing-library/react';
import Default from './Default';

const externalHref = 'lurz';

test('renders learn react link', () => {
  render(<Default externalHref={externalHref} />);
  const titleElement = screen.getByText(/search/i);
  expect(titleElement).toBeInTheDocument();
});
