# Quote Generator

Quote Generator is a ReactJS application that displays quotes in a user-friendly interface. The app has two main functionalities: a homepage that features a "Quote of the Day" and an "All Quotes" page for browsing and filtering quotes from a list of authors.

## Features

### Homepage
- **Quote of the Day**: Displays a randomly fetched quote in a styled card.
- **New Random Quote**: A button to fetch and display a new random quote.
- **Copy to Clipboard**: A button to copy the current quote to the clipboard for easy sharing.

### All Quotes Page
- **All Quotes Display**: Lists all quotes fetched from the [dummyjson.com](https://dummyjson.com/) API.
- **Filter by Author**: Allows users to filter the displayed quotes by the authors.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/john-lund-af/quote-generator.git
   cd quote-generator
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

---

## Usage

### Development Server
To run the development server:
```bash
pnpm dev
```
Open your browser and navigate to `http://localhost:3000`.

### Build for Production
To create an optimized production build:
```bash
pnpm run build
```

### Start Production Server
After building the application, you can start the production server:
```bash
pnpm run start
```

### Linting
To run the ESLint checks:
```bash
pnpm run lint
```

### Testing
Run all Jest tests:
```bash
pnpm test
```
Run tests in watch mode:
```bash
pnpm run test:watch
```

---

## Dependencies

The project uses the following dependencies:

- **React**: A library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Axios**: For making HTTP requests to fetch quotes.
- **Font Awesome**: For adding scalable vector icons.
- **TailwindCSS**: For styling the application.

### Development Dependencies
- **Jest**: A JavaScript testing framework.
- **React Testing Library**: For testing React components.
- **TypeScript**: For adding static typing to JavaScript.
- **ESLint**: For maintaining code quality and consistency.

---

## API

This application fetches quotes from the [dummyjson.com](https://dummyjson.com/) API. Ensure you have access to the API for the app to work correctly.

---

## Development Notes

- The project is built with **TypeScript**, ensuring type safety and reducing bugs during development.
- Styling is done using **TailwindCSS**, which enables rapid UI design with utility classes.
- The app is tested with **Jest** and **React Testing Library**.

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your descriptive message here"
   ```
4. Push your changes and submit a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy creating and sharing your favorite quotes with the Quote Generator! 🎉

