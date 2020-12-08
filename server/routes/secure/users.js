const router = require('express').Router(),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
    logoutAllDevices,
    deleteUser,
  } = require('../../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', updateCurrentUser);
router.post('/logout', logoutUser);
router.post('/logoutAll', logoutAllDevices);
router.delete('/', deleteUser);

module.exports = router;
