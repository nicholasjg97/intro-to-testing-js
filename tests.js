// Unit tests for the helloWorld function
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;

describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed' , function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('when true, should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('when false, should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });

})

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isFive(5)).toBe('boolean');
        expect(typeof isFive(0)).toBe('boolean');
    });
    it('should return true when passed the number 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false for -3', function () {
        expect(isFive(-3)).toBe(false);
    });
    it('should return false for 6', function () {
        expect(isFive(6)).toBe(false);
    });
    it('should return false for ' + randomNegativeNumber, function () {
        expect(isFive(randomNegativeNumber)).toBe(false);
    });
    it('returns true for the string number "5".', function () {
        expect(isFive("5")).toBe(true);
    });
})