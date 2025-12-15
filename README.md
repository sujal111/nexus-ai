# Approval AI - Mortgage Comparison Platform

Approval AI is a modern, responsive web application that helps users find and compare mortgage rates from multiple lenders. Built with Next.js, TypeScript, and Tailwind CSS, this platform provides a seamless user experience for homebuyers looking to secure the best mortgage rates.

## Features

- **AI-Powered Mortgage Comparison**: Get personalized mortgage rate comparisons instantly
- **Savings Calculator**: Estimate potential savings with our interactive calculator
- **Responsive Design**: Fully responsive layout that works on all devices
- **Secure & Private**: Bank-level encryption and privacy-first approach
- **One-Form Application**: Fill out a single form to receive multiple loan offers

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/approval-ai.git
   cd approval-ai
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
approval-ai/
├── app/                    # App router pages
│   ├── api/               # API routes
│   ├── components/         # Reusable components
│   ├── styles/            # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static files
│   └── ...
├── package.json
└── README.md
```

## Available Scripts

- `dev`: Start the development server
- `build`: Build the application for production
- `start`: Start the production server
- `lint`: Run ESLint
- `format`: Format code with Prettier

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
NEXT_PUBLIC_API_URL=your_api_url_here
# Add other environment variables as needed
```

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Other Platforms

You can also deploy to other platforms like Netlify, AWS, or your own server. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact us at hello@approvalai.com
