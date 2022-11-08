const init = () => {
  const userProperties = PropertiesService.getUserProperties()
  userProperties.setProperties({
    spreadSheetId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  })
}

const settingSpreadSheet = () => {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getSheetByName('SheetName')
  const lastRow = sheet.getLastRow()
  const range = sheet.getRange('A1:B1').setValues([xxx])
}