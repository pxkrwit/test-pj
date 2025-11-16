const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    findById: async function(studentId){
        return await prisma.declared_plans.findUnique({
            where: { studentId }
        })
    },
    create: async function({ studentId, planId, createdAt, updatedAt }){
        return await prisma.declared_plans.create({
            data: {
                studentId, planId,createdAt, updatedAt
            }
        })
    }
}
