describe('Factorial App Tests', function() {
    var lib;
    var val = {
        person: {
            address: {
                city: 'Baton Rouge'
            }
        }
    };

    beforeEach(function() {
        lib = Lib();
    });

    it('should exist!', function() {
        expect(lib).toBeDefined();
    });

    it('should coerce a non-string parameter', function() {
        expect(lib.check(val)).toBe(true);
    });

    it('should pass on existing deep property', function() {
        var test = 'person.address'
        expect(lib.check(test, val)).toBe(true);
    });

    it('should fail on non-existing deep property', function() {
        var test = 'person.address.state'
        expect(lib.check(test, val)).toBe(false);
    });

    it('should pass on existing really deep property', function() {
        var test = 'person.address.city'
        expect(lib.check(test, val)).toBe(true);
    });
});
