// data.json 生成文件
var fs = require('fs');
var data = {}
var start = Math.floor(new Date(2015, 0, 1).getTime()/1000)
for(var i = 0; i < 365; i++) {
  data[start + i * 86400] = Math.floor(Math.random()*50)
}
data = JSON.stringify(data, null, '\t')
fs.writeFile('data.json', data, (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});
