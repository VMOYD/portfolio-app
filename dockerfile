# Stage 1: Build the React app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app (the production build goes into the "dist" folder)
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Copy the production build from the builder stage to Nginx's public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Copy a custom Nginx config to handle client-side routing (fallback to index.html)
# Create a file named 'nginx.conf' in your project root with the following content:
#
#   server {
#     listen       80;
#     server_name  localhost;
#
#     location / {
#       root   /usr/share/nginx/html;
#       try_files $uri $uri/ /index.html;
#     }
#   }
#
# Then uncomment the next line:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
