FROM node:current-alpine

# Expose port and set work dir
EXPOSE 3000
RUN mkdir -p /home/app
WORKDIR /home/app

# Copy and install node dependencies
COPY . ./
RUN yarn
RUN yarn build

# Start my application
CMD ["yarn", "start"]