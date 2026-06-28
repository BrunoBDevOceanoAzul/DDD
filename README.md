# DDD no Node.js — Fórum Educacional

Repositório do código das aulas de DDD da formação **Node.js** da **Rocketseat**.

Este repositório contém a implementação prática dos conceitos de **Domain-Driven Design (DDD)** e **Clean Architecture** na construção de uma API REST para um fórum educacional.

## 📚 O que é DDD?

Domain-Driven Design (DDD) é uma abordagem de desenvolvimento de software que coloca o **domínio do problema** (a regra de negócio) como centro do design da aplicação. Criado por Eric Evans, o DDD fornece um conjunto de padrões e práticas para modelar domínios complexos de forma que o código reflita a linguagem do negócio.

## 🧱 Estrutura do Projeto

```
src/
└── domain/
    ├── entities/           # Entidades do domínio
    │   ├── answer.ts       # Resposta de uma pergunta
    │   ├── question.ts     # Pergunta do fórum
    │   ├── student.ts      # Aluno
    │   └── instructor.ts   # Instrutor
    ├── use-cases/          # Casos de uso da aplicação
    │   ├── answer-question.ts
    │   └── answer-question.spec.ts
    └── repositories/       # Contratos de repositórios
        └── answer-repository.ts
```

## 🔧 Conceitos de DDD Aplicados

### Entidades

As **entidades** são objetos que possuem uma identidade única e um ciclo de vida. No projeto:

| Entidade   | Atributos                          | Identidade     |
|------------|------------------------------------|----------------|
| `Answer`   | `id`, `content`, `authorId`, `questionId` | UUID |
| `Question` | `id`, `title`, `content`, `authorId`      | UUID |
| `Student`  | `id`, `name`                       | UUID |
| `Instructor` | `id`, `name`                     | UUID |

### Value Objects (VO)

Serão implementados como objetos imutáveis que representam conceitos do domínio sem identidade própria (ex: `Slug`, `Email`).

### Agregados

Conjuntos de entidades que são tratadas como uma unidade. A `Question` pode ser um aggregate root que contém `Answer` como parte do seu aggregate.

### Repositórios

Interfaces que definem contratos de persistência, desacoplando o domínio da infraestrutura. As implementações concretas serão injetadas nos use cases.

### Casos de Uso

Orquestram as operações do domínio. Exemplo: `AnswerQuestionUseCase` recebe os dados, cria a entidade `Answer` e persiste via repositório.

## 🧪 Testes

```bash
npm test
```

O projeto utiliza **Vitest** para testes unitários.

## 🚀 Tecnologias

- **Node.js** — Runtime
- **TypeScript** — Tipagem estática
- **Vitest** — Testes unitários
