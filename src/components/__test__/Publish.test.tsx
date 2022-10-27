import React from 'react';
import { render, screen } from '@testing-library/react';
import Publish from 'components/Publish';

jest.mock('@uiw/react-md-editor', () => () => <div></div>);
jest.mock('rehype-sanitize', () => () => <div></div>);

test('Submit to Hashnode button appears', () => {
  render(<Publish content='test content' />);
  const linkElement = screen.getByText('Submit to Hashnode');
  expect(linkElement).toBeInTheDocument();
});

test('Submit to Dev.to button appears', () => {
  render(<Publish content='test content' />);
  const linkElement = screen.getByText('Submit to Dev.to');
  expect(linkElement).toBeInTheDocument();
});

test('Submit to Medium button appears', () => {
  render(<Publish content='test content' />);
  const linkElement = screen.getByText('Submit to Medium');
  expect(linkElement).toBeInTheDocument();
});
