const repo = require('../repositories/study-plan-repository')

module.exports = {
    getAll: async function () {
        const subjects = await repo.findAll()
        return subjects
    }
}