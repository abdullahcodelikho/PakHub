# PakHub

A modern real estate platform for Multan, Pakistan, built with Next.js, Tailwind CSS, MongoDB, and Clerk authentication.

## Features
- Browse, search, and filter property listings (rent, sale, offers)
- Interactive map view with property markers
- User authentication (buyers & sellers)
- Add, edit, and delete your own listings
- Contact sellers and schedule visits (in-app messaging)
- User inbox for messages and visit requests
- Responsive, accessible, and branded UI

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- MongoDB & Mongoose
- Clerk (authentication)
- React Leaflet (maps)

## Getting Started
1. **Clone the repo:**
   ```sh
   git clone https://github.com/abdullahcodelikho/PakHub.git
   cd PakHub
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your MongoDB URI, Clerk keys, etc.
   - **Never commit your `.env` file or secrets!**
4. **Run the development server:**
   ```sh
   npm run dev
   ```
5. **Seed the database (optional, for demo data):**
   ```sh
   node seed-listings.js
   ```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---
**Note:** This project does not track or share any sensitive or volatile data. All secrets and credentials must be kept in your local `.env` file, which is excluded from version control.

