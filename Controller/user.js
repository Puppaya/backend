const con = require("../config/db");


exports.list = async (req, res) => {
  let sql = "SELECT * FROM users";
  const [UserInfo] = await con.query(sql);
  res.send(UserInfo);
};

exports.read = async (req, res) => {
  const id = req.params.id;
  let sql = "SELECT * FROM users WHERE id = ?";

  const [SingleUser] = await con.query(sql, id);
  res.send(SingleUser);
};

