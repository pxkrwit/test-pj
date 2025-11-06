var service = require('../services/study-plan-service')

module.exports = {
  list: async function (req, res) {
        try {
            const subjects = await service.getAll();
            res.json(subjects);
        } catch (e) {
            const status = e.status || 500;
            res.status(status).json(error(req, e.code, e.message, status));
        }
    }
}