import { render, screen} from '@testing-library/react';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom'; 


describe('Navbar Component', () => {

  test('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(<Navbar />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const allQuotesLink = screen.getByRole('link', { name: /all quotes/i });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    expect(allQuotesLink).toBeInTheDocument();
    expect(allQuotesLink).toHaveAttribute('href', '/all-quotes');
  });

})