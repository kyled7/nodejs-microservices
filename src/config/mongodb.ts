const mongodbProtocol = process.env.MONGODB_PROTOCOL || 'mongodb';
const userNamePwd = process.env.MONGODB_USERNAME ? `${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@` : '';
const port = process.env.MONGODB_PORT || '27017';

let mongodbUrl = `${mongodbProtocol}://${userNamePwd}${process.env.MONGODB_HOSTS}:${port}`;

mongodbUrl += `/${process.env.MONGODB_NAME}?authSource=admin&retryWrites=true`;
if (process.env.DB_REPLICA_SET) {
  mongodbUrl += `&replicaSet=${process.env.MONGODB_REPLICA_SET}`;
}

export const CONNECTION_URL = mongodbUrl;