var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var webpages={
    'first':{
        title:`First Article`,
        head :`This is My First Article`,
        date: `15th Aug 2017`,
        content:`<p>Hi !....THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE. THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE.THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE. THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE.
                </p>
                <p>Hi !....THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE. THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE.THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE. THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE.
                </p>
                <p>Hi !....THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE. THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE.THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE. THIS IS SO EXCITED ME TO WRITE MY FIRST ARTICLE.
                </p>`
        
    },
    'second':{
        title:`Second Article`,
        head :`This is My Second Article`,
        date: `20th Aug 2017`,
        content:`Hi !....This is Second time trying to write my Second article`
    },
    
    'third':{
        title:`Third Article`,
        head :`This is My Third Article`,
        date: `31th Aug 2017`,
        content:`Hi !....This is Third time trying to write my Third article`
    },
    
}



function createHTMLtemplate(data){
    var Title=data.title;
    var heading= data.head;
    var Date= data.date;
    var content= data.content;
    var htmltemplate =`<html>
    <head>
        <title>${Title}; </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
        
        
    </head>
    
    <body>
        <div class=totalbody>
            <div>
                 <a href='/'>Home</a>
            </div>
            <hr/>
            <div>
                <h3>
                    ${heading};
                </h3>
            </div>
                <p> ${Date};</p>
            <div>
                <p>
                ${content};
                </p>
            </div>
        </div>
    </body>
</html>`
;
  return htmltemplate;  
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) {
    var articlename= req.params.articlename;
  res.send(createHTMLtemplate(webpages[articlename]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
