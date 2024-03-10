import conn from "./connection";

const nodeversionSchema = new conn.Schema({
    name: String,
    version: String,
    creation_date: { type: Date, default: Date.now },
    modified_date: { type: Date, default: Date.now }

});

const NodeVersionModal = conn.model('NodeVersions', nodeversionSchema);

export default NodeVersionModal;
