
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const vaultSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   type: String,
   credentials: String,
   user-id: String
})

const vaultModel = mongoose.model('vault', vaultSchema, 'vault');
export default vaultModel;
