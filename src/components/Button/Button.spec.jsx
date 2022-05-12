import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  test('button - render with the text', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  test('button - should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(button);
    userEvent.click(button);
    expect(fn).toBeCalledTimes(2);
  });

  test('button - should be disable after change boolean var for true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  test('button - should be enable after change boolean var for false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  test('button - should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
