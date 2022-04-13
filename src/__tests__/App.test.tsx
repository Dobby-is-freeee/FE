import { render } from '@testing-library/react';
import App from 'src/App';

describe('<App/>', () => {
  test('컴포넌트 스냅샷을 찍자.', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
