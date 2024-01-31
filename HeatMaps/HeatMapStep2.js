function main(workbook: ExcelScript.Workbook) {

    //CHART WORKSHEET
    
        let chartSheet = workbook.getWorksheet("Chart");
    
        // auto fill range start time
        chartSheet.getRange("C1").setValue("12:00 AM")
        chartSheet.getRange("C1").autoFill("C1:Z1", ExcelScript.AutoFillType.fillDefault);
    
        //auto fill range end time
        chartSheet.getRange("C2").setValue("1:00 AM")
        chartSheet.getRange("C2").autoFill("C2:Z2", ExcelScript.AutoFillType.fillDefault);
    
        //format time
        chartSheet.getRange("C1:Z1").setNumberFormatLocal("h:mm:ss;@");
        chartSheet.getRange("C2:Z2").setNumberFormatLocal("h:mm:ss;@");
    
        // Auto fill range date 
        chartSheet.getRange("B4").autoFill("B4:B34", ExcelScript.AutoFillType.fillDefault);
    
    
        // Auto fill range day
        chartSheet.getRange("A4").autoFill("A4:A34", ExcelScript.AutoFillType.fillDefault);
    
        
    
    
    }