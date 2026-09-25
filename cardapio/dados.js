/* =====================================================================
   CARDAPIO PADRAO
   Usado quando o cardapio ainda nao foi salvo pelo painel (admin.html)
   e como ponto de partida no botao "Importar cardapio atual".
   Depois de importar, edite os precos pelo painel, nao aqui.
   ===================================================================== */
window.CARDAPIO_PADRAO = {
  categorias: [
    { chave: "cafe", titulo: "Café da manhã", foto: "fotos/cafe.jpg", itens: [
      {"n": "Cafezinho", "p": 3},
      {"n": "Café xícara média", "p": 4},
      {"n": "Café Expresso", "p": 6.9},
      {"n": "Capuccino", "p": 9.9},
      {"n": "Capuccino Alpino", "p": 10.6},
      {"n": "Mocaccino Dois Frades", "p": 9.5},
      {"n": "Achocolatado Dois Frades", "p": 7.9},
      {"n": "Café com Leite xícara média", "p": 4.9},
      {"n": "Pingado", "p": 3},
      {"n": "Chá", "p": 4.5},
      {"n": "Leite (copo)", "p": 3.5}
    ] },
    { chave: "paes", titulo: "Pães", foto: "fotos/paes.jpg", itens: [
      {"n": "Pão francês com manteiga", "p": 3.9},
      {"n": "Pão francês com manteiga na chapa", "p": 4.6},
      {"n": "Pão com Polenguinho", "p": 8.4},
      {"n": "Pão de queijo (100g)", "p": 4.99},
      {"n": "Pão com requeijão na chapa", "p": 7.9}
    ] },
    { chave: "salgfritos", titulo: "Salgados fritos", foto: "fotos/salgados_fritos.jpg", itens: [
      {"n": "Coxinha", "p": 7.25},
      {"n": "Coxinha com Catupiry", "p": 7.25, "tag": "Mais vendido"},
      {"n": "Cigarrete de queijo e presunto", "p": 9},
      {"n": "Enroladinho de salsicha", "p": 7.25},
      {"n": "Rissole de carne ou queijo e presunto", "p": 7.25},
      {"n": "Bolinho de aipim", "p": 7.25},
      {"n": "Quibe", "p": 9},
      {"n": "Pastelzinho 100g", "p": 5.99, "tag": "Mais vendido"},
      {"n": "Salgadinho sortidos 100g", "p": 4.99}
    ] },
    { chave: "salgforno", titulo: "Salgados de forno", foto: "fotos/salgados_forno.jpg", itens: [
      {"n": "Hambúrguer de forno", "p": 8.5},
      {"n": "Hambúrguer folheado", "p": 9.5},
      {"n": "Bauru de forno", "p": 9},
      {"n": "Empadinha", "d": "Frango, bacon, calabresa, presunto e requeijão", "p": 7.5},
      {"n": "Pastelão", "p": 8.5},
      {"n": "X-bacon", "p": 8.75},
      {"n": "Joelho", "p": 8.5}
    ] },
    { chave: "sanduiches", titulo: "Sanduíches", foto: "fotos/sanduiches.jpg", itens: [
      {"n": "Peito de peru", "p": 10.9},
      {"n": "Misto quente", "p": 11.9},
      {"n": "Misto quente com ovo", "p": 12.9},
      {"n": "Queijo quente", "d": "Minas, muçarela ou prato", "p": 11.9},
      {"n": "Queijo quente com ovo", "p": 12.9},
      {"n": "Presunto", "p": 9.4},
      {"n": "Queijo frio", "p": 10.9},
      {"n": "Mortadela", "p": 8.9},
      {"n": "Minas com peito de peru", "p": 12.9},
      {"n": "Pão com ovo", "p": 6},
      {"n": "Natural", "p": 12.9}
    ] },
    { chave: "tradicao", titulo: "Sanduíches Tradição", foto: "fotos/tradicao.jpg", itens: [
      {"n": "Tradição 001", "d": "Pão francês, ovo, maionese e bacon", "p": 12.9},
      {"n": "Tradição 002", "d": "Pão francês, ovo, maionese e queijo", "p": 12.9},
      {"n": "Tradição 004", "d": "Pão francês, cheddar e hambúrguer", "p": 12.9},
      {"n": "Tradição 005", "d": "Pão francês, salada, maionese, queijo e hambúrguer", "p": 12.9},
      {"n": "Tradição 006", "d": "Pão francês, ovo, salsicha, maionese, cebola e tomate", "p": 12.9},
      {"n": "Pão com Linguiça", "d": "Pão francês, linguiça, Polenguinho e cebola", "p": 17.9},
      {"n": "Pão com Linguiça 2", "d": "Linguiça, requeijão, queijo prato, ovo e cebola", "p": 19.9},
      {"n": "Super Tradição", "d": "Pão francês, hambúrguer, maionese, ovo, bacon, queijo e presunto", "p": 19.9},
      {"n": "Bauru Tradição", "d": "Misto aberto, tiras de filé, ovo, batata palha e salada", "p": 35.5},
      {"n": "Bife no pão com salada", "d": "Pão francês, tiras de filé e salada", "p": 20.9},
      {"n": "Bife no pão completo", "d": "Pão francês, tiras de filé, queijo, presunto, ovo, maionese e bacon", "p": 25.9},
      {"n": "Bife no pão completo duplo", "d": "2 pães, tiras de filé, queijo, presunto, ovo, maionese e bacon", "p": 33.9},
      {"n": "Filé de frango", "d": "Pão francês, tiras de frango, queijo prato e salada", "p": 18.9}
    ] },
    { chave: "hamburguer", titulo: "Hambúrguer de chapa", foto: "fotos/hamburguer.jpg", itens: [
      {"n": "Hambúrguer", "d": "Pão, carne e salada", "p": 10.9},
      {"n": "Cheeseburger", "d": "Pão, carne, queijo e salada", "p": 14.5},
      {"n": "Eggburguer", "d": "Pão, carne, ovo e salada", "p": 13.9},
      {"n": "Eggcheeseburguer", "d": "Pão, carne, queijo, ovo e salada", "p": 15.9},
      {"n": "Cheesebacon", "d": "Pão, carne, queijo, bacon e salada", "p": 17.6},
      {"n": "X-tudo", "d": "Pão, carne, queijo, presunto, ovo, bacon e salada", "p": 19.9},
      {"n": "X-calabresa", "d": "Pão, carne, calabresa, cheddar e salada", "p": 18}
    ] },
    { chave: "omeletes", titulo: "Omeletes, tapiocas e crepiocas", foto: "fotos/omeletes.jpg", itens: [
      {"n": "Trio", "d": "Com três complementos", "p": 21.9, "limite": 3},
      {"n": "Duo", "d": "Com dois complementos", "p": 20.9, "limite": 2},
      {"n": "Um", "d": "Com um complemento", "p": 19.9, "limite": 1}
    ] },
    { chave: "bebidas", titulo: "Bebidas", foto: "fotos/bebidas.jpg", itens: [
      {"n": "Limonada", "p": 6.9},
      {"n": "Limonada Suíça", "p": 8.9},
      {"n": "Suco de Laranja 300ml", "p": 9.9},
      {"n": "Suco de Laranja 200ml", "p": 8.5},
      {"n": "Suco de Laranja com Mamão", "p": 12.5},
      {"n": "Vitamina Mista", "d": "Mamão, maçã, banana, aveia e beterraba", "p": 10.9},
      {"n": "Água mineral", "p": 2.5},
      {"n": "Água com gás", "p": 3.5},
      {"n": "Coca-Cola lata 350ml", "p": 6.5},
      {"n": "Coca-Cola Zero lata 350ml", "p": 6.5},
      {"n": "Fanta Laranja lata 350ml", "p": 6.5},
      {"n": "Fanta Uva lata 350ml", "p": 6.5},
      {"n": "Fanta Guaraná lata 350ml", "p": 6.5},
      {"n": "Guaraná Antarctica lata 350ml", "p": 6.5},
      {"n": "Guaraná Antarctica Zero lata 350ml", "p": 6.5},
      {"n": "Sprite lata 350ml", "p": 6.5},
      {"n": "Pepsi lata 350ml", "p": 6.5},
      {"n": "Pepsi Black lata 350ml", "p": 6.5},
      {"n": "Fanta Laranja Zero 600ml", "p": 8},
      {"n": "Fanta Uva 600ml", "p": 8},
      {"n": "Fanta Laranja 600ml", "p": 8},
      {"n": "Fanta Guaraná 600ml", "p": 8},
      {"n": "Sprite 600ml", "p": 8},
      {"n": "Coca-Cola 600ml", "p": 8},
      {"n": "Coca-Cola Zero 600ml", "p": 8},
      {"n": "Coca-Cola 2L", "p": 13.5},
      {"n": "Coca-Cola Zero 2L", "p": 13.5},
      {"n": "H2O 500ml", "d": "Comum ou limoneto", "p": 7},
      {"n": "H2O 1,5L", "d": "Comum ou limoneto", "p": 11.5}
    ] },
    { chave: "sobremesas", titulo: "Sobremesas", foto: "fotos/sobremesas.jpg", itens: [
      {"n": "Pudim Pequeno", "p": 6},
      {"n": "Pudim Fatia 100g", "p": 3.5},
      {"n": "Cuz cuz", "p": 7.5},
      {"n": "Fatia de bolo", "p": 10.95},
      {"n": "Brownie", "p": 13},
      {"n": "Torta doce (fatia)", "p": 9.95},
      {"n": "Tortalete", "p": 7.5},
      {"n": "Bomba recheada", "p": 6.8},
      {"n": "Donuts", "p": 5.9},
      {"n": "Pão de mel", "p": 9.9},
      {"n": "Quindim", "p": 4},
      {"n": "Sonho", "p": 3.5},
      {"n": "Mil folhas", "p": 7.2},
      {"n": "Palha Italiana 100g", "p": 4.1},
      {"n": "Brigadeiro", "p": 4},
      {"n": "Beijinho", "p": 4},
      {"n": "Cajuzinho", "p": 4},
      {"n": "Pavê 100g", "p": 3.89}
    ] }
  ],
  adicionais: [
    {"n": "Queijo", "p": 4},
    {"n": "Presunto", "p": 4},
    {"n": "Peito de peru", "p": 4},
    {"n": "Cheddar", "p": 4},
    {"n": "Ovo", "p": 2.75},
    {"n": "Carne de hambúrguer", "p": 4},
    {"n": "Bacon", "p": 4},
    {"n": "Salada", "p": 1}
  ]
};
