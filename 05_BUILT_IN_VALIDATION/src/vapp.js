const mongoose = require("mongoose");

//Connection to a existing database of making a new Database if doesn't exist
mongoose
  .connect("mongodb://0.0.0.0:27017/Mongo_Database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful.. :) ");
  })
  .catch((err) => {
    console.log(err);
  });

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,       //IMP = "UNIQUE" is not a Validator yet it works as Validator
    lowercase: true, //Validators
    trim:true,
    // minlength:[3,"Minimum 10 letter Requires"],
    // maxlength:30
  },
  coursetyp: {
    type:String,
    enum:["Front End","Back End"]
},
  videos: Number,
  active: Boolean,
  author: String,
  date: {
    type: Date,

    //Setting the default value
    default: Date.now,
  },
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
  try {
    const trimPlaylist = new Playlist({
      name: "VueJS",
      coursetyp: "UI/UX",
      videos: 300,
      active: true,
      author: "Aniket Suthar",
    });
    const result = await Playlist.insertMany([trimPlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

createDocument()
