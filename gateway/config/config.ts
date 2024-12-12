import { config } from "dotenv";

const configFile = `./.env`;
config({ path: configFile });

const {
  AUTH_SERVICE,
  USER_SERVICE,
  POST_SERVICE,
  FEED_SERVICE,
  LIKE_SERVICE,
  COMMENT_SERVICE,
  CHAT_SERVICE,
  NOTIFICATION_SERVICE,
} = process.env;

export default {
  AUTH_SERVICE,
  USER_SERVICE,
  POST_SERVICE,
  FEED_SERVICE,
  LIKE_SERVICE,
  COMMENT_SERVICE,
  CHAT_SERVICE,
  NOTIFICATION_SERVICE,
};
