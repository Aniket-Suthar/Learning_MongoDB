const mongoose = require("mongoose");


//Connection to a existing database of making a new Database if doesn't exist
mongoose.connect("mongodb://0.0.0.0:27017/Mongo_Database", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Successful.. :) ")
    })
    .catch((err) => {
        console.log(err);
    })

/*
Amongoose modal is a wrapper on the Mongoose Schema,

A Mongoose Schema defines the structure of document,
default values,validatiors,etc., whereas a Mongoose modal
provides an interface to the database for creting,querying ,updating,
deleting records etc.
*/


//Defining Schema (Defining Structure of Table to be created)
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coursetyp: String,
    videos: Number,
    active: Boolean,
    author: String,
    date: {
        type: Date,

        //Setting the default value
        default: Date.now
    }
})


//Defining the mongoose modals
//i.e. Collection Creation(Tabele/Relation)
const Playlist = new mongoose.model("Playlist", playlistSchema);


//Creating or Inserting Document(DATA)
// const createDocument = async () => {
//     try {
//         const javaPlaylist = new Playlist({
//             name: "JAVA",
//             coursetyp: "Front And Back End",
//             videos: 100,
//             active: true,
//             author: "Aniket Suthar",
//         });

//         const result = await javaPlaylist.save();
//         console.log(result);

//     } catch (err) {
//         console.log(err);
//     }
// }

// createDocument();

//Adding multiple Documents
const createDocument = async () => {
    try {
        const jsPlaylist = new Playlist({
            name: "Javascript",
            coursetyp: "Front And Back End",
            videos: 120,
            active: true,
            author: "Aniket Suthar",
        });

        const pythonPlaylist = new Playlist({
            name: "PYTHON",
            coursetyp: "Front And Back End",
            videos: 10,
            active: true,
            author: "Aniket Suthar",
        });
        const NodePlaylist = new Playlist({
            name: "NodeJS",
            coursetyp: "Back End",
            videos: 1000,
            active: true,
            author: "Aniket Suthar",
        });
        const goPlaylist = new Playlist({
            name: "GoLang",
            coursetyp: "Back End",
            videos: 500,
            active: true,
            author: "Aniket Suthar",
        });

        const expressPlaylist = new Playlist({
            name: "ExpressJS",
            coursetyp: "Back End",
            videos: 400,
            active: true,
            author: "Aniket Suthar",
        });

        //Inserting Multiple DOcuments in collection
        const result = await Playlist.insertMany([jsPlaylist, pythonPlaylist, NodePlaylist, expressPlaylist, goPlaylist]);
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

createDocument();
