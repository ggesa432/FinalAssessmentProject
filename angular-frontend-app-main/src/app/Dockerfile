# Use Node.js as the base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular app code to the container
COPY . .

# Expose the port for Angular
EXPOSE 4200

# Start the Angular development server
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
