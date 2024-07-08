# Running the Application

This guide will walk you through the steps needed to get the application up and running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: The application requires Node.js version 20. If you don't have Node.js installed, download and install it from [the official website](https://nodejs.org/).
- **pnpm** or **npm**: This project uses `pnpm` for package management. If you don't have `pnpm` installed, you can use `npm` as an alternative.

## Installation Steps

1. **Check Node.js Version**: Ensure you are using Node.js version 20. You can check your Node version by running:
   ```bash
   node --version
   ```
   If your version is not 20, you will need to install it or use a version manager like `nvm` to switch versions.

2. **Install Dependencies**: First, you need to install the project's dependencies. Open your terminal and navigate to the project's root directory. Run the following command:

   If you have `pnpm` installed:
   ```bash
   pnpm install
   ```
   If you don't have `pnpm`, use `npm` instead:
   ```bash
   npm install
   ```

3. **Start the Development Server**: Once the dependencies are installed and you've confirmed the correct Node.js version, you can start the development server by running:
   ```bash
   npm run dev
   ```

After running the above command, the development server will start, and you should be able to access the application through the URL provided in the terminal output (usually http://localhost:3333).

## Troubleshooting

- If you encounter any issues related to Node.js versions, consider using a Node version manager like `nvm` to switch between different Node versions easily.
- For any `pnpm` or `npm` related errors during the installation of dependencies, ensure your `pnpm` or `npm` is up to date. You can update `npm` with `npm install -g npm`.

If you follow these steps and still face issues, please reach out for support.