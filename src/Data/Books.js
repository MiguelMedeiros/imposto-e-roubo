const Books = [
  {
    link: "https://amzn.to/3pxZhco",
    image: "books/acaohumana.png",
    bookTitle: "Ação Humana",
    bookAuthor: "Ludwig Von Mises",
    audio: "yawgG0nR_Go",
    filter: ["filosofia", "economia"],
  },
  {
    link: "https://amzn.to/3FBjTGk",
    image: "books/caminhodaservidao.jpg",
    bookTitle: "O Caminho da Servidão",
    bookAuthor: "F.A. Hayek",
    audio: "r1kDfStdb0I",
    filter: ["filosofia", "economia"],
  },
  {
    link: "https://amzn.to/3pylxD3",
    image: "books/anatomiadoestado.jpg",
    bookTitle: "Anatomia do Estado",
    bookAuthor: "Murray N. Rothbard",
    audio: "T-0Bui7f3Dk",
    filter: ["filosofia", "economia", "política"],
  },
  {
    link: "https://amzn.to/3JrBylZ",
    image: "books/asseislicoes.jpg",
    bookTitle: "As Seis Lições",
    bookAuthor: "Ludwig Von Mises",
    audio: "XCfPCKlRSZw",
    filter: ["filosofia", "economia", "política"],
  },
  {
    link: "https://amzn.to/3qNVSFZ",
    image: "books/alei.jpg",
    bookTitle: "A Lei",
    bookAuthor: "Claude Frederic Bastiat",
    audio: "LBmAej8x8NU",
    filter: ["filosofia", "política"],
  },
  {
    link: "https://amzn.to/3evnee7",
    image: "books/bitcoinamoedanaeradigital.jpg",
    bookTitle: "Bitcoin. A Moeda na Era Digital",
    bookAuthor: "Fernando Ulrich",
    audio: "YqtgfA4Hg7U",
    filter: ["tecnologia", "bitcoin"],
  },
  {
    link: "https://amzn.to/315tu9f",
    image: "books/materingbitcoin.jpg",
    bookTitle: "Mastering Bitcoin",
    bookAuthor: "Andreas Antonopoulos",
    audio: "hEpNDK3q__Q",
    filter: ["tecnologia", "bitcoin"],
  },
  {
    link: "https://amzn.to/3EzcFRT",
    image: "books/thebitcoinstandard.jpg",
    bookTitle: "The Bitcoin Standard",
    bookAuthor: "Saifedean Ammous",
    audio: "Zbm772vF-5M",
    filter: ["tecnologia", "bitcoin"],
  },
  {
    link: "https://amzn.to/3pzpO9c",
    image: "books/democraciaodeusquefalhou.jpg",
    bookTitle: "Democracia. O Deus que Falhou",
    bookAuthor: "Hans-Hermann Hoppe",
    audio: "3WUQ2lVJwpU",
    filter: ["filosofia", "política"],
  },
  {
    link: "https://amzn.to/3sEYuIw",
    image: "books/oqueogovernofezcomonossodinheiro.jpg",
    bookTitle: "O que o Governo Fez com o Nosso Dinheiro?",
    bookAuthor: "Murray N. Rothbard",
    audio: "LM4ghswKfg0",
    filter: ["política", "economia"],
  },
  {
    link: "https://amzn.to/3z3RHJN",
    image: "books/aeticadaliberdade.jpg",
    bookTitle: "A Ética da Liberdade",
    bookAuthor: "Murray N. Rothbard",
    audio: "3YfPDzVdX2g",
    filter: ["política", "filosofia"],
  },
  {
    link: "https://amzn.to/3EEiMUN",
    image: "books/porumanovaliberdade.jpg",
    bookTitle: "Por Uma Nova Liberdade: o Manifesto Libertário",
    bookAuthor: "Murray N. Rothbard",
    audio: "w3HNXuBANIM",
    filter: ["filosofia"],
  },
  {
    link: "https://amzn.to/33SUeuC",
    image: "books/educacaolivre.jpg",
    bookTitle: "Educação. Livre e Obrigatória",
    bookAuthor: "Murray N. Rothbard",
    audio: "98MeKLBX0M4",
    filter: ["filosofia"],
  },
  {
    link: "https://amzn.to/3Jh0Ovc",
    image: "books/umateoriadosocialismo.jpg",
    bookTitle: "Uma Teoria do Socialismo e do Capitalismo",
    bookAuthor: "Hans-Hermann Hoppe",
    audio: "brwcsR4EDW0",
    filter: ["filosofia", "economia", "política"],
  },
  {
    link: "https://amzn.to/3JoMvVt",
    image: "books/contrapropriedadeintelectual.jpg",
    bookTitle: "Contra a Propriedade Intelectual",
    bookAuthor: "N. Stephan Kinsella",
    audio: "OkEQCbo88SU",
    filter: ["filosofia", "economia", "política"],
  },
  {
    link: "https://amzn.to/32wiySP",
    image: "books/liberalismo.jpg",
    bookTitle: "Liberalismo",
    bookAuthor: "Ludwig Von Mises",
    audio: "PcXRg7G-Eq0",
    filter: ["filosofia", "economia", "política"],
  },
  {
    link: "https://amzn.to/3pz1WCM",
    image: "books/umabrevehistoriadohomem.jpg",
    bookTitle: "Uma Breve História do Homem. Progresso e Declínio",
    bookAuthor: "Hans-Hermann Hoppe",
    audio: "yyuh9fG72mA",
    filter: ["filosofia", "economia", "política"],
  },
  {
    link: "https://amzn.to/3JnVqqf",
    image: "books/oquedeveserfeito.jpg",
    bookTitle: "O que Deve Ser Feito",
    bookAuthor: "Hans-Hermann Hoppe",
    audio: "QHDRahEdYYM",
    filter: ["filosofia", "economia", "política"],
  },
  {
    link: "https://amzn.to/3Ex5Xvt",
    image: "books/aescolaaustriaca.jpg",
    bookTitle: "A Escola Austríaca",
    bookAuthor: "Jesus Huerta de Soto",
    audio: "4QfZJP9uDWg",
    filter: ["economia"],
  },
  {
    link: "https://amzn.to/3ey6Jhr",
    image: "books/amentalidadeanticapitalista.jpg",
    bookTitle: "A Mentalidade Anticapitalista",
    bookAuthor: "Ludwig Von Mises",
    audio: "wtrj5otsdLI",
    filter: ["economia", "filosofia"],
  },
  {
    link: "https://amzn.to/3EBIjOB",
    image: "books/desempregoepoliticamonetaria.jpg",
    bookTitle: "Desemprego e Política Monetária",
    bookAuthor: "F.A. Hayek",
    audio: "ktaKZ4WinJk",
    filter: ["economia", "filosofia"],
  },
  {
    link: "https://amzn.to/3qykOAO",
    image: "books/acienciaeconomicaeometodoaustriaco.jpg",
    bookTitle: "A Ciência Econômica e o Método Austríaco",
    bookAuthor: "Hans-Hermann Hoppe",
    audio: "xzp_TNoWWNc",
    filter: ["economia", "filosofia"],
  },
  {
    link: "https://amzn.to/3pyhFSn",
    image: "books/dezlicoesfundamentaisdeeconomiaaustriaca.jpg",
    bookTitle: "Dez Lições Fundamentais de Economia Austríaca",
    bookAuthor: "Ubiratan Jorge Iorio",
    audio: "_EK4ThSfsqI",
    filter: ["economia"],
  },
  {
    link: "https://amzn.to/3evQpxE",
    image: "books/ocalculoeconomicosobosocialismo.jpg",
    bookTitle: "O Cálculo Econômico Sob o Socialismo",
    bookAuthor: "Ludwig Von Mises",
    audio: "vWjDeFGcDGg",
    filter: ["economia"],
  },
  {
    link: "https://amzn.to/3eupOkr",
    image: "books/theinternetofmoney.jpg",
    bookTitle: "The Internet of Money",
    bookAuthor: "Andreas M. Antonopoulos",
    audio: "rc744Z9IjhY",
    filter: ["tecnologia", "bitcoin"],
  },
  {
    link: "https://amzn.to/3FznnsT",
    image: "books/acienciapolitica.jpg",
    bookTitle: "A Ciência da Política",
    bookAuthor: "Adriano Gianturco",
    audio: "VKvdbhyFqg0",
    filter: ["política"],
  },
  {
    link: "https://amzn.to/3EACfGf",
    image: "books/the-soveryn-individual.jpg",
    bookTitle: "The Soveryn Individual",
    bookAuthor: "James Dale Davidson",
    audio: "m7YJgj57Css",
    filter: ["economia", "tecnologia", "soberania"],
  },
  {
    link: "https://amzn.to/3HfvTh6",
    image: "books/the-fiat-standard.jpg",
    bookTitle: "The Fiat Standard",
    bookAuthor: "Saifedean Ammous",
    audio: "UxrV09BjGko",
    filter: ["economia", "bitcoin", "soberania"],
  },
  {
    link: "https://amzn.to/3JsyExE",
    image: "books/the-blocksize-war.jpg",
    bookTitle: "The Blocksize War",
    bookAuthor: "Jonathan Bier",
    audio: "uUJxYuH6Km4",
    filter: ["bitcoin"],
  },
  {
    link: "https://amzn.to/3FABcYb",
    image: "books/economia-em-uma-unica-licao.jpg",
    bookTitle: "Economia em uma única lição",
    bookAuthor: "Henry Hazlitt",
    audio: "uAJalIUiu6U",
    filter: ["economia"],
  },  
  {
    link: "https://amzn.to/3mDBki9",
    image: "books/21-lessons.jpg",
    bookTitle: "21 Lições",
    bookAuthor: "Gigi",
    audio: "XV2bxmA1EXA",
    filter: ["economia", "bitcoin", "filosofia"],
  },  
  {
    link: "https://amzn.to/3quEm9s",
    image: "books/bitcoin-red-pill.jpg",
    bookTitle: "Bitcoin Red Pill",
    bookAuthor: "Renato Amoedo e Alan Schramm",
    audio: "mEoJkjh9n6M",
    filter: ["economia", "bitcoin", "filosofia", "soberania"],
  },
];

export default Books;
