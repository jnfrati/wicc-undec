import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

type HandlerFunction = (req: NextApiRequest, res: NextApiResponse) => unknown;

const connectDB = (handler: HandlerFunction) => async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<unknown> => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGO_PASS}@wicc.t6k4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  );

  return handler(req, res);
};

export default connectDB;
