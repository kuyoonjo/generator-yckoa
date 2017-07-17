// MongoDB connection options
export const mongo = {
  options: {
    db: {
      safe: true
    }
  },
  uri: process.env.MONGODB_URI ||
  process.env.MONGOHQ_URL ||
  process.env.OPENSHIFT_MONGODB_DB_URL +
  process.env.OPENSHIFT_APP_NAME ||
  'mongodb://localhost/helloWorld'
}