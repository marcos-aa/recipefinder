# RecipeFinder

## How to run locally
1. Clone or download this repository

### How to run the server
1. Move into the 'backend' folder with your terminal: `cd backend`
2. Install the dependencies with `npm install`
3. Create a `.env` file and pass a create a variable called `DATABASE_URL` within it. Then assign your database connection URL to this variable.
4. Run the `npm run generate` to setup the PrismaORM client and create database indexes.
5. Run `npm run dev` to activate the development server

### How to run the client
1. Move into the frontend folder: `cd frontend`
2. Install the dependencies with `npm install`
3. Run the client development server with `npm run dev`

## Things to do/improve:
- Finish the implementation of favorites
- Add error handling middleware
- Add schema validation
- Implement debounce to only search when user finishes typing
- Provide fallback when there's no iamge