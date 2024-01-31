function main(workbook: ExcelScript.Workbook) {
	let selectedSheet = workbook.getWorksheet("CHART");
	// Set range B36:C36 on selectedSheet
	selectedSheet.getRange("B36:C36").setFormulasLocal([["TOTALS: ","=SUM(C4:C34)"]]);
	// Set fill color to 757171 for range B36 on selectedSheet
	selectedSheet.getRange("B36").getFormat().getFill().setColor("757171");
	// Auto fill range
	selectedSheet.getRange("C36").autoFill("C36:Z36", ExcelScript.AutoFillType.fillDefault);
	// Set range AB4 on selectedSheet
	selectedSheet.getRange("AB4").setFormulaLocal("=SUM(C4:Z4)");
	// Auto fill range
	selectedSheet.getRange("AB4").autoFill("AB4:AB31", ExcelScript.AutoFillType.fillDefault);
	// Auto fill range
	selectedSheet.getRange("AB31").autoFill("AB31:AB34", ExcelScript.AutoFillType.fillDefault);
	// Set range AA35:AB36 on selectedSheet
	selectedSheet.getRange("AA35:AB36").setFormulasLocal([[null,"=SUM(AB4:AB34)"],["=SUM(C36:Z36)",""]]);
	// Set fill color to 8EA9DB for range AA36 on selectedSheet
	selectedSheet.getRange("AA36").getFormat().getFill().setColor("8EA9DB");
	// Set fill color to A9D08E for range AB35 on selectedSheet
	selectedSheet.getRange("AB35").getFormat().getFill().setColor("A9D08E");

	let conditionalFormatting: ExcelScript.ConditionalFormat;

	// Change color scale from range C4:Z34 on selectedSheet
	conditionalFormatting = selectedSheet.getRange("C4:Z34").addConditionalFormat(ExcelScript.ConditionalFormatType.colorScale);
	conditionalFormatting.getColorScale().setCriteria({ minimum: { color: "#63BE7B", type: ExcelScript.ConditionalFormatColorCriterionType.lowestValue, }, midpoint: { color: "#FFEB84", formula: '=50', type: ExcelScript.ConditionalFormatColorCriterionType.percentile, }, maximum: { color: "#F8696B", type: ExcelScript.ConditionalFormatColorCriterionType.highestValue, }, });
}