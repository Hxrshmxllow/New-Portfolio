# Use a lightweight Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy everything into container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Cloud Run listens on port 8080
ENV PORT=8080
EXPOSE 8080

# Run your Flask app with gunicorn
CMD exec gunicorn --bind :$PORT run:app