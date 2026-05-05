create a new repository on the command line
echo "# Express-Node-React_Project_with_vite-Node_Backend-React" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Darko-beep/Express-Node-React_Project_with_vite-Node_Backend-React.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/Darko-beep/Express-Node-React_Project_with_vite-Node_Backend-React.git
git branch -M main
git push -u origin main

MongoDB & Node Setup with Vite

Prerequisites — verify Node, npm, and MongoDB are installed
Project scaffold — create the client (Vite) and server (Express) folders
File structure — understand how the project is organised
MongoDB connection — wire up Mongoose with a .env config
Mongoose model — define a schema and add API routes
Vite proxy — route /api/* calls to your Express server (no CORS headaches)
Run the stack — fire up both servers and start building
