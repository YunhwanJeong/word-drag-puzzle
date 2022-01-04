import {render, screen} from '@testing-library/react';
import App from './App';
import {USER_GUIDE_KEYWORD} from './PuzzleAnswer';

it('Describe paragraph must be exists in the document', () => {
    render(<App />);
    const p = screen.getByText(new RegExp(USER_GUIDE_KEYWORD));
    expect(p).toBeInTheDocument();
});
