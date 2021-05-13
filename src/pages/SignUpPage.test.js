import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import SignUpPage from './SignUpPage.svelte';

describe('SignUpPage component', () => {

  test('', ()=>{
    render(SignUpPage);
    const header = screen.getByRole('heading', {name: 'Sign Up'});

    expect(header).toBeInTheDocument();
  })

})
