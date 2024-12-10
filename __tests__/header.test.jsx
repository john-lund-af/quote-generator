import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';;
import Header from '../components/Header';

jest.mock('../components/Navbar', () => {
  const Navbar = () => <nav>Mock Navbar</nav>;
  return Navbar;
});

describe('Header Component', () => {

  test('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders the image with correct attributes', () => {
    render(<Header />);
    const image = screen.getByAltText('Quotation mark');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('width', '50');
    expect(image).toHaveAttribute('height', '50');
  });

  test('renders the Navbar component', () => {
    render(<Header />);
    const navbar = screen.getByText('Mock Navbar');
    expect(navbar).toBeInTheDocument();
  });
})

