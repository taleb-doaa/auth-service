import * as authService from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    await authService.register(req.body);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const tokens = await authService.login(req.body);
    res.json(tokens);
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid credentials" });
  }
};
