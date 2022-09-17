const express = require("express");
const { Router } = express;
const router = Router();

const {Api} = require("../api")

const firstProduct = new Api()

router.get("/", (req, res) => {
   res.json(firstProduct.getAllProducts())
});

router.get("/:id", (req, res) => {
   const {id} = req.params
   
   res.json(firstProduct.getById(id))
});

router.post("/", (req, res) => {
   const personaGuardar = req.body;
   const dataProducts = firstProduct.postProducts(personaGuardar);
   res.json({ message: "Producto guardado", data: dataProducts });
});

router.delete("/:id", (req, res) =>{
   const {id} = req.params
   res.json(firstProduct.deleteProducts(id))

})

router.put("/:id", (req, res) => {
   const {id} = req.params
   const personaGuardar = req.body;
   const dataProducts = firstProduct.updateProduct(personaGuardar, id);
   res.json(dataProducts);
});

module.exports = router;
