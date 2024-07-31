export const data = [
  {
    name: "Análise e Desenvolvimento de Softwares",
    courses: [
      {
        name: "Gestão de Projetos e Métodos Ágeis",
        banner: "./img/banners/gestaoDeVersionamento.png",
        teachers: [
          {
            login: "teacher5@softwares.com",
            password: "password123",
            name: "Professor F",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher5@softwares.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0004",
            plan: "monthly",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student5@softwares.com",
            password: "password",
            name: "Aluno F",
            photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0004",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Gestão de Projetos",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Gestão de Projetos",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Gestão de Projetos e Métodos Ágeis",
        comments: [
          {
            description: "Ótimo para entender o básico de gestão.",
            rating: 4,
            User: {
              login: "student5@softwares.com",
              password: "password",
              name: "Aluno F",
              photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Gestão de Projetos",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é um projeto?",
                answers: [
                  {
                    body: "Um esforço temporário para criar um produto, serviço ou resultado único.",
                    correct: true,
                  },
                  {
                    body: "Uma tarefa repetitiva executada diariamente.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Desenvolvimento de interfaces",
        banner: "./img/banners/desenvolvimentoDeInterface.png",
        teachers: [
          {
            login: "teacher5@softwares.com",
            password: "password123",
            name: "Professor F",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher5@softwares.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0004",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student5@softwares.com",
            password: "password",
            name: "Aluno F",
            photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0004",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Gestão de Projetos",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Gestão de Projetos",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Gestão de Projetos e Métodos Ágeis",
        comments: [
          {
            description: "Ótimo para entender o básico de gestão.",
            rating: 4,
            User: {
              login: "student5@softwares.com",
              password: "password",
              name: "Aluno F",
              photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Gestão de Projetos",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é um projeto?",
                answers: [
                  {
                    body: "Um esforço temporário para criar um produto, serviço ou resultado único.",
                    correct: true,
                  },
                  {
                    body: "Uma tarefa repetitiva executada diariamente.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Empreendedorismo",
        banner: "./img/banners/empreendedorismo.png",
        teachers: [
          {
            login: "teacher5@softwares.com",
            password: "password123",
            name: "Professor F",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher5@softwares.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0004",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student5@softwares.com",
            password: "password",
            name: "Aluno F",
            photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0004",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Gestão de Projetos",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Gestão de Projetos",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Gestão de Projetos e Métodos Ágeis",
        comments: [
          {
            description: "Ótimo para entender o básico de gestão.",
            rating: 4,
            User: {
              login: "student5@softwares.com",
              password: "password",
              name: "Aluno F",
              photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Gestão de Projetos",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é um projeto?",
                answers: [
                  {
                    body: "Um esforço temporário para criar um produto, serviço ou resultado único.",
                    correct: true,
                  },
                  {
                    body: "Uma tarefa repetitiva executada diariamente.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Teste de software",
        banner: "./img/banners/testeDeSofware.png",
        teachers: [
          {
            login: "teacher5@softwares.com",
            password: "password123",
            name: "Professor F",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher5@softwares.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0004",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student5@softwares.com",
            password: "password",
            name: "Aluno F",
            photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0004",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Gestão de Projetos",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Gestão de Projetos",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Gestão de Projetos e Métodos Ágeis",
        comments: [
          {
            description: "Ótimo para entender o básico de gestão.",
            rating: 4,
            User: {
              login: "student5@softwares.com",
              password: "password",
              name: "Aluno F",
              photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Gestão de Projetos",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é um projeto?",
                answers: [
                  {
                    body: "Um esforço temporário para criar um produto, serviço ou resultado único.",
                    correct: true,
                  },
                  {
                    body: "Uma tarefa repetitiva executada diariamente.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Modelagem de dados",
        banner: "./img/banners/modelagemDeDados.png",
        teachers: [
          {
            login: "teacher5@softwares.com",
            password: "password123",
            name: "Professor F",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher5@softwares.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0004",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student5@softwares.com",
            password: "password",
            name: "Aluno F",
            photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0004",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Gestão de Projetos",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Gestão de Projetos",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Gestão de Projetos e Métodos Ágeis",
        comments: [
          {
            description: "Ótimo para entender o básico de gestão.",
            rating: 4,
            User: {
              login: "student5@softwares.com",
              password: "password",
              name: "Aluno F",
              photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Gestão de Projetos",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é um projeto?",
                answers: [
                  {
                    body: "Um esforço temporário para criar um produto, serviço ou resultado único.",
                    correct: true,
                  },
                  {
                    body: "Uma tarefa repetitiva executada diariamente.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      
      {
        name: "Modelagem de dados",
        banner: "./img/banners/modelagemDeDados.png",
        teachers: [
          {
            login: "teacher5@softwares.com",
            password: "password123",
            name: "Professor F",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher5@softwares.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0004",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student5@softwares.com",
            password: "password",
            name: "Aluno F",
            photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0004",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Gestão de Projetos",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Gestão de Projetos",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Muito informativo!",
                rating: 5,
                User: {
                  login: "student5@softwares.com",
                  password: "password",
                  name: "Aluno F",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student5@softwares.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Gestão de Projetos e Métodos Ágeis",
        comments: [
          {
            description: "Ótimo para entender o básico de gestão.",
            rating: 4,
            User: {
              login: "student5@softwares.com",
              password: "password",
              name: "Aluno F",
              photoPerfil: "https://i.pravatar.cc/150?u=student5@softwares.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Gestão de Projetos",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é um projeto?",
                answers: [
                  {
                    body: "Um esforço temporário para criar um produto, serviço ou resultado único.",
                    correct: true,
                  },
                  {
                    body: "Uma tarefa repetitiva executada diariamente.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      }
    ],
  },
  {
    name: "Engenharia de Bioprocessos e Biotecnologia",
    courses: [
      {
        name: "Análise de Dados Aplicada",
        banner: "./img/banners/InserirUmTitulo4.png",
        teachers: [
          {
            login: "teacher1@bioprocessos.com",
            password: "password123",
            name: "Professor B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher1@bioprocessos.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0000",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student1@bioprocessos.com",
            password: "password",
            name: "Aluno B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0000",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Análise de Dados",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Análise de Dados",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
        ],
        description:
          "Conceitos de Estatística Básica com uso de Excel e Minitab17",
        comments: [
          {
            description: "Excelente conteúdo!",
            rating: 5,
            User: {
              login: "student1@bioprocessos.com",
              password: "password",
              name: "Aluno B",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Estatística",
            subject: "Estatística Básica",
            questions: [
              {
                description: "O que é média aritmética?",
                answers: [
                  {
                    body: "É a soma de todos os valores dividida pelo número de valores.",
                    correct: true,
                  },
                  {
                    body: "É o valor mais frequente em um conjunto de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "40 H/A",
      },
      {
        name: "Análise de Dados Aplicada",
        banner: "./img/banners/InserirUmTitulo1.png",
        teachers: [
          {
            login: "teacher1@bioprocessos.com",
            password: "password123",
            name: "Professor B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher1@bioprocessos.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0000",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student1@bioprocessos.com",
            password: "password",
            name: "Aluno B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0000",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Análise de Dados",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Análise de Dados",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
        ],
        description:
          "Conceitos de Estatística Básica com uso de Excel e Minitab17",
        comments: [
          {
            description: "Excelente conteúdo!",
            rating: 5,
            User: {
              login: "student1@bioprocessos.com",
              password: "password",
              name: "Aluno B",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Estatística",
            subject: "Estatística Básica",
            questions: [
              {
                description: "O que é média aritmética?",
                answers: [
                  {
                    body: "É a soma de todos os valores dividida pelo número de valores.",
                    correct: true,
                  },
                  {
                    body: "É o valor mais frequente em um conjunto de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "40 H/A",
      },
      {
        name: "Análise de Dados Aplicada",
        banner: "./img/banners/InserirUmTitulo2.png",
        teachers: [
          {
            login: "teacher1@bioprocessos.com",
            password: "password123",
            name: "Professor B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher1@bioprocessos.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0000",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student1@bioprocessos.com",
            password: "password",
            name: "Aluno B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0000",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Análise de Dados",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Análise de Dados",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
        ],
        description:
          "Conceitos de Estatística Básica com uso de Excel e Minitab17",
        comments: [
          {
            description: "Excelente conteúdo!",
            rating: 5,
            User: {
              login: "student1@bioprocessos.com",
              password: "password",
              name: "Aluno B",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Estatística",
            subject: "Estatística Básica",
            questions: [
              {
                description: "O que é média aritmética?",
                answers: [
                  {
                    body: "É a soma de todos os valores dividida pelo número de valores.",
                    correct: true,
                  },
                  {
                    body: "É o valor mais frequente em um conjunto de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "40 H/A",
      },
      {
        name: "Análise de Dados Aplicada",
        banner: "./img/banners/InserirUmTitulo3.png",
        teachers: [
          {
            login: "teacher1@bioprocessos.com",
            password: "password123",
            name: "Professor B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher1@bioprocessos.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0000",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student1@bioprocessos.com",
            password: "password",
            name: "Aluno B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0000",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Análise de Dados",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Análise de Dados",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
        ],
        description:
          "Conceitos de Estatística Básica com uso de Excel e Minitab17",
        comments: [
          {
            description: "Excelente conteúdo!",
            rating: 5,
            User: {
              login: "student1@bioprocessos.com",
              password: "password",
              name: "Aluno B",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Estatística",
            subject: "Estatística Básica",
            questions: [
              {
                description: "O que é média aritmética?",
                answers: [
                  {
                    body: "É a soma de todos os valores dividida pelo número de valores.",
                    correct: true,
                  },
                  {
                    body: "É o valor mais frequente em um conjunto de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "40 H/A",
      },
      {
        name: "Análise de Dados Aplicada",
        banner: "",
        teachers: [
          {
            login: "teacher1@bioprocessos.com",
            password: "password123",
            name: "Professor B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher1@bioprocessos.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0000",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student1@bioprocessos.com",
            password: "password",
            name: "Aluno B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0000",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Análise de Dados",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Análise de Dados",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
        ],
        description:
          "Conceitos de Estatística Básica com uso de Excel e Minitab17",
        comments: [
          {
            description: "Excelente conteúdo!",
            rating: 5,
            User: {
              login: "student1@bioprocessos.com",
              password: "password",
              name: "Aluno B",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Estatística",
            subject: "Estatística Básica",
            questions: [
              {
                description: "O que é média aritmética?",
                answers: [
                  {
                    body: "É a soma de todos os valores dividida pelo número de valores.",
                    correct: true,
                  },
                  {
                    body: "É o valor mais frequente em um conjunto de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "40 H/A",
      },
      {
        name: "Análise de Dados Aplicada",
        banner: "",
        teachers: [
          {
            login: "teacher1@bioprocessos.com",
            password: "password123",
            name: "Professor B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher1@bioprocessos.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0000",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student1@bioprocessos.com",
            password: "password",
            name: "Aluno B",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0000",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Análise de Dados",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Análise de Dados",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Ótima aula sobre estatística!",
                rating: 4,
                User: {
                  login: "student1@bioprocessos.com",
                  password: "password",
                  name: "Aluno B",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
                },
              },
            ],
          },
        ],
        description:
          "Conceitos de Estatística Básica com uso de Excel e Minitab17",
        comments: [
          {
            description: "Excelente conteúdo!",
            rating: 5,
            User: {
              login: "student1@bioprocessos.com",
              password: "password",
              name: "Aluno B",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student1@bioprocessos.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Estatística",
            subject: "Estatística Básica",
            questions: [
              {
                description: "O que é média aritmética?",
                answers: [
                  {
                    body: "É a soma de todos os valores dividida pelo número de valores.",
                    correct: true,
                  },
                  {
                    body: "É o valor mais frequente em um conjunto de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "40 H/A",
      },
    ],
  },
  {
    name: "Farmácia",
    courses: [
      {
        name: "Matemática Aplicada",
        banner: "./img/banners/InserirUmTitulo5.png",
        teachers: [
          {
            login: "teacher2@farmacia.com",
            password: "password123",
            name: "Professor C",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher2@farmacia.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0001",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student2@farmacia.com",
            password: "password",
            name: "Aluno C",
            photoPerfil: "https://i.pravatar.cc/150?u=student2@farmacia.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0001",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Matemática Aplicada",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Aula muito clara e objetiva.",
                rating: 5,
                User: {
                  login: "student2@farmacia.com",
                  password: "password",
                  name: "Aluno C",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student2@farmacia.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Matemática Aplicada",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Aula muito clara e objetiva.",
                rating: 5,
                User: {
                  login: "student2@farmacia.com",
                  password: "password",
                  name: "Aluno C",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student2@farmacia.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Matemática Aplicada",
        comments: [
          {
            description: "Muito bom para revisar conceitos matemáticos.",
            rating: 4,
            User: {
              login: "student2@farmacia.com",
              password: "password",
              name: "Aluno C",
              photoPerfil: "https://i.pravatar.cc/150?u=student2@farmacia.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Matemática",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "Qual é o resultado de 2 + 2?",
                answers: [
                  {
                    body: "4",
                    correct: true,
                  },
                  {
                    body: "5",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Farmacia",
        banner: "/img/banners/InserirUmTitulo6.png",
        teachers: [
          {
            login: "teacher2@farmacia.com",
            password: "password123",
            name: "Professor C",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher2@farmacia.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0001",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student2@farmacia.com",
            password: "password",
            name: "Aluno C",
            photoPerfil: "https://i.pravatar.cc/150?u=student2@farmacia.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0001",
            plan: "free",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Matemática Aplicada",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Aula muito clara e objetiva.",
                rating: 5,
                User: {
                  login: "student2@farmacia.com",
                  password: "password",
                  name: "Aluno C",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student2@farmacia.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Matemática Aplicada",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Aula muito clara e objetiva.",
                rating: 5,
                User: {
                  login: "student2@farmacia.com",
                  password: "password",
                  name: "Aluno C",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student2@farmacia.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Matemática Aplicada",
        comments: [
          {
            description: "Muito bom para revisar conceitos matemáticos.",
            rating: 4,
            User: {
              login: "student2@farmacia.com",
              password: "password",
              name: "Aluno C",
              photoPerfil: "https://i.pravatar.cc/150?u=student2@farmacia.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Matemática",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "Qual é o resultado de 2 + 2?",
                answers: [
                  {
                    body: "4",
                    correct: true,
                  },
                  {
                    body: "5",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Farmacia 2 ",
        banner: "/img/banners/InserirUmTitulo7.png",
        teachers: [
          {
            login: "teacher2@farmacia.com",
            password: "password123",
            name: "Professor C",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher2@farmacia.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0001",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student2@farmacia.com",
            password: "password",
            name: "Aluno C",
            photoPerfil: "https://i.pravatar.cc/150?u=student2@farmacia.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0001",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Matemática Aplicada",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Aula muito clara e objetiva.",
                rating: 5,
                User: {
                  login: "student2@farmacia.com",
                  password: "password",
                  name: "Aluno C",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student2@farmacia.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Matemática Aplicada",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Aula muito clara e objetiva.",
                rating: 5,
                User: {
                  login: "student2@farmacia.com",
                  password: "password",
                  name: "Aluno C",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student2@farmacia.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Matemática Aplicada",
        comments: [
          {
            description: "Muito bom para revisar conceitos matemáticos.",
            rating: 4,
            User: {
              login: "student2@farmacia.com",
              password: "password",
              name: "Aluno C",
              photoPerfil: "https://i.pravatar.cc/150?u=student2@farmacia.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Matemática",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "Qual é o resultado de 2 + 2?",
                answers: [
                  {
                    body: "4",
                    correct: true,
                  },
                  {
                    body: "5",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Farmacia 3",
        banner: "/img/banners/InserirUmTitulo8.png",
        teachers: [
          {
            login: "teacher2@farmacia.com",
            password: "password123",
            name: "Professor C",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher2@farmacia.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0001",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student2@farmacia.com",
            password: "password",
            name: "Aluno C",
            photoPerfil: "https://i.pravatar.cc/150?u=student2@farmacia.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0001",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução ao curso de Matemática Aplicada",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Aula muito clara e objetiva.",
                rating: 5,
                User: {
                  login: "student2@farmacia.com",
                  password: "password",
                  name: "Aluno C",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student2@farmacia.com",
                },
              },
            ],
          },
          {
            title: "Aula 2",
            description: "Curso de Matemática Aplicada",
            link: "https://www.youtube.com/embed/mORWf5l7TY0",
            comments: [
              {
                description: "Aula muito clara e objetiva.",
                rating: 5,
                User: {
                  login: "student2@farmacia.com",
                  password: "password",
                  name: "Aluno C",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student2@farmacia.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Matemática Aplicada",
        comments: [
          {
            description: "Muito bom para revisar conceitos matemáticos.",
            rating: 4,
            User: {
              login: "student2@farmacia.com",
              password: "password",
              name: "Aluno C",
              photoPerfil: "https://i.pravatar.cc/150?u=student2@farmacia.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Matemática",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "Qual é o resultado de 2 + 2?",
                answers: [
                  {
                    body: "4",
                    correct: true,
                  },
                  {
                    body: "5",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
    ],
  },
  {
    name: "Ciência de Dados",
    courses: [
      {
        name: "Programação para Ciência de Dados",
        banner: "/img/banners/InserirUmTitulo9.png",
        teachers: [
          {
            login: "teacher3@cienciadedados.com",
            password: "password123",
            name: "Professor D",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher3@cienciadedados.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0002",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student3@cienciadedados.com",
            password: "password",
            name: "Aluno D",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0002",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Programação em Python",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima introdução!",
                rating: 5,
                User: {
                  login: "student3@cienciadedados.com",
                  password: "password",
                  name: "Aluno D",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Programação em Python",
        comments: [
          {
            description: "Muito útil para iniciantes.",
            rating: 5,
            User: {
              login: "student3@cienciadedados.com",
              password: "password",
              name: "Aluno D",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Python",
            subject: "Introdução ao Python",
            questions: [
              {
                description:
                  "Qual é a função usada para imprimir algo na tela em Python?",
                answers: [
                  {
                    body: "print()",
                    correct: true,
                  },
                  {
                    body: "echo()",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Programação para Ciência de Dados 2",
        banner: "/img/banners/InserirUmTitulo10.png",
        teachers: [
          {
            login: "teacher3@cienciadedados.com",
            password: "password123",
            name: "Professor D",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher3@cienciadedados.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0002",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student3@cienciadedados.com",
            password: "password",
            name: "Aluno D",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0002",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Programação em Python",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima introdução!",
                rating: 5,
                User: {
                  login: "student3@cienciadedados.com",
                  password: "password",
                  name: "Aluno D",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Programação em Python",
        comments: [
          {
            description: "Muito útil para iniciantes.",
            rating: 5,
            User: {
              login: "student3@cienciadedados.com",
              password: "password",
              name: "Aluno D",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Python",
            subject: "Introdução ao Python",
            questions: [
              {
                description:
                  "Qual é a função usada para imprimir algo na tela em Python?",
                answers: [
                  {
                    body: "print()",
                    correct: true,
                  },
                  {
                    body: "echo()",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Programação para Ciência de Dados 3",
        banner: "/img/banners/InserirUmTitulo11.png",
        teachers: [
          {
            login: "teacher3@cienciadedados.com",
            password: "password123",
            name: "Professor D",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher3@cienciadedados.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0002",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student3@cienciadedados.com",
            password: "password",
            name: "Aluno D",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0002",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Programação em Python",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima introdução!",
                rating: 5,
                User: {
                  login: "student3@cienciadedados.com",
                  password: "password",
                  name: "Aluno D",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Programação em Python",
        comments: [
          {
            description: "Muito útil para iniciantes.",
            rating: 5,
            User: {
              login: "student3@cienciadedados.com",
              password: "password",
              name: "Aluno D",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Python",
            subject: "Introdução ao Python",
            questions: [
              {
                description:
                  "Qual é a função usada para imprimir algo na tela em Python?",
                answers: [
                  {
                    body: "print()",
                    correct: true,
                  },
                  {
                    body: "echo()",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
      {
        name: "Programação para Ciência de Dados 4",
        banner: "/img/banners/InserirUmTitulo12.png",
        teachers: [
          {
            login: "teacher3@cienciadedados.com",
            password: "password123",
            name: "Professor D",
            photoPerfil:
              "https://i.pravatar.cc/150?u=teacher3@cienciadedados.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0002",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student3@cienciadedados.com",
            password: "password",
            name: "Aluno D",
            photoPerfil:
              "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0002",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Programação em Python",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Ótima introdução!",
                rating: 5,
                User: {
                  login: "student3@cienciadedados.com",
                  password: "password",
                  name: "Aluno D",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Programação em Python",
        comments: [
          {
            description: "Muito útil para iniciantes.",
            rating: 5,
            User: {
              login: "student3@cienciadedados.com",
              password: "password",
              name: "Aluno D",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student3@cienciadedados.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Python",
            subject: "Introdução ao Python",
            questions: [
              {
                description:
                  "Qual é a função usada para imprimir algo na tela em Python?",
                answers: [
                  {
                    body: "print()",
                    correct: true,
                  },
                  {
                    body: "echo()",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "80",
      },
    ],
  },
  {
    name: "Técnico em Enfermagem",
    courses: [
      {
        name: "Biossegurança e Processamento de Artigos",
        banner: "/img/banners/InserirUmTitulo13.png",
        teachers: [
          {
            login: "teacher4@enfermagem.com",
            password: "password123",
            name: "Professor E",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher4@enfermagem.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0003",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student4@enfermagem.com",
            password: "password",
            name: "Aluno E",
            photoPerfil: "https://i.pravatar.cc/150?u=student4@enfermagem.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0003",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Biossegurança",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Informações muito úteis!",
                rating: 5,
                User: {
                  login: "student4@enfermagem.com",
                  password: "password",
                  name: "Aluno E",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student4@enfermagem.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Biossegurança e Processamento de Artigos",
        comments: [
          {
            description: "Essencial para a prática de enfermagem.",
            rating: 5,
            User: {
              login: "student4@enfermagem.com",
              password: "password",
              name: "Aluno E",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student4@enfermagem.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Biossegurança",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é biossegurança?",
                answers: [
                  {
                    body: "Medidas para evitar riscos à saúde.",
                    correct: true,
                  },
                  {
                    body: "Métodos de processamento de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "60",
      },
      {
        name: "Biossegurança e Processamento de Artigos",
        banner: "/img/banners/InserirUmTitulo14.png",
        teachers: [
          {
            login: "teacher4@enfermagem.com",
            password: "password123",
            name: "Professor E",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher4@enfermagem.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0003",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student4@enfermagem.com",
            password: "password",
            name: "Aluno E",
            photoPerfil: "https://i.pravatar.cc/150?u=student4@enfermagem.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0003",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Biossegurança",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Informações muito úteis!",
                rating: 5,
                User: {
                  login: "student4@enfermagem.com",
                  password: "password",
                  name: "Aluno E",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student4@enfermagem.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Biossegurança e Processamento de Artigos",
        comments: [
          {
            description: "Essencial para a prática de enfermagem.",
            rating: 5,
            User: {
              login: "student4@enfermagem.com",
              password: "password",
              name: "Aluno E",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student4@enfermagem.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Biossegurança",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é biossegurança?",
                answers: [
                  {
                    body: "Medidas para evitar riscos à saúde.",
                    correct: true,
                  },
                  {
                    body: "Métodos de processamento de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "60",
      },
      {
        name: "Biossegurança e Processamento de Artigos",
        banner: "/img/banners/InserirUmTitulo15.png",
        teachers: [
          {
            login: "teacher4@enfermagem.com",
            password: "password123",
            name: "Professor E",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher4@enfermagem.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0003",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student4@enfermagem.com",
            password: "password",
            name: "Aluno E",
            photoPerfil: "https://i.pravatar.cc/150?u=student4@enfermagem.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0003",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Biossegurança",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Informações muito úteis!",
                rating: 5,
                User: {
                  login: "student4@enfermagem.com",
                  password: "password",
                  name: "Aluno E",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student4@enfermagem.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Biossegurança e Processamento de Artigos",
        comments: [
          {
            description: "Essencial para a prática de enfermagem.",
            rating: 5,
            User: {
              login: "student4@enfermagem.com",
              password: "password",
              name: "Aluno E",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student4@enfermagem.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Biossegurança",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é biossegurança?",
                answers: [
                  {
                    body: "Medidas para evitar riscos à saúde.",
                    correct: true,
                  },
                  {
                    body: "Métodos de processamento de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "60",
      },
      {
        name: "Biossegurança e Processamento de Artigos",
        banner: "/img/banners/InserirUmTitulo16.png",
        teachers: [
          {
            login: "teacher4@enfermagem.com",
            password: "password123",
            name: "Professor E",
            photoPerfil: "https://i.pravatar.cc/150?u=teacher4@enfermagem.com",
            assigment: true,
            role: "Teacher",
            phone: "(45) 99999-0003",
            plan: "free",
            paymentDetails: {},
          },
        ],
        presencialList: [
          {
            login: "student4@enfermagem.com",
            password: "password",
            name: "Aluno E",
            photoPerfil: "https://i.pravatar.cc/150?u=student4@enfermagem.com",
            assigment: true,
            role: "Student",
            phone: "(45) 88888-0003",
            plan: "monthly",
            paymentDetails: {
              cardNumber: "1234 5678 1234 5678",
              cardName: "Aluno F",
              expiryDate: "12/23",
              cvv: "123",
              nextPaymentDate: "06/07/2024",
            },
          },
        ],
        videos: [
          {
            title: "Aula 1",
            description: "Introdução à Biossegurança",
            link: "https://www.youtube.com/embed/Ldl_CvMGmEA",
            comments: [
              {
                description: "Informações muito úteis!",
                rating: 5,
                User: {
                  login: "student4@enfermagem.com",
                  password: "password",
                  name: "Aluno E",
                  photoPerfil:
                    "https://i.pravatar.cc/150?u=student4@enfermagem.com",
                },
              },
            ],
          },
        ],
        description: "Curso de Biossegurança e Processamento de Artigos",
        comments: [
          {
            description: "Essencial para a prática de enfermagem.",
            rating: 5,
            User: {
              login: "student4@enfermagem.com",
              password: "password",
              name: "Aluno E",
              photoPerfil:
                "https://i.pravatar.cc/150?u=student4@enfermagem.com",
            },
          },
        ],
        quiz: [
          {
            name: "Quiz 1",
            description: "Teste seus conhecimentos em Biossegurança",
            subject: "Conceitos Básicos",
            questions: [
              {
                description: "O que é biossegurança?",
                answers: [
                  {
                    body: "Medidas para evitar riscos à saúde.",
                    correct: true,
                  },
                  {
                    body: "Métodos de processamento de dados.",
                    correct: false,
                  },
                ],
              },
            ],
          },
        ],
        hours: "60",
      },
    ],
  },
];
