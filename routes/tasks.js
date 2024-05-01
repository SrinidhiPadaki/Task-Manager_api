const express = require('express')
const router = express.Router()

const {getallitems,createtask,updatetask,gettask,deletetask} = require('../controller/tasks')

router.route('/').get(getallitems).post(createtask)
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask)

module.exports = router