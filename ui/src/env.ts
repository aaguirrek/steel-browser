import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().default("http://161.132.50.192:3164"),
  VITE_WS_URL: z.string().default("ws://161.132.50.192:3164"),
  VITE_OPENAPI_URL: z
    .string()
    .default("http://161.132.50.192:3164/documentation/json"),
});

export const env = envSchema.parse(import.meta.env);
