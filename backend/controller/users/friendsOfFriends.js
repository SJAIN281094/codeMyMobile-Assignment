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
    const friendDetails = await FriendDetails(collectionOffriendIds);
    const friendOfFriendIds = await friendOfFriendsIds(collectionOffriendIds);
    const friendOfFriendDetails = await friendOfFriendsDetails(
      friendOfFriendIds
    );
    const mergedData = await mergeFriendWithFriends(
      friendDetails,
      friendOfFriendDetails
    );

    return res.status(200).send({
      data: { user: { ...isUserExist, friends: mergedData } },
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

async function friendOfFriendsIds(friendsIds) {
  const friendOfFriends = await Friends.findAll({
    where: {
      [Op.or]: {
        userOneId: {
          [Op.in]: friendsIds,
        },
        userTwoId: {
          [Op.in]: friendsIds,
        },
      },
    },
  });

  const friendsObj = Object.create({});

  friendsIds.forEach((id) => {
    friendsObj[`${id}`] = [];
  });

  friendOfFriends.forEach((friend) => {
    if (friendsObj[friend.userOneId]) {
      friendsObj[friend.userOneId].push(friend.userTwoId);
    }

    if (friendsObj[friend.userTwoId]) {
      friendsObj[friend.userTwoId].push(friend.userOneId);
    }
  });

  return friendsObj;
}

async function friendOfFriendsDetails(friendsOfFriendsIds) {
  for (const [key, values] of Object.entries(friendsOfFriendsIds)) {
    friendsOfFriendsIds[`${key}`] = await Users.findAll({
      where: {
        id: {
          [Op.in]: values,
        },
      },
    });
  }
  return friendsOfFriendsIds;
}

async function mergeFriendWithFriends(friends, friendOfFriend) {
  const result = friends.map((friend) => {
    return {
      ...friend,
      friends: friendOfFriend[`${friend.id}`],
    };
  });

  return result;
}
