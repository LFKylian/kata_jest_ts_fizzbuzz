export class FizzBuzz {

    reponsePour(num: number): number | string {
        const strNum: string = num.toString();
        let reponse: number | string = '';

        if (estFizz(num, strNum)) { reponse += 'Fizz' };

        if (estBuzz(num, strNum)) { reponse += 'Buzz' };

        if (reponse === '') { reponse = num };

        return reponse;
    }

}

function estFizz(num: number, strNum: string) {
    return num % 3 === 0 || strNum.includes('3');
}

function estBuzz(num: number, strNum: string) {
    return num % 5 === 0 || strNum.includes('5');
}