import {render, screen} from '@testing-library/react';
import PuzzleAnswer, {USER_GUIDE_KEYWORD} from './PuzzleAnswer';

it('Describe paragraph must be exists in the document', () => {
    render(<PuzzleAnswer />);
    const p = screen.getByText(new RegExp(USER_GUIDE_KEYWORD));
    expect(p).toBeInTheDocument();
});
