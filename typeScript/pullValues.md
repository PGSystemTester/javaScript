## Pulling Data From Excel File
- Data must be in string format a `json`
- Run on any file as paramter.

### Formula
````js
function main(workbook: ExcelScript.Workbook,pullRngAddress?: string) {
 /*
 acquire Values from worksheet
const pullRange = ws.getRange(pullRngAddress);
 var transferValues = pullRange.getValues();
  optionally could send [['no data]];
*/
  var transferValues = pullRange.getValues();
  //sends value as json
  return { transferValues };
}
````
## Dropping To Other File
- Run power automate
- Get output of script step from before
- Create text paramater for paramater `strArr`
    - use Compose for ultimate input variable of: `@{outputs('CopyData')?['body/result/transferValues']}`

### Generic insert values
````js
function main(workbook: ExcelScript.Workbook,
      sheetName: string,
      topLeftAddress: string,
      strArr: string) {
    let newDataArr: string[][] = JSON.parse(strArr);
    const ws = workbook.getWorksheet(sheetName);
    const startCell = ws.getRange(topLeftAddress).getCell(0, 0);
    const rowCount = newDataArr.length;
    const colCount = newDataArr[0].length;
    const pasteZone = startCell.getResizedRange(rowCount - 1, colCount - 1);
    pasteZone.setValues(newDataArr);
}
````



