/**
 * @swagger
 * /users/{userId}/friend-of-friends:
 *  get:
 *    tags:
 *    - "user"
 *    description: Get registered user list
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: userId
 *      in: path
 *      type: string
 *      required: true
 *    responses:
 *      '200':
 *        description: Success
 *        schema:
 *          type: object
 *          properties:
 *            data:
 *              type: object
 *              properties:
 *                user:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                      firstName:
 *                        type: string
 *                      lastName:
 *                        type: string
 *                      avatar:
 *                        type: string
 *                      createdAt:
 *                        type: string
 *                      updatedAt:
 *                        type: string
 *                      friends:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: string
 *                            firstName:
 *                              type: string
 *                            lastName:
 *                              type: string
 *                            avatar:
 *                              type: string
 *                            createdAt:
 *                              type: string
 *                            updatedAt:
 *                              type: string
 *                            friends:
 *                              type: array
 *                              items:
 *                                type: object
 *                                properties:
 *                                  id:
 *                                    type: string
 *                                  firstName:
 *                                    type: string
 *                                  lastName:
 *                                    type: string
 *                                  avatar:
 *                                    type: string
 *                                  createdAt:
 *                                    type: string
 *                                  updatedAt:
 *                                    type: string
 *
 *      '400':
 *        description: Bad Request
 *        schema:
 *          type: object
 *          properties:
 *            errors:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *      '401':
 *        description: Unauthorized
 *        schema:
 *          type: object
 *          properties:
 *            errors:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *      '500':
 *        description: Server Error
 *        schema:
 *          type: object
 *          properties:
 *            errors:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 */
