import jwt from 'jsonwebtoken';
import { jwtConfig } from "../configs/jwt.config";
import bcrypt from 'bcrypt';

export const generateAccessToken = (payload: any) => {
  return jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

export const generateRefreshToken = (payload: any) => {
  return jwt.sign(payload, jwtConfig.refreshSecret, { expiresIn: jwtConfig.refreshExpiresIn });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};

export const hashPassword = (password: string) => {
  const saltRounds = 10;
  const salt = bcrypt.genSalt(saltRounds);
  return bcrypt.hashSync(password, saltRounds);
};

export const comparePassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}