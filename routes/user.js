const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const passport = require("passport");
const userController = require("../controllers/userController");

router.post("/add-user", userController.register);
router.post("/login-user", userController.login);
router.get(
  "/welcome",
  passport.authenticate("jwt", { session: false }),
  userController.welcomeUser
);

router.post(
  "/add-order",
  passport.authenticate("jwt", { session: false }),
  userController.CreateOrder
);

router.get("/", userController.GetOrder);
router.get("/get-order/:id", userController.GetOrderById);
router.patch(
  "/update-order/:id",
  passport.authenticate("jwt", { session: false }),
  userController.UpdateOrder
);
router.delete(
  "/delete-order/:id",
  passport.authenticate("jwt", { session: false }),
  userController.DeleteOrder
);

module.exports = router;
