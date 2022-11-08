const init = () => {
  const userProperties = PropertiesService.getUserProperties()
  userProperties.setProperties({
    'spreadSheetId': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  });
}