
import { expect, test } from "vitest";
import { AnswerRepository } from "../repositories/answer-repository.js";
import { AnswerQuestionUseCase } from "./answer-question.js";
import { Answer } from "../entities/answer.js";


const fakeAnswerRepository: AnswerRepository = {
    create: async (answer: Answer) => {
        return;
    },
}


test('should be able to create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

    const answer = await answerQuestion.execute({
        instructorId: '1',
        questionId: '1',
        content: 'Nova resposta',
    })

    expect(answer.content).toEqual('Nova resposta')

})
