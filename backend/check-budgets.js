const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkBudgets() {
    try {
        const budgets = await prisma.mantia_Budget.findMany({
            include: {
                category: true
            }
        });
        console.log('Total budgets:', budgets.length);
        console.log(JSON.stringify(budgets, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
        console.error(error.stack);
    } finally {
        await prisma.$disconnect();
    }
}

checkBudgets();
