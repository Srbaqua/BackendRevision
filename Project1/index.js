const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", 'ejs')


app.get('/', function (req, res) {
    fs.readdir("./files", function (err, files) {
        res.render('index', { files: files });
    })
})

app.post('/create', function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.content, function (err) {
        if (err) console.log(err);
        res.redirect('/');
    });
})


app.get('/files/:filename', function (req, res) {
    console.log("Requested:", req.params.filename);
    fs.readFile(`./files/${req.params.filename}.txt`, "utf-8", function (err, filedata) {
        if (err) {
            console.log(err);
            return res.status(404).send("File not found");
        }
        console.log(filedata);
        res.render('show', { filename: req.params.filename, filedata: filedata });
    })
})

app.post('/edit', function (req, res) {
    fs.rename(`./files/${req.body.oldname}.txt`, `./files/${req.body.newname}.txt`, function (err) {
        console.log(err);
    })
    return res.redirect('/');
})

app.get('/edit/:filename', function (req, res) {
    res.render('edit', {
        filename: req.params.filename
    });
});

app.listen(3000);