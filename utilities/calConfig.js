function calcTable(year) {
    let arr = new Array(12); for (let m = 0; m < arr.length; m++) {
         arr[m] = new Array(6);
        
    }
    
    for (let x = 0; < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) { arr[x][y] = new Array(7);}
   
    }
}

for (let month = 0; month < arr.length; month++) {
    let startOfWeekDay= new Date(year, month, 0).getDay() + 1;

    let beforeCount = 0;
    let counter = 1;
    let startCount = false;

    for (let x = 0; < arr[month].length; x++) {      for (let y = 0; y < arr[month][x].length; y++) {
        
        if (beforeCount == startOfWeekDay) {
            startCount = true;
            
        } else { beforeCount++; }

        if (startCount==true) { arr[month][x][y] = counter;
                    counter++;
            
        } else {
                    arr[month][x][y] = "";
                }

                if (counter > monthLong) {
                    arr[month][x][y] = "";

                }
    }
    }
    return arr;
}

module.exports = calcTable