import React from 'react';
import { render, screen } from '@testing-library/react';
import LayoutComponent from '../Layout.component';

// Mock de react-router-dom
jest.mock('react-router-dom', () => ({
  Outlet: () => <div data-testid="mock-outlet">Mock Outlet</div>,
  Link: ({ children, to }: any) => <a href={to}>{children}</a>,
}));

describe('Components - Layout Component', () => {
  it('should render the title', () => {
    render(<LayoutComponent />);
    expect(screen.getByText('PODCASTER')).toBeInTheDocument();
  });

  it('should render the Outlet', () => {
    render(<LayoutComponent />);
    expect(screen.getByTestId('mock-outlet')).toBeInTheDocument();
  });

  it('should have a link to the home page', () => {
    render(<LayoutComponent />);
    const link = screen.getByRole('link', { name: 'PODCASTER' });
    expect(link).toHaveAttribute('href', '/');
  });
});
