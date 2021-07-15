// Unit tests for the helloWorld function
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;
const randomBoolean = Boolean(Math.round(Math.random()))
const randomNumber = Math.ceil(Math.random() * 100)

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

describe('isEven', function () {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isEven(randomNumber)).toBe('boolean');
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true);
    })
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    })
    it('should return false when passed the number 3', function () {
        expect(isEven(3)).toBe(false);
    })
    it('should return false when passed with a non-numeric string like "bananas"', () => {
        expect(isEven("bananas")).toBe(false);
    })
    it('should return true when passed 8', function () {
        expect(isEven(8)).toBe(true);
    })
    it('should return false when passed infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed the boolean value ' + randomBoolean, function () {
        expect(isEven(randomBoolean)).toBe(false);
    })
    it('should return false when passed without an argument', function () {
        expect(isEven()).toBe(false);
    });
})

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    })
    it('should return a boolean value', function () {
        expect(typeof isVowel(randomBoolean)).toBe('boolean');
    })
    it('should return "a" true', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return "A" true', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return "y" true', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return 4 false', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false for the boolean "true" and "false"', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false for string "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    })
    it('should return false when passed without an argument', function () {
        expect(isVowel()).toBe(false)
    });
})

describe('add', function () {
    it("should be a define function", function () {
        expect(typeof add).toBe('function');
    })
    // it('should return sum of two numbers as long as each input is a number or a string containing a number', function () {
    //     expect(add()).toBe;
    // });
    it('should return 5 for sum of 2 and 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 for sum of -3 and -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 for sum of "5" and 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 for sum of "-4" and "10"', function () {
        expect(add("-4", 10)).toBe(6);
    });
    it('should return NaN for "banana" and "split"', function () {
        expect(add("banana", "split")).toBe(NaN);
    });
    it('should return NaN for 2 and "apples"', function () {
        expect(add(2, "apples")).toBe(NaN);
    });
    it('should return NaN when there is no entered argument', function () {
        expect(add()).toBe(NaN);
    });
})