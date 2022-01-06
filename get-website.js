var fs = require('fs');
var content = fs.read('automation_config');
var site = content.split('\n')[0].trim() 
var webPage = require('webpage');
var page = webPage.create();


page.open(site, function(status) {
  console.log(site)
  console.log(page.content);
  phantom.exit();
});