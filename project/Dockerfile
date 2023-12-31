# Stage 1: Build the application
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy the rest of your application's code
COPY . .

# Build your application if necessary
RUN yarn build

# Stage 2: Run the application
FROM node:20-alpine

# Create a non-root user and set the working directory
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
WORKDIR /app

# Copy only the production dependencies and built files from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 8080

# Environment variables
# Replace these with your specific environment variables
ENV NODE_ENV=production \
    MODE=api \
    PORT=8080

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD node dist/utils/healthcheck.js

# Specify the command to run your app
CMD ["node", "dist/index.js"]

