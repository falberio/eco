// backend/prisma/seed-mantia.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedMantia() {
    console.log('🌱 Seeding Mantia data...');

    // 1. Crear categorías
    const categories = await Promise.all([
        prisma.financia_Category.create({
            data: {
                code: 'ALM',
                name: 'Alimentación',
                icon: '🍔',
                color: '#10b981',
                notes: 'Gastos en comida y bebida'
            }
        }),
        prisma.financia_Category.create({
            data: {
                code: 'SERV',
                name: 'Servicios',
                icon: '💡',
                color: '#f59e0b',
                notes: 'Servicios del hogar'
            }
        }),
        prisma.financia_Category.create({
            data: {
                code: 'TRANS',
                name: 'Transporte',
                icon: '🚗',
                color: '#3b82f6',
                notes: 'Transporte y combustible'
            }
        }),
        prisma.financia_Category.create({
            data: {
                code: 'SALUD',
                name: 'Salud',
                icon: '💊',
                color: '#ef4444',
                notes: 'Gastos médicos y salud'
            }
        }),
        prisma.financia_Category.create({
            data: {
                code: 'ENT',
                name: 'Entretenimiento',
                icon: '🎮',
                color: '#8b5cf6',
                notes: 'Ocio y entretenimiento'
            }
        }),
        prisma.financia_Category.create({
            data: {
                code: 'ING',
                name: 'Ingresos',
                icon: '💰',
                color: '#059669',
                notes: 'Ingresos varios'
            }
        })
    ]);

    console.log(`✅ Created ${categories.length} categories`);

    // 2. Crear cuentas
    const cuentaEfectivo = await prisma.financia_Account.create({
        data: {
            code: 'EFE-001',
            name: 'Efectivo Principal',
            type: 'CASH',
            initialBalance: 50000,
            currentBalance: 50000,
            currency: 'ARS',
            icon: '💵',
            color: '#10b981'
        }
    });

    const cuentaBanco = await prisma.financia_Account.create({
        data: {
            code: 'BNC-001',
            name: 'Cuenta Banco Nación',
            type: 'BANK',
            initialBalance: 150000,
            currentBalance: 150000,
            currency: 'ARS',
            icon: '🏦',
            color: '#3b82f6'
        }
    });

    const cuentaTarjeta = await prisma.financia_Account.create({
        data: {
            code: 'TC-001',
            name: 'Tarjeta VISA',
            type: 'CREDIT_CARD',
            initialBalance: 0,
            currentBalance: 0,
            currency: 'ARS',
            icon: '💳',
            color: '#eab308'
        }
    });

    const cuentaMP = await prisma.financia_Account.create({
        data: {
            code: 'MP-001',
            name: 'MercadoPago',
            type: 'DIGITAL',
            initialBalance: 25000,
            currentBalance: 25000,
            currency: 'ARS',
            icon: '📱',
            color: '#06b6d4'
        }
    });

    console.log('✅ Created 4 accounts');

    // 3. Crear algunas transacciones de ejemplo
    const transactions = [];

    // Ingreso inicial
    const ingreso1 = await prisma.financia_Transaction.create({
        data: {
            code: 'TX-001',
            type: 'INCOME',
            toAccountId: cuentaBanco.id,
            amount: 150000,
            categoryId: categories.find(c => c.code === 'ING')?.id,
            description: 'Sueldo enero 2026',
            transactionDate: new Date('2026-01-15')
        }
    });
    transactions.push(ingreso1);

    // Actualizar balance
    await prisma.financia_Account.update({
        where: { id: cuentaBanco.id },
        data: { currentBalance: { increment: 150000 } }
    });

    // Gasto en supermercado
    const gasto1 = await prisma.financia_Transaction.create({
        data: {
            code: 'TX-002',
            type: 'EXPENSE',
            fromAccountId: cuentaTarjeta.id,
            amount: 15000,
            categoryId: categories.find(c => c.code === 'ALM')?.id,
            description: 'Compra supermercado',
            transactionDate: new Date('2026-01-20')
        }
    });
    transactions.push(gasto1);

    await prisma.financia_Account.update({
        where: { id: cuentaTarjeta.id },
        data: { currentBalance: { decrement: 15000 } }
    });

    // Gasto en servicios
    const gasto2 = await prisma.financia_Transaction.create({
        data: {
            code: 'TX-003',
            type: 'EXPENSE',
            fromAccountId: cuentaBanco.id,
            amount: 8000,
            categoryId: categories.find(c => c.code === 'SERV')?.id,
            description: 'Luz y gas',
            transactionDate: new Date('2026-01-22')
        }
    });
    transactions.push(gasto2);

    await prisma.financia_Account.update({
        where: { id: cuentaBanco.id },
        data: { currentBalance: { decrement: 8000 } }
    });

    // Transferencia
    const transfer1 = await prisma.financia_Transaction.create({
        data: {
            code: 'TX-004',
            type: 'TRANSFER',
            fromAccountId: cuentaBanco.id,
            toAccountId: cuentaMP.id,
            amount: 10000,
            description: 'Carga MercadoPago',
            transactionDate: new Date('2026-01-23')
        }
    });
    transactions.push(transfer1);

    await prisma.financia_Account.update({
        where: { id: cuentaBanco.id },
        data: { currentBalance: { decrement: 10000 } }
    });
    await prisma.financia_Account.update({
        where: { id: cuentaMP.id },
        data: { currentBalance: { increment: 10000 } }
    });

    console.log(`✅ Created ${transactions.length} transactions`);

    // 4. Crear presupuestos
    const budget1 = await prisma.financia_Budget.create({
        data: {
            name: 'Presupuesto Alimentación Enero',
            categoryId: categories.find(c => c.code === 'ALM')?.id,
            amount: 40000,
            period: 'MONTHLY',
            startDate: new Date('2026-01-01'),
            endDate: new Date('2026-01-31'),
            alertThreshold: 0.8,
            notes: 'Presupuesto mensual para alimentación'
        }
    });

    const budget2 = await prisma.financia_Budget.create({
        data: {
            name: 'Presupuesto Servicios Enero',
            categoryId: categories.find(c => c.code === 'SERV')?.id,
            amount: 20000,
            period: 'MONTHLY',
            startDate: new Date('2026-01-01'),
            endDate: new Date('2026-01-31'),
            alertThreshold: 0.9,
            notes: 'Presupuesto mensual para servicios'
        }
    });

    console.log('✅ Created 2 budgets');

    // Resumen
    const totalAccounts = await prisma.financia_Account.count();
    const totalCategories = await prisma.financia_Category.count();
    const totalTransactions = await prisma.financia_Transaction.count();
    const totalBudgets = await prisma.financia_Budget.count();

    console.log('\n📊 Mantia Summary:');
    console.log(`   Accounts: ${totalAccounts}`);
    console.log(`   Categories: ${totalCategories}`);
    console.log(`   Transactions: ${totalTransactions}`);
    console.log(`   Budgets: ${totalBudgets}`);
    console.log('');

    return {
        accounts: totalAccounts,
        categories: totalCategories,
        transactions: totalTransactions,
        budgets: totalBudgets
    };
}

// Si se ejecuta directamente
if (require.main === module) {
    seedMantia()
        .then(() => {
            console.log('✅ Mantia seeding completed!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('❌ Error seeding Mantia:', error);
            process.exit(1);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
}

module.exports = { seedMantia };
