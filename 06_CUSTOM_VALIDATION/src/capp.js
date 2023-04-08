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
    unique: true, //IMP = "UNIQUE" is not a Validator yet it works as Validator
    lowercase: true, //Validators
    trim: true,
    // minlength:[3,"Minimum 10 letter Requires"],
    // maxlength:30
  },
  coursetyp: {
    type: String,
    enum: ["Front End", "Back End"],
  },
  videos: {
    type: Number,
    // validate(value) {
    //   //Adding CUstom Validation
    //   if (value < 0) {
    //     throw new Error("Videos Can't be negative");
    //   }
    // }

    //2 METHOD
    validate: {
      validator: function (value) {
        return value.length < 0;
      },
      message: "Videos count should not be negative",
    },
  },
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
      coursetyp: "Front End",
      videos: -5, //Custom Validation
      active: true,
      author: "Aniket Suthar",
    });
    const result = await Playlist.insertMany([trimPlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
