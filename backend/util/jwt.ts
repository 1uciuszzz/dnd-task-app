import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtKey = process.env.JWT_KEY;

export const genToken: (payload: any) => string = (payload: any) => {
  return jwt.sign(payload, jwtKey as string, { expiresIn: "1d" });
};

export const verifyToken = (token: string) => {
  const result = {
    payload: {
      uid: "",
    },
    status: true,
  };
  try {
    result.payload = jwt.verify(token, jwtKey as string) as { uid: string };
  } catch (e) {
    result.status = false;
  }
  return result;
};
