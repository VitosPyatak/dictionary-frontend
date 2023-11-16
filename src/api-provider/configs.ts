export enum WordType {
    noun = 'noun',
    verb = 'verb',
    adjective = 'adjective',
    adverb = 'adverb',
    conjunction = 'conjunction',
    preposition = 'preposition',
    pronoun = 'pronoun',
    interjection = 'interjection',
    determiner = 'determiner',
    numeral = 'numeral',
}

export const defaultResponse: Record<WordType, number> = {
    [WordType.noun]: 0,
    [WordType.verb]: 0,
    [WordType.adjective]: 0,
    [WordType.adverb]: 0,
    [WordType.conjunction]: 0,
    [WordType.preposition]: 0,
    [WordType.pronoun]: 0,
    [WordType.interjection]: 0,
    [WordType.determiner]: 0,
    [WordType.numeral]: 0
}