function alphabetConvert(num: number) {
    var s = '';
    var t: number;
  
    while (num > 0) {
      t = (num - 1) % 26;
      s = String.fromCharCode(65 + t) + s;
      num = (num - t) / 26 | 0;
    }
    return s || undefined;
  }
  
  function main(workbook: ExcelScript.Workbook) {
    let table = workbook.getTable("Information");
    let infoRange = table.getRange();
    let values = infoRange.getValues();
  
  
    let username = String(values[1][0]);
    let date = values[1][1];
    let item = String(values[1][2]);
  
    let wb = workbook.getWorksheet("Tracker");
    //let sheet = workbook.getTable("TT");
    let usedRange = wb.getRange("A1:R85");
    let usedRangeValues = usedRange.getValues();
  
    let i: number;
    let k: number;
    let str: string;
    let str1: string;
  
    for (i = 0; i < 19; i++) {
      str = usedRangeValues[0][i].toString();
      if (str == username) break;
    }
  
    for (k = 0; k < 85; k++) {
      str1 = usedRangeValues[k][0].toString();
      if (str1.includes(item)) break;
    }
  
    console.log("Name Grabbed:" + str);
    console.log("Item Grabbed:" + str1);
    
    k = k + 1;
    i = i + 1;
  
    let cell = alphabetConvert(i);
    cell = cell + k;
  
    console.log(cell);
  
    // wb.getCell(k, i).setValue(date);
    wb.getRange(cell).setValue(date);
    console.log("\nCell is now: " + wb.getRange(cell).getValue());
  
    // Delete 1 row(s) at index 0 from table information
    table.deleteRowsAt(0, 1);
  
  } 