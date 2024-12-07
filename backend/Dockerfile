# Use a Node.js image for the backend
FROM node:22

# Set working directory
WORKDIR /src/

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the backend port
EXPOSE 4000

# Run the backend server
CMD ["npm", "start"]
