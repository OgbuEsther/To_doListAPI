import theModel from "../model/todoModel";

import { Request, Response } from "express";

//general get method
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allTasks = await theModel.find();

    return res.status(200).json({
      message: "all data gotten",
      data: allTasks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get all tasks",
      dat: error,
    });
  }
};

//single get
const oneGet = async (req: Request, res: Response): Promise<Response> => {
  try {
    const one = await theModel.findById(req.params.id);

    return res.status(200).json({
      message: "single task gotten",
      data: one,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get all tasks",
      data: error,
    });
  }
};

//post method
const postTasks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, status, desc } = req.body;

    const newBook = await theModel.create({
      title,
      status,
      desc,
    });

    return res.status(201).json({
      message: "new task added",
      data: newBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to post new tasks",
      data: error,
    });
  }
};

//delete method
const removeOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const removeTasks = await theModel.findByIdAndRemove(req.params.id);

    return res.status(200).json({
      message: "deleted successfully",
      data: removeTasks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get all tasks",
      data: error,
    });
  }
};

//update method
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, status, desc } = req.body;
    const updates = await theModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        status,
        desc,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "tasks has been updated",
      data: updates,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get all tasks",
      data: error,
    });
  }
};

export { getAll, removeOne, postTasks, oneGet, update };
