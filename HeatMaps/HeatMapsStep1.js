// flow will create new workbook each month
// flow will create worksheet named "Chart"
// flow will add in month and first day

function main(workbook: ExcelScript.Workbook) {
	let selectedSheet = workbook.getWorksheet("Raw Data");
	let chartSheet = workbook.getWorksheet("CHART");

//RAW DATA WORKSHEET

	// Delete range A-I except C -- Unneccessary data we donʻt need
	selectedSheet.getRange("D:J").delete(ExcelScript.DeleteShiftDirection.left);
	selectedSheet.getRange("A:B").delete(ExcelScript.DeleteShiftDirection.left);


	// Set width of column(s) at range A:A on selectedSheet to 110.25
	selectedSheet.getRange("A:A").getFormat().setColumnWidth(110.25);

	// Sort the range range A:A on selectedSheet
	selectedSheet.getRange("A:A").getSort().apply([{ key: 0, ascending: true }], undefined, false, ExcelScript.SortOrientation.rows);

	// Paste to range B:B on selectedSheet from range A:A on selectedSheet
	selectedSheet.getRange("B:B").copyFrom(selectedSheet.getRange("A:A"), ExcelScript.RangeCopyType.all, false, false);

	// Set number format for range A:A on selectedSheet
	selectedSheet.getRange("A:A").setNumberFormatLocal("m/d/yyyy");
	// Set number format for range B:B on selectedSheet
	selectedSheet.getRange("B:B").setNumberFormatLocal("h:mm:ss;@");
	// Set range A1:B1 on selectedSheet
	selectedSheet.getRange("A1:E1").setValues([["Date","Time","Date2","Time2","Hour"]]);


	selectedSheet.getRange("C:C").setNumberFormat("d");

	selectedSheet.getRange("C:C").setNumberFormat("@");


// CHART WORKSHEET

	//Set Headers
	chartSheet.getRange("B1").setValue("Start Time");
	chartSheet.getRange("B2").setValue("End Time");
	chartSheet.getRange("A3").setValue("Day");
	chartSheet.getRange("B3").setValue("Date");

	// set cell format in date column
	chartSheet.getRange("B4:B34").setNumberFormatLocal("[$-en-US]d-mmm;@");



	// flow will add information


}