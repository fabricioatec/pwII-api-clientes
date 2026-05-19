const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");

// GET /]clientes
router.get("/", clienteController.listarClientes);

//GET /clientes/ :id
router.get("/:id", clienteController.buscarClientePorId)

module.exports = router;