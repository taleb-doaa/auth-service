import User from "../models/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/token.js";

export const register = async ({ email, password }) => {
  const user = await User.create({ email, password });
  return user;
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Invalid credentials");

  const valid = await user.checkPassword(password);
  if (!valid) throw new Error("Invalid credentials");

  return {
    accessToken: generateAccessToken({ id: user._id }),
    refreshToken: generateRefreshToken({ id: user._id }),
  };
};
