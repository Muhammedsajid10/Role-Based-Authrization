/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Get a welcome message for admin users.
 *     description: Returns a welcome message for admin users.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Welcome Admin
 *         content:
 *           application/json:
 *             example:
 *               message: Welcome Admin
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get a welcome message for regular users.
 *     description: Returns a welcome message for regular users.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Welcome User
 *         content:
 *           application/json:
 *             example:
 *               message: Welcome User
 */

/**
 * @swagger
 * securityDefinitions:
 *   BearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */
