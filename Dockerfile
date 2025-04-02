# Use Node.js as the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight Node.js image to serve the app
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install Express.js
RUN npm install -g serve

# Copy the built React app from the build stage
COPY --from=build /app/build /app/build

# Expose the port
EXPOSE 3000

# Start the React app using serve
CMD ["serve", "-s", "build", "-l", "3000"]
