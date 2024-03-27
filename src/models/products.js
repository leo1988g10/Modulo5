let nextProductId = 1;

const product = {
    products: [
        {
            id: nextProductId++,
            nombre: 'Espárragos blancos',
            precio: 37.50,
            descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico.',
            image: "images/esparragos.png"
        },
        {
            id: nextProductId++,
            nombre: 'Mousse de arroz',
            precio: 27.50,
            descripcion: 'Mousse de arroz con leche y aroma de azahar.',
            image: "images/Mousse-de-arroz-con-leche.jpg"
        },
        {
            id: nextProductId++,
            nombre: 'Risotto de berenjena',
            precio: 47.00,
            descripcion: 'Risotto de berenjena y queso de cabra.',
            image: "images/Risotto-berenjena-queso-cabra.jpg"
        },
        {
            id: nextProductId++,
            nombre: 'Carpaccio fresco',
            precio: 65.50,
            descripcion: ' Entrada Carpaccio de salmón con cítricos.',
            image: "images/Carpaccio-de-salmon.jpg"
        }

    ],

    getAll: function(){
        return this.products;
    },
    getOneBy: function(id){
        return this.products.find(product => product.id == id);
    }

};

module.exports = product;