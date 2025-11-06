const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    findAll: async function(){
        return await prisma.studyPlans.findMany();
    }
}
