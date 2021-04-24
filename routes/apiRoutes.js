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

            let num = 1
            noteData.forEach((note, index) => {
                note.id = num;
                num++;
                return noteData;
            });

            fs.writeFile('./db/db.json', JSON.stringify(noteData), (err, data) => {
                if(err) throw err;
            });
        });
        res.send('Note received!');
    })
}