/**
 * Main entry point for the Office Script.
 * 
 * This script loops through all worksheets in the workbook
 * and replaces every formula with its current value, replicating
 * what a copy/paste/Value would accomplish
 *
 * @param {ExcelScript.Workbook} workbook - The Excel workbook the script runs on.
 */
function main(workbook: ExcelScript.Workbook) {
    const allSheets = workbook.getWorksheets();

    for (let ws of allSheets) {
        let zRange = ws.getUsedRange();

        //Note that using copy paste instead of set value to avoid date issues
        zRange.copyFrom(zRange, ExcelScript.RangeCopyType.values);
    }
}
