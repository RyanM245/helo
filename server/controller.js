const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const user = await db.check_user(username);
    // console.log(user)
    if (!user[0]) {
      return res.status(401).send("Incorrect credentials");
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password);
      if (authenticated) {
        req.session.user = {
          userId: user[0].user_id,
          username: user[0].username,
          profilePic: user[0].profile_pic,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("Username or Password wrong");
      }
    }
  },
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password, profilePic } = req.body;
    const existingUser = await db.check_user(username);
    if (existingUser[0]) {
      return res.status(409).send("User already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await db.create_user([username, hash, profilePic]);
    req.session.user = {
      userId: newUser[0].user_id,
      username: newUser[0].username,
      profilePic: newUser[0].profile_pic,
    };
    res.status(200).send(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(404).send(`Get User`);
    }
  },
};
