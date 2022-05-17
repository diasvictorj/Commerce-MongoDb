db.produtos.find({ $nor: [{ nome: "McChiken" }, { nome: "Big Mac" }] }, 
    { nome: 1, curtidas: 1, vendidos: 1, _id: 0 });
