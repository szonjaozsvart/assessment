function whereTheMagicHappens(givenNumber) {
  let oneToNineteen = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ',
  'twelve ', 'thirteen  ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  let tyes = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  let veryBig = ['thousand', 'million', ''];
  
  givenNumber = givenNumber.toString();
  
  givenNumber = ( '000000000' + givenNumber ).slice( -9 ); 
  givenNumber = givenNumber.match( /.{3}/g ); 
  
  let words = '';
  
  for( let i = 0; i < veryBig.length; i++ ) {
      let number = givenNumber[i];
      let str = '';
      str += ( words != '' ) ? '' + veryBig[veryBig.length-1-i] + ' ' : '';
      str += ( number[0] != 0 ) ? ( oneToNineteen[Number( number[0] )] + 'hundred ' ) : '';
      number = number.slice( 1 );
      if(number[number.length-1] === '0') {
        str += ( number != 0 ) ? ( ( str != '' ) ? 'and ' : '' ) + (oneToNineteen[Number(number)] || tyes[number[0]] + ' ' + oneToNineteen[number[1]] ) : '';
      } else {
        str += ( number != 0 ) ? ( ( str != '' ) ? 'and ' : '' ) + (oneToNineteen[Number(number)] || tyes[number[0]] + '-' + oneToNineteen[number[1]] ) : '';
      }
      words += str;
  }
  return words
}

export default whereTheMagicHappens;