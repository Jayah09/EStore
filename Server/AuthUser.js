const jwt = require("jsonwebtoken");

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await comparePasswords(password, user.password))) {
    const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});
