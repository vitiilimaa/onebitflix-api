import jwt from "jsonwebtoken";
import { StringValue } from "ms";

export const jwtService = {
  signToken: (
    payload: string | object | Buffer,
    expiration: StringValue | number
  ) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: expiration,
    });
  },

  verifyToken: (token: string, callbackfn: jwt.VerifyCallback) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY as string, callbackfn);
  },
};
