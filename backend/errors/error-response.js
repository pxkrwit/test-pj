module.exports = {
    notFoundError: function (id, resource) {
        const err = new Error(`No ${resource} found for student with id=${id}.`)
        err.code = `DECLARED_PLAN_NOT_FOUND`
        err.status = 404
        return err
    },
    duplicateItem: function (itemName, resource) {
        const err = new Error(`A ${resource} already exists for this student.`)
        err.code = 'ALREADY_DECLARED'
        err.status = 409
        return err
    }
}