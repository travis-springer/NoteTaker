//DEPENDENCIES
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if(err) throw err;
            res.send(JSON.parse(data));
        })
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;

        fs.readFile('./db/db.json', (err, data) => {
            if(err) throw err;
            noteData = JSON.parse(data);
            noteData.push(newNote);

            fs.writeFile('./db/db.json', JSON.stringify(noteData), (err, data) => {
                if(err) throw err;
            });
        });
        res.send('Note received!');
    })
}