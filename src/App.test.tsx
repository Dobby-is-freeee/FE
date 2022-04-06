import { render, screen } from '@testing-library/react';
import App from './App';

test('<App>', () => {
  render(<App />);
  const text = screen.getByText('농구 프로젝트');
  expect(text).toBeInTheDocument();
});
