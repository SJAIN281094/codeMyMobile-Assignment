const { Users } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { limit = 20, skip = 0 } = req.query;

    const users = await listOfUsers({ limit, skip });
    const count = await userCount();

    return res.status(200).send({
      data: { users, count },
    });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ errors: [{ message: err.message }] });
  }
};

async function listOfUsers({ limit, skip }) {
  const users = await Users.findAll({
    offset: Number(skip),
    limit: Number(limit),
  });
  return users;
}

async function userCount() {
  const count = await Users.count({});
  return count;
}
