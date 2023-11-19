import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from '../App';

describe('App', () => {
  it('should render the App', () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should enable the button if two textboxes were typed', () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'root' } });
    fireEvent.change(passwordInput, { target: { value: 'root' } });

    expect(loginButton).not.toBeDisabled();
  });
});

describe('Button', () => {
  it('should render the button', () => {
    const { getByText } = render(<LoginForm />);
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should be clicked', () => {
    const handleClick = jest.fn();
    const { getByText, getByPlaceholderText } = render(<LoginForm onClick={handleClick} />);

    // Simulate user interaction by filling in the username and password fields
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.change(usernameInput, { target: { value: 'root' } });
    fireEvent.change(passwordInput, { target: { value: 'root' } });

    const loginButton = getByText('Login');
  
    fireEvent.click(loginButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    const { getByText } = render(<LoginForm />);
    expect(getByText('Login')).toBeDisabled();
  });

  it('should render the text inside the button correctly', () => {
    const { getByText } = render(<LoginForm />);
    expect(getByText('Login')).toHaveTextContent('Login');
  });
});

describe('TextInput', () => {
  it('should be rendered', () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should be able to type', () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'root' } });
    fireEvent.change(passwordInput, { target: { value: 'root' } });

    expect(usernameInput.value).toBe('root');
    expect(passwordInput.value).toBe('root');
  });

  it('should render the label', () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    expect(getByPlaceholderText('Username')).toHaveAttribute('placeholder', 'Username');
    expect(getByPlaceholderText('Password')).toHaveAttribute('placeholder', 'Password');
  });
});