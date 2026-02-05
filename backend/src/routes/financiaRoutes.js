// src/routes/financiaRoutes.js
const express = require('express');
const router = express.Router();

const AccountController = require('../controllers/AccountController');
const TransactionController = require('../controllers/TransactionController');
const CategoryController = require('../controllers/CategoryController');
const BudgetController = require('../controllers/BudgetController');

const { validateBody } = require('../shared/middleware/validationMiddleware');
// const { authMiddleware } = require('../shared/auth/authMiddleware');  // TODO: Agregar auth

const { createAccountSchema, updateAccountSchema } = require('../schemas/accountSchemas');
const { createTransactionSchema, updateTransactionSchema } = require('../schemas/transactionSchemas');
const { createCategorySchema, updateCategorySchema } = require('../schemas/categorySchemas');
const { createBudgetSchema, updateBudgetSchema } = require('../schemas/budgetSchemas');

// ============================================
// ACCOUNTS
// ============================================
router.get('/accounts', AccountController.getAll);
router.get('/accounts/:id', AccountController.getById);
router.get('/accounts/:id/balance', AccountController.getBalance);
router.post('/accounts', validateBody(createAccountSchema), AccountController.create);
router.put('/accounts/:id', validateBody(updateAccountSchema), AccountController.update);
router.delete('/accounts/:id', AccountController.delete);

// ============================================
// TRANSACTIONS
// ============================================
router.get('/transactions', TransactionController.getAll);
router.get('/transactions/stats', TransactionController.getStats);
router.get('/transactions/:id', TransactionController.getById);
router.post('/transactions', validateBody(createTransactionSchema), TransactionController.create);
router.put('/transactions/:id', validateBody(updateTransactionSchema), TransactionController.update);
router.delete('/transactions/:id', TransactionController.delete);

// ============================================
// CATEGORIES
// ============================================
router.get('/categories', CategoryController.getAll);
router.get('/categories/tree', CategoryController.getTree);
router.get('/categories/:id', CategoryController.getById);
router.post('/categories', validateBody(createCategorySchema), CategoryController.create);
router.put('/categories/:id', validateBody(updateCategorySchema), CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);

// ============================================
// BUDGETS
// ============================================
router.get('/budgets', BudgetController.getAll);
router.get('/budgets/:id', BudgetController.getById);
router.post('/budgets', validateBody(createBudgetSchema), BudgetController.create);
router.put('/budgets/:id', validateBody(updateBudgetSchema), BudgetController.update);
router.delete('/budgets/:id', BudgetController.delete);

module.exports = router;
