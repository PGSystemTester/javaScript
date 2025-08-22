# Automatted Copy Paste Values
The following steps will remove all formulas in an Excel workbook exactly is if a copy paste value was run on each worksheet. Note that `setValues` method is not used as that can interfere with date format on rare occassons.

## Steps
- Open workbook desired to set values
- Open the `Automate` tab in excel found in top ribon (see screenshots below)
- Click create `new script` (unless saved at which point open it up from library)
- A window pane on right will appear.
- Replace entire sample function with below code (full select call clear/ then paste in below).
- Click `Run`

## Code
````js
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
````
## Screenshots

<img width="739" height="191" alt="image" src="https://github.com/user-attachments/assets/a05dec0e-3984-4406-9b99-f8e099ec329c" />

<img width="501" height="802" alt="image" src="https://github.com/user-attachments/assets/c4ed40a2-5b43-4042-8843-25f7c397e961" />

