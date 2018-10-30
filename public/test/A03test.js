QUnit.test('Testing the new ageCalculator function with four sets of inputs', function (assert) {
    //assert.equal();
    console.log(assert)
    assert.equal(getAge("09/11/1995" ), "23", "SUCCESS" );
    assert.equal(getAge("11/11/1995" ), "22", "SUCCESS" );
    assert.equal(getAge("10/31/1995" ), "22", "SUCCESS" );
    assert.equal(getAge("13/11/2020" ), "invalid", "SUCCESS" );
});




