var service = require('../services/study-plan-service')


module.exports = {
  list: async function (req, res) {
        try {
            const subjects = await service.getAll();
            res.status(200).json(subjects);
        } catch (e) {
            const status = e.status || 500;
            res.status(status);
        }
    }
}