# Use an official bun image as the base image
FROM oven/bun:1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN bun install 
# RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN bun run build

# Start the Next.js application
CMD ["bun", "start"]
