import React from 'react';
import { render, screen } from '@testing-library/react';
import MarkdownEditor from 'components/MarkdownEditor';

test('that markdown editor is loading', () => {
  render(<MarkdownEditor />);
  const linkElement = screen.getByTestId(/markdown-editor/i);
  expect(linkElement).toBeInTheDocument();
});
