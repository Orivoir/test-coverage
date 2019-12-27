/**
 * @export Function
 */
module.exports = function( val ) {

    val = parseFloat( val ) ;

    if( isNaN( val ) ) {

        return false;
    }

    return val * 2 ;
} ;
