# Projeto: Cozinha Comunitária
um sistema de cadastro de Cozinhas comunitárias que existem em cada região

# Rotas

[GET] "/cozinha" Deverá retornar todas as cozinhas cadastradas.

 [GET] "/cozinha/[id] Deverá retornar a cozinha com o id informado.

 [POST] "/cozinha" Deverá criar uma "cozinha"

 [DELETE] "/cozinha/[ID]" Deverá deletar uma cozinha por id específico e retorna mensagem;

 [PATCH] "/cozinha/[ID]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado;

# Regras de negócio
 Não poderá existir cozinhas com o mesmo cnpj;
 Não poderá existir cozinhas com o mesmo nome no mesmo bairro;

 # Dados para Collection Cozinha

_id: autogerado e obrigatório;
nome: texto e obrigatório;
cnpj: numero e obrigatorio;
É uma iniciativa privada? : Boolean
 - endereco objeto com:
      cep: string e obrigatório,
      rua: string e obrigatório,
      numero: number e obrigatório,
      complemento: string e opcional,
      referencia: string e opcional,
      estado: string e obrigatório,
      cidade: string e obrigatório,
      bairro: string e obrigatório;
- bairros que atuam: array;
- site: texto e não obrigatório;
- atividades disponíveis: array;
- Pessoa responsável pela cozinha: string e obrigatório;
- 
# API deve retornar seguinte JSON de exemplo:
[
  {
    _id: new ObjectId("62ab7c861ff392ef188b1100"),
    nome: 'Cozinha Sabores e saberes Milares',
    cnpj: '01984920/0001-12',
    telefone: '1132331232'
    iniciativa_privada: true,
    endereco: {
      cep: '03563050',
      rua: 'Avenida São Miguel', 
      numero: 2001, 
      complemento: '', 
      referencia: 'Próximo da Praça da paz',
      estado: 'São Paulo', 
      cidade: 'São Paulo',
      bairro: 'Jardim São Miguel'
    },
    bairros_atuantes: ['São Miguel', 'Guainases', 'Itaquera'],
    site: 'https://www.cozinhasabores.com.br',
    atividades_disponiveis: ['Cursos de cozinha Brasileira', 'Restaurante solidário'],
    pessoa_responsavel: 'Thaysa'
    createdAt: 2022-11-05T09:00:02.076Z,
    updatedAt: 2022-11-05T18:00:02.076Z,
    __v: 0
  }
]