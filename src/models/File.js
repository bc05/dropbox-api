import mongoose from "mongoose";

const File = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

File.virtual("url").get(function() {
  const url =
    process.env.URL || `http://localhost:3000/files/${encodeURIComponent(this.path)}`;

  return url;
});

export default mongoose.model("File", File);
