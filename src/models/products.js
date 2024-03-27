let nextProductId = 1;

const product = {
    products: [
        {
            id: nextProductId++,
            nombre: 'Espárragos blancos',
            precio: 37.50,
            descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico.'
        },
        {
            id: nextProductId++,
            nombre: 'Mousse de arroz',
            precio: 27.50,
            descripcion: 'Mousse de arroz con leche y aroma de azahar.'
        },
        {
            id: nextProductId++,
            nombre: 'Risotto de berenjena',
            precio: 47.00,
            descripcion: 'Risotto de berenjena y queso de cabra.'
        },
        {
            id: nextProductId++,
            nombre: 'Carpaccio fresco',
            precio: 65.50,
            descripcion: ' Entrada Carpaccio de salmón con cítricos.'
        }

    ],

    getAll: function(){
        return this.products;
    },
    getOneBy: function(){
        return this.products.find(product => product.id == productId);
    }

};

module.exports = product;