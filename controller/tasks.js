const task = require('../Module/taske')
//const task= require('../Module/task')

const getallitems = async (req,res)=>{
   try {
    const Tasks = await task.find({})
    //console.log(Tasks);
    res.status(200).json({Tasks})

   } catch (error) {
    res.status(500).json({msg:error})
   }
    //res.send('BIG BOOBS')
}

const createtask = async (req,res)=>{
   try {
       const Task = await task.create(req.body)
       res.status(201).json({Task})

   } catch (error) {
    res.status(500).json({msg:error})
   }
    // res.send('create task')
}

const gettask = async(req,res)=>{
    try {
        const{id:taskID}= req.params
        const Task =await task.findOne({_id:taskID})
        if(!Task)
        {
            return res.status(404).json({msg:`no id value ${taskID}`})
        }
        res.status(200).json({Task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
    //res.send('get single task')
}


const deletetask = async(req,res)=>{
    try {
        const{id:taskID}= req.params
        const Task =await task.findOneAndDelete({_id:taskID})
        if(!Task)
        {
            return res.status(404).json({msg:`no id value ${taskID}`})
        }
        res.status(200).json({Task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    //res.send(' delete task')
}

const updatetask = async(req,res)=>{
    try {
        const{id:taskID}= req.params
        const Taskr =await task.findOneAndUpdate({_id:taskID}, req.body ,{new:true , runValidators:true})
        if(!Taskr)
        {
            return res.status(404).json({msg:`no id value ${taskID}`})
        }
        res.status(200).json({Taskr})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    // res.send('update task')
}


module.exports ={
    getallitems,createtask,gettask,updatetask,deletetask
}