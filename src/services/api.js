export function loadLists() {
  return [
    {
      title: "Tasks",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 2,
          content: "Recriar a interface do Pipefy",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 4,
          content: "Terminar Backend Sinope",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 5,
          content: "Fazer testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
      ],
    },
    {
      title: "Doing",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Estudar Node Js, React js, React Native",
          labels: [],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
      ],
    },
    {
      title: "Stopped",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Pesquisar sobre Geolocalização e mapas com React Native",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 8,
          content: "Fazer Deploy desta aplicação",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 9,
          content: "Ajustes na biblioteca unform",
          labels: [],
        },
      ],
    },
    {
      title: "Completed",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Fazer a omnistack 11.0",
          labels: [],
        },
        {
          id: 12,
          content: "Fazer o Frontend do Pipefy",
          labels: ["#54e1f7"],
        },
        {
          id: 13,
          content: "Se especializar em JavasScript",
          labels: ["#7159c1"],
        },
      ],
    },
  ];
}
