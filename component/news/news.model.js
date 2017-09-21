/**
 * Created by lcom21 on 15/9/17.
 */

import mongoose from 'mongoose'


var newsSchema = new mongoose.Schema({
    category: {type: String},
    title:{ type: String  },
    description: {type: String},
    createdDate: {type: Date, default: Date.Now}
})

export default mongoose.model('News',newsSchema)

