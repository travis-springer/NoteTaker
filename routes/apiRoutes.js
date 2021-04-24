//DEPENDENCIES
const fs = require('fs');

module.exports = (app) => {
//GET for pulling notes
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if(err) throw err;
            res.send(JSON.parse(data));
        })
    });
//POST for adding notes
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;

        fs.readFile('./db/db.json', (err, data) => {
            if(err) throw err;
            noteData = JSON.parse(data);
            noteData.push(newNote);
            //Adding id numbers
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
    
//DELETE for removing notes
    app.delete('/api/notes/:id', (req, res) => {
        const deleteNoteID = req.params.id;

        fs.readFile('./db/db.json', (err, data) => {
            if(err) throw err;
            noteData = JSON.parse(data);
            for (let i=0; i < noteData.length; i++) {
                if (noteData[i].id === Number(deleteNoteID)) {
                    noteData.splice([i], 1);
                }
            }
            fs.writeFile('./db/db.json', JSON.stringify(noteData), (err, data) => {
                if(err) throw err;
            });
        });
        res.status(204).send();
    });
}