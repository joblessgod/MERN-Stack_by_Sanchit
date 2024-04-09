const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const AnnouncementSchema = new Schema({
        title: String,
        description:String,
        
},
{
    timestamps:true
}
)

const Announcement = mongoose.model("Announcement", AnnouncementSchema)
module.exports = Announcement
