const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  createProdcut,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  delteProduct,
  uploadImage,
} = require("../controllers/productController");

const { getSingleProductReviews } = require("../controllers/reviewController");

router
  .route("/")
  .post([authenticateUser, authorizePermissions("admin")], createProdcut)
  .get(getAllProducts);
router
  .route("/uploadImage")
  .post([authenticateUser, authorizePermissions("admin")], uploadImage);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizePermissions("admin")], updateProduct)
  .delete([authenticateUser, authorizePermissions("admin")], delteProduct);
router.route("/:id/reviews").get(getSingleProductReviews);

module.exports = router;
