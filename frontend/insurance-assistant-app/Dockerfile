# Use a Node.js image for building the frontend
FROM node:22 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY /package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the production version of the frontend
RUN npm run build

# Use an Nginx image to serve the built frontend
FROM nginx:alpine

EXPOSE 80

# Copy the built frontend to the Nginx web root
COPY --from=build /app/build /usr/share/nginx/html
