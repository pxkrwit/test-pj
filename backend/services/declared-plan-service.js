const repo = require('../repositories/declared-plan-repository')
const errResp = require('../errors/error-response')

module.exports = {
    getById: async function (id) {
        const declaredPlan = await repo.findById(id)
        if (!declaredPlan) {
            throw errResp.notFoundError(id, 'declared plan')
        }
        return declaredPlan
    },
    create: async function({studentId, planId}){ {
        const checkDuplicate = await repo.findById(studentId)
        if (checkDuplicate) {
            throw errResp.duplicateItem(studentId, "declaration")
        }

        const timeStamp = new Date().toISOString()

        return await repo.create({studentId, planId, createdAt: timeStamp, updatedAt: timeStamp})
        }
    }
}