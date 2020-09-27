function countCats (backyard) {

    let count = 0;

    for (i=0; i < backyard.length; i++) {
        if ( backyard[i] === '^^' ) {
            count += 1;
        }
    }
    return count;
}
