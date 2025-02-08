import { FizzBuzz } from "../src/kataFizzBuzz"


const fizzBuzz = new FizzBuzz();
let resultat: number | string


it('Un argument de 1 retourne 1', () => {
    resultat = fizzBuzz.reponsePour(1)
    expect(resultat).toEqual(1)
});

it('Un argument de 2 retourne 2', () => {
    resultat = fizzBuzz.reponsePour(2)
    expect(resultat).toEqual(2)
});

it('Un argument de 3 retourne Fizz', () => {
    resultat = fizzBuzz.reponsePour(3)
    expect(resultat).toEqual('Fizz')
});

it('Un argument de 6 retourne Fizz', () => {
    resultat = fizzBuzz.reponsePour(6)
    expect(resultat).toEqual('Fizz')
});

it('Un argument de 5 retourne Buzz', () => {
    resultat = fizzBuzz.reponsePour(5)
    expect(resultat).toEqual('Buzz')
});

it('Un argument de 10 retourne Buzz', () => {
    resultat = fizzBuzz.reponsePour(10)
    expect(resultat).toEqual('Buzz')
});

it('Un argument de 15 retourne FizzBuzz', () => {
    resultat = fizzBuzz.reponsePour(15)
    expect(resultat).toEqual('FizzBuzz')
});

it('Un argument de 30 retourne FizzBuzz', () => {
    resultat = fizzBuzz.reponsePour(30)
    expect(resultat).toEqual('FizzBuzz')
});

it('Un argument de 13 retourne Fizz', () => {
    resultat = fizzBuzz.reponsePour(13)
    expect(resultat).toEqual('Fizz')
});

it('Un argument de 33 retourne Fizz', () => {
    resultat = fizzBuzz.reponsePour(33)
    expect(resultat).toEqual('Fizz')
});

it('Un argument de 59 retourne Buzz', () => {
    resultat = fizzBuzz.reponsePour(59)
    expect(resultat).toEqual('Buzz')
});

it('Un argument de 50 retourne Buzz', () => {
    resultat = fizzBuzz.reponsePour(50)
    expect(resultat).toEqual('Buzz')
});

it('Un argument de 53 retourne FizzBuzz', () => {
    resultat = fizzBuzz.reponsePour(53)
    expect(resultat).toEqual('FizzBuzz')
});

it('Un argument de 35 retourne FizzBuzz', () => {
    resultat = fizzBuzz.reponsePour(35)
    expect(resultat).toEqual('FizzBuzz')
});