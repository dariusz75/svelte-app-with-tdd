import { render, screen, cleanup, } from '@testing-library/svelte';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import SignUpPage from './SignUpPage.svelte';

describe('Sign Up Page', () => {

  describe('Form UI', () => {
    afterEach(cleanup)

    // select H-tag by accessibility role
    test('will have Sign Up header', ()=>{
      render(SignUpPage);
      const header = screen.getByRole('heading', {name: 'Sign Up'});

      expect(header).toBeInTheDocument();
    })

    // select Inputs by querySelectorAll array of elements
    test('will have 4 inputs', ()=>{
      const { container } = render(SignUpPage);
      const inputs = container.querySelectorAll('input');

      expect(inputs.length).toBe(4)
    })

    // select Input by data-testid HTML attribute
    test('will have username input', ()=>{
      const { getByTestId } = render(SignUpPage);
      const input = getByTestId('username')

      expect(input).toBeInTheDocument();
    })

    // select Input input element by placeholder text 
    test('will have email input', ()=>{
      render(SignUpPage);
      const input = screen.getByPlaceholderText('Enter email address')

      expect(input).toBeInTheDocument();
    })

    // select Input input element by label text 
    test('will have password input', ()=>{
      render(SignUpPage);
      const input = screen.getByLabelText('Password')

      expect(input).toBeInTheDocument();
    })

    // checking Input for type attribute 
    test('will have password type', ()=>{
      render(SignUpPage);
      const input = screen.getByLabelText('Password')

      expect(input.type).toBe('password');
    })

    // select Input input element by label text 
    test('will have password input', ()=>{
      render(SignUpPage);
      const input = screen.getByLabelText('Repeat Password')

      expect(input).toBeInTheDocument();
    })

    // select Input input element by type attribute 
    test('will have password type', ()=>{
      render(SignUpPage);
      const input = screen.getByLabelText('Repeat Password')

      expect(input.type).toBe('password');
    })

    // select Button by accessibility role
    test('will have Sign Up button', ()=>{
      render(SignUpPage);
      const button = screen.getByRole('button', {name: 'Sign Up'});

      expect(button).toBeInTheDocument();
    })

    // select Button by accessibility role and checking for disabled
    test('will have Sign Up button', ()=>{
      render(SignUpPage);
      const button = screen.getByRole('button', {name: 'Sign Up'});

      expect(button).toBeDisabled();
    })
  
  });

  describe('Form Interaction', () => {
    afterEach(cleanup);

    //testing click event on button
    test('will enable Sign Up button when Password ad Repeated Password are the same', async ()=>{
      render(SignUpPage);
      const passwordInput = screen.getByLabelText('Password')
      const repeatPasswordInput = screen.getByLabelText('Repeat Password');
      const button = screen.getByRole('button', {name: 'Sign Up'});

      await userEvent.type(passwordInput, 'testPassword');
      await userEvent.type(repeatPasswordInput, 'testPassword');
      expect(button).toBeEnabled();
    })

  })

})
