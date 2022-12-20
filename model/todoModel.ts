import mongoose from "mongoose";

interface IProps {
  title: string;
  status: string;
  desc: string;
}

interface props extends IProps, mongoose.Document {}

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  status: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const theModel = mongoose.model<props>("todoList", TodoSchema);

export default theModel;
