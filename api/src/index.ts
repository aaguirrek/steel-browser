import buildFastifyServer from "./build-server";
import { loggingConfig } from "./config";

const HOST =  "161.132.50.192";
const PORT =  3164;

export const server = buildFastifyServer({
  logger: loggingConfig[process.env.NODE_ENV ?? "production"] ?? true,
  disableRequestLogging: false,
  trustProxy: true,
  bodyLimit: 100000000,
}).then(async server => server.listen({ port: PORT, host: HOST }, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
);
