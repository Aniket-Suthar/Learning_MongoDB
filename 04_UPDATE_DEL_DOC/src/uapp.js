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
  },
  coursetyp: String,
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

// const updateDocument = async (_id) => {
//     try {
//         const result = await Playlist.updateOne({ _id }, {
//             $set: {
//                 coursetyp: "Front End"
//             }
//         });
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

//ANOTHER WAY TO UPDATE
const updateDocument = async (_id) => {
  try {
    const result = await Playlist.findByIdAndUpdate(
      { _id },
      {
        $set: {
          coursetyp: "Front End Work",
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

//UPDATING THE DOCUMENT
updateDocument("6421ddaae431381aab4408fe"); //inserting id

const deleteDocument = async (_id) => {
  try {
    const result = await Playlist.deleteOne({ _id });   //also we can use findByIdAndDelete({_id})
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

//DELETING DOCUMENT
deleteDocument("6421ddaae431381aab4408fe");