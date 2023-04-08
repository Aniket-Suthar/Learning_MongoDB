const mongoose = require("mongoose");


//Connection to a existing database of making a new Database if doesn't exist
mongoose.connect("mongodb://0.0.0.0:27017/Mongo_Database", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Successful.. :) ")
    })
    .catch((err) => {
        console.log(err);
    })


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


const Playlist = new mongoose.model("Playlist", playlistSchema);

//READING DOCUMENT FROM COLLECTION
// const getDocument = async ()=>{
//     try{
//         const result=await Playlist.find({coursetyp:"Back End"})
//         .select({name:1})
//         .limit(1);
//         console.log(result);

//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();



//COMPARISON OPERATOR
// const getDocument = async () => {
//     try {
//         const result = await Playlist.find({
//      $or: [       //$or: //$nor:  //$not: 
//                 { coursetyp: "Back End" },
//                 { author: "Aniket Suthar" }
//             ]
//         })
//         console.log(result);

//     } catch (err) {
//         console.log(err);
//     }
// }


//SORTING AND COUNTING
const getDocument = async () => {
    try {
        const result = await Playlist.find({
            $and: [       //$or: //$nor:  //$not: 
                { coursetyp: "Back End" },
                { author: "Aniket Suthar" }
            ]
        })
            .select({ name: 1 })
            .sort({name:-1});  //Sorting in DESC / for ASC = 1
            // .countDocuments(); //COUNTING
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}


getDocument();