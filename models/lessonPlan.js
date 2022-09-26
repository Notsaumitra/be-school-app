const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  days: [
    {
      dayName: {
        type: String,
        required: true,
      },
      timeSlot: [
        {
          periodTime: { type: String, required: true },
          subject: {
            type: String,
            required: true,
          },
          taughtBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          topics: [{ type: String }],
        },
      ],
    },
  ],
  classId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Lesson", lessonSchema);
