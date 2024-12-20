import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

export const generateToken = (payload: object, expiresIn = "1d") => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};
