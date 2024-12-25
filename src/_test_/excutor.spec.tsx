import { getNumberFromString, stringCalculator, sumCalculatorOnlyPositiveNumber } from "../utils/helper/executor";


describe(sumCalculatorOnlyPositiveNumber,()=>{
    it('with zero array',()=>{
        const result = sumCalculatorOnlyPositiveNumber([0]);
        expect(result).toBe(0);
    })
    it('with positive number',()=>{
        const result = sumCalculatorOnlyPositiveNumber([1,2,3]);
        expect(result).toBe(6);
    })
    it('with negative number',()=>{
        expect(() => sumCalculatorOnlyPositiveNumber([1, 2, -3])).toThrow('negatives numbers are  not allowed: -3');
    })
    it('with multiple negative number',()=>{
        expect(() => sumCalculatorOnlyPositiveNumber([1, 2, -3,12,-14])).toThrow('negatives numbers are  not allowed: -3, -14');
    })
})


describe(stringCalculator,()=>{
    it('string with char only',()=>{
        const result = stringCalculator('absc');
        expect(result).toBe(0);
    })
    it('string with comma separated string',()=>{
        const result = stringCalculator('1,2,3,4');
        expect(result).toBe(10);
    })
    it('string with new line  separated',()=>{
        const result = stringCalculator('1\n2,3,4');
        expect(result).toBe(10);
    })
    it('string with new special  separated',()=>{
        const result = stringCalculator('1\n2,::3,\\4');
        expect(result).toBe(10);
    })
})

describe(getNumberFromString,()=>{
    it('string with char only',()=>{
        const result = getNumberFromString('absc');
        expect(result).toStrictEqual([0]);
    })
    it('string with comma separated string',()=>{
        const result = getNumberFromString('1,2,3,4');
        expect(result).toStrictEqual([1,2,3,4]);
    })
    it('string with new line  separated',()=>{
        const result = getNumberFromString('1\n2,3');
        expect(result).toStrictEqual([1,2,3]);
    })
    it('string with new special  separated',()=>{
        const result = getNumberFromString('1\n2,::3,\\4,5,6');
        expect(result).toStrictEqual([1,2,3,4,5,6]);
    })
})