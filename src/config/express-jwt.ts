import { Request } from "express";
import { expressjwt as jwt } from "express-jwt"

const getTokenFromHeaders = (req: Request) => {
  const { headers: { authorization } } = req;

  if(authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }
  return null;
};

export const auth = {
  required: jwt({
    secret: 'secret',
    algorithms: ["HS256"],
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: 'secret',
    algorithms: ["HS256"],
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

