const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller');

router.get('/maravilhosas', controller.getMaravilhosas);
router.get('/maravilhosas/:id', controller.getMaravilhosaById);
router.post('/maravilhosas', controller.adicionaMaravilhosa)
router.put('/maravilhosas/:id', controller.atualizaMaravilhosa)
router.delete('/maravilhosas/:id', controller.deleteMaravilhosa)

module.exports = router