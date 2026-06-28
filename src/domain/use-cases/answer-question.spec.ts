import { test, expect } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question.js'
import { AnswerRepository } from '../repositories/answer-repository.js'
import { Answer } from '../entities/answer.js'

test('create an answer', async () => {
    const mockRepository: AnswerRepository = {
        create: async (answer: Answer) => {}
    }

    const answerQuestion = new AnswerQuestionUseCase(mockRepository)

    const answer = await answerQuestion.execute({
        instructorId: 'instructor-1',
        questionId: 'question-1',
        content: 'Nova Resposta'
    })

    expect(answer.content).toEqual('Nova Resposta')
})
