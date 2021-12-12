const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

//view routes
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

//api routes
router.use('/api', apiRoutes);

module.exports = router;
