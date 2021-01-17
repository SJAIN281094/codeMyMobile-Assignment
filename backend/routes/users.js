const express = require('express');
const router = express.Router();
const { listOfUsers, listOfUserFriends, friendsOfFriends } = require('../controller/users');
const { header } = require('express-validator');
const { ValidateAndSanitize } = require('../helper');

/* eslint-disable */
router.get(
  '/',
  [
    header(['Accept'])
      .exists({ checkFalsy: true })
      .withMessage('Content Type header is missing'),
  ],
  (req, res, next) => {
    ValidateAndSanitize(req, res, next);
  },
  listOfUsers
);

router.get(
  '/:userId/friends',
  [
    header(['Accept'])
      .exists({ checkFalsy: true })
      .withMessage('Content Type header is missing'),
  ],
  (req, res, next) => {
    ValidateAndSanitize(req, res, next);
  },
  listOfUserFriends
);

router.get(
  '/:userId/friend-of-friends',
  [
    header(['Accept'])
      .exists({ checkFalsy: true })
      .withMessage('ContentType header is missing'),
  ],
  (req, res, next) => {
    ValidateAndSanitize(req, res, next);
  },
  friendsOfFriends
);

module.exports = router;
