const { Users, Friends } = require('../../models');
const { CustomError } = require('../../helper');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
  try {
    const { limit = 50, skip = 0 } = req.query;
    const { userId } = req.params;

    const isUserExist = await Users.findOne({
      where: { id: userId },
    });

    if (!isUserExist) {
      throw new CustomError('Invalid User Id', 403);
    }

    const collectionOffriendIds = await listOfFriendIds({
      limit,
      skip,
      userId,
    });
    const friends = await FriendDetails(collectionOffriendIds);
    const count = await friendsCount(userId);

    return res.status(200).send({
      data: { user: { ...isUserExist, friends }, count },
    });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ errors: [{ message: err.message }] });
  }
};

async function listOfFriendIds({ limit, skip, userId }) {
  const friends = await Friends.findAll({
    where: {
      [Op.or]: {
        userOneId: userId,
        userTwoId: userId,
      },
    },
    offset: Number(skip),
    limit: Number(limit),
  });

  const collectionOfFriendIds = friends.map((friend) => {
    if (friend.userOneId === userId) {
      return friend.userTwoId;
    }
    return friend.userOneId;
  });
  return collectionOfFriendIds;
}

async function FriendDetails(friendIds) {
  const friends = await Users.findAll({
    where: {
      id: {
        [Op.in]: friendIds,
      },
    },
  });
  return friends;
}

async function friendsCount(userId) {
  const count = await Friends.count({
    where: {
      [Op.or]: {
        userOneId: userId,
        userTwoId: userId,
      },
    },
  });
  return count;
}
