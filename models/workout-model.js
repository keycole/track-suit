const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
        type: {
            type: String,
            required: "You must select an exercise type."
        },
        name: {
            type: String,
            trim: true,
            required: "You must give your exercise a name."
        },
        duration: {
            type: Number,
            trim: true,
            required: "Duration is required."
        },
        weight: {
            type: Number,
            trim: true
        },
        reps: {
            type: Number,
            trim: true
        },
        sets: {
            type: Number,
            trim: true
        },
        distance: {
            type: Number,
            trim: true
        },
        totalDuration: {
            type: Number
        }
    }
  ],
//   totalDuration: {
//       type: Number
//     }
});

WorkoutSchema.methods.totalDuration = function() {
    this.totalDuration = this.exercises[0].reduce((total, exercise) => {
        return total + exercise.duration;
    });
  
    return this.totalDuration;
  };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;