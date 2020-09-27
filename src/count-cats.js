function countCats (array2D) {

    array2D =[];

    count = 0;

    for (i=0; i < array2D.length; i++) {
        if ( array2D[i] === '^^' ) {
            count += 1;
        }
    }
    return count;
}