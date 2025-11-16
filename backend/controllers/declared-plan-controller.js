const service = require('../services/declared-plan-service')

module.exports = {
    getById: async function (req, res) {
        try {
            const studentId = req.params.studentId
            const declaredPlan = await service.getById(studentId)
            res.status(200).json(declaredPlan)
        } catch (e) {
            res.status(e.status||500).json(
                {error: e.code, message: e.message, status: e.status});
        }
    },
    create: async function (req, res) {
        try {
            const studentId = req.params.studentId
            const { planId } = req.body
            const register = await service.create({studentId, planId})
            res.status(201).json(register)
        } catch (error) {
            res.status(error.status || 500).json({
            error: error.code,
            message: error.message
            })
        }
    }

}