import greet from "#/greet";
import parent from "#/class";
import child from "#/extend";

describe('関数のテスト', (): void => {
    test('should say hello to Tom.', (): void => {
        const response: string = greet('Tom');
        expect(response).toBe('Hello, Tom!');
    });
    test('should say hello to Sam.', (): void => {
        const response: string = greet('Sam');
        expect(response).toBe('Good morning, Sam!');
    });
})

describe('Classのテスト', (): void => {
    test('class test', (): void => {
        let instance = new parent();
        expect(instance.a).toBe(1);
    });
    test('method test', (): void => {
        let instance = new parent();
        expect(instance.method_a()).toBe("-parent_method_a");
    });
    test('override test', (): void => {
        let instance = new child();
        expect(instance.method_a()).toBe("child_method_a");
    });
})
