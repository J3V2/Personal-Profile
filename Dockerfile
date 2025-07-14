FROM nginx:alpine

# 1. Remove the default nginx static assets (optional, but clean)
RUN rm -rf /usr/share/nginx/html/*

# 2. Copy your entire repo (or just the static folders) into Nginx’s serve directory
#    Assuming your Dockerfile sits at the repo root alongside README.md
COPY . /usr/share/nginx/html

# 3. (Optional) Copy a custom nginx.conf if you need rewrites or headers
#    COPY nginx.conf /etc/nginx/nginx.conf

# 4. Expose port 80 so Docker maps it to the host
EXPOSE 80

# 5. Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
