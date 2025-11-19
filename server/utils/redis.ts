import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const getRedisUrl = () => {
  const url = process.env.REDIS_URL;
  if (!url) throw new Error("Redis connection failed: REDIS_URL missing");
  console.log("Redis Connected to", url);
  return url;
};

export const redis = new Redis(getRedisUrl(), {
  maxRetriesPerRequest: 0, // disables the error
});
