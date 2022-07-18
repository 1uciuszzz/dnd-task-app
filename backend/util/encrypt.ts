import { createHmac } from "crypto";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export const encryptPassword: (rawPassword: string) => string = (
  rawPassword: string
) => {
  return createHmac("sha256", secretKey as string)
    .update(rawPassword)
    .digest("base64");
};

export const verifyPassword: (
  rawPassword: string,
  encryptedPassword: string
) => boolean = (rawPassword: string, encryptedPassword: string) => {
  return encryptedPassword === encryptPassword(rawPassword);
};
