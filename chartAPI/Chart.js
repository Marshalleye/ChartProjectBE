import mongoose from "mongoose";

const Chart = new mongoose.Schema({
   tabs: [
      {
         tabName: { type: String, required: true },
         pointsInTab: [
            {
               point: {
                  pointNumber: { type: Number, required: true },
                  xAxis: { type: Number, required: true },
                  yAxis: { type: Number, required: true },
               },
            },
         ],
      },
   ],
});

export default mongoose.model("Chart", Chart);
