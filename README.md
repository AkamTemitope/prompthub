<h1><img src="public/assets/images/logo.svg" height=40px width=40px/> PromptHub</h1>


PromptHub is an open-source AI prompting tool for the modern world, designed to discover, create, and share creative prompts.

## Features

- **Prompt Creating, Editing, and Deleting**: Users can create, edit, and delete prompts according to their preferences.
- **Prompt Discovery**: Browse and explore a variety of creative prompts shared by the community.
- **Search Functionality**: Easily search for specific prompts or keywords, or tags within the platform.

## Technologies Used

- Next.js
- Tailwind CSS
- MongoDB
- NextAuth

## Getting Started

To get a local copy of PromptHub up and running, follow these steps:

1. Clone the repository
2. Navigate to the project directory: `cd PromptHub`
3. Install the dependencies: `npm install`
4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables:
     - `GOOGLE_CLIENT_ID` - Google OAuth client ID
     - `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
     - `MONGODB_URI` - URI for your MongoDB database
     - `NEXTAUTH_URL` - URL for your Next.js application
     - `NEXTAUTH_URL_INTERNAL` - Internal URL for NextAuth
     - `NEXTAUTH_SECRET` - Secret key for NextAuth
5. Start the development server: `npm run dev`
6. Access PromptHub in your browser at `http://localhost:3000`

<img src="https://i.postimg.cc/pr6hnQKX/prompthub.pnghttps://i.postimg.cc/pr6hnQKX/prompthub.png" width=500px />
visit <a href="https://dub.sh/prompthub"> PromptHub</a>
