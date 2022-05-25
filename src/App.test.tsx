import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the coubnter starts at 0', () => {
  render(<App />);
  const counterElemet = screen.getByTestId('counter');
  expect(counterElemet).toHaveTextContent('0');
});

test('minus butotns has correct text', () => {
  render(<App />);
  const minusButton = screen.getByTestId('minus-btn');
  expect(minusButton).toHaveTextContent('-');
});

test('plus butotns has correct text', () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus-btn');
  expect(plusButton).toHaveTextContent('+');
});

test('When the + button is pressed, the counter changes to 1', () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus-btn');
  fireEvent.click(plusButton)
  const counterElemet = screen.getByTestId('counter');
  expect(counterElemet).toHaveTextContent('1');
});

test('When the - button is pressed, the counter changes to -1', () => {
  render(<App />);
  const minusButton = screen.getByTestId('minus-btn');
  fireEvent.click(minusButton)
  const counterElemet = screen.getByTestId('counter');
  expect(counterElemet).toHaveTextContent('-1');
});

test('on/off button has blue colior', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-btn');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});

test('prevent the -,+ butotn from being pressed when on/off btn is clicked', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId('on/off-btn');
  fireEvent.click(onOffButtonElement);
  const plusButton = screen.getByTestId('plus-btn');
  const minusButton = screen.getByTestId('minus-btn');
  expect(plusButton).toBeDisabled()
  expect(minusButton).toBeDisabled()

});

