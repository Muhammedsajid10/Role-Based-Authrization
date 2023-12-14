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



const welcomeUser = (req, res) => {
  res.json('Welcome User');
};

const welcomeAdmin = (req, res) => {
  res.json("Welcome Admin")
}

module.exports = { welcomeUser, welcomeAdmin };
