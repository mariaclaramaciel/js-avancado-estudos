//Um array de objetos, como acessar suas informações:

const filmes = [
    {
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentario sobre tecnologia",
        duracao: "120"
    },
    {
        id: 2,
        titulo: "Us",
        descricao: "Filme de terror",
        duracao: "120"
    },
    {
        id: 3,
        titulo: "Corra",
        descricao: "Filme de suspense",
        duracao: "120"
    }
];

const [{id, titulo, descricao, duracao}] = filmes
//console.log(titulo)//Dilema das Redes 

filmes.map(filme => console.log(filme.descricao)) //Um array com todas as descricoes

