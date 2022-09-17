class Api {
   constructor() {
      this.arrayProducts = []
   }

   getAllProducts() {
      return this.arrayProducts;
   }

   getById(id) {
      const find = this.arrayProducts.find((product) => product.id === +id);
      if (!find) {
         return { err: "producto no encontrado" };
      }
      return find;
   }

   postProducts(personaGuardar) {
      if (this.arrayProducts.length === 0) {
         personaGuardar.id = 1;
      }else{
         let lastId = this.arrayProducts[this.arrayProducts.length - 1].id;
         personaGuardar.id = lastId + 1;
      }
      
      this.arrayProducts.push(personaGuardar);
      return this.arrayProducts
   }

   deleteProducts(id){
      const products = this.arrayProducts.filter(product => product.id !== +id)
      this.arrayProducts = [...products]
      return {message: "Producto eliminado"}
   }

   updateProduct(data, id){
      const index = this.arrayProducts.findIndex(product => product.id === +id)
      console.log(index);
      if (index !== -1) {
         data.id = +id
         this.arrayProducts.splice(index,1,data)
         return { message: "Producto editado" };   
      }else{
         return { error: 'producto no encontrado' };   
      }
   }
}

module.exports = {Api}