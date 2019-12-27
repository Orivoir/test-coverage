const
    {assert,expect} = require('chai')
    ,appTest = require('./../app')
;

describe('test return () => number' , () => {

    const val = appTest( 2 ) ;

    it('should be an number' , () => {

        assert.isNumber( val ) ;
    } ) ;

    it('should be equal 4' , () => {

        expect( val ).to.be.equal( 4 ) ;
    } ) ;

} ) ;

describe('error arg' , () => {

    const valError = appTest( 'le chat aime les arbres .' ) ;

    it('should be an boolean' , () => {

        assert.isBoolean( valError ) ;

    } ) ;

    it('should be equal to false' , () => {

        expect( valError ).to.be.equal( false ) ;

    } ) ;

} ) ;
