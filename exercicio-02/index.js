const estadosBrasil = [
    "Acre", "Alagoas", "Amazonas", "Bahia", "Ceará", "Espírito Santo",
    "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais",
    "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima",
    "Santa Catarina", "São Paulo", "Sergipe", "Tocantins", "Distrito Federal"
];

estadosBrasil.forEach((estadosBrasil, i) => {
    console.log(`Indice: ${i + 1}, Estado: ${estadosBrasil}`)
});

const Leonardo = {
    nome: "Leonardo Matheus Felix Vitorino RIbeiro",
    idade: "22",
    cidade: "Registro-SP",
    hobby: "Tomar uma"
};

console.log(Leonardo)

const filmes = [
    {
      titulo: "Vingadores - Ultimato",
      genero: "Ação, Aventura, Ficção Científica",
      ano: 2019,
      classificacaoIdade: "12 anos"
    },
    {
      titulo: "Toy Story 4",
      genero: "Animação, Aventura, Comédia",
      ano: 2019,
      classificacaoIdade: "Livre"
    },
    {
      titulo: "O Rei Leão",
      genero: "Animação, Aventura, Drama",
      ano: 1994,
      classificacaoIdade: "Livre"
    },
    {
      titulo: "A Bruxa",
      genero: "Drama, Horror, Mistério",
      ano: 2015,
      classificacaoIdade: "16 anos"
    },
    {
      titulo: "Coringa",
      genero: "Crime, Drama, Thriller",
      ano: 2019,
      classificacaoIdade: "16 anos"
    }
  ];

  filmes.forEach(filmes => {
    console.log(`Titulo: ${filmes.titulo}`),
    console.log(`Genero: ${filmes.genero}`),
    console.log(`Ano: ${filmes.ano}`),
    console.log(`Classificação: ${filmes.classificacaoIdade}`),
    console.log("");
  })