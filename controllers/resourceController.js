// controllers/ResourceController.js

const Resource = require('../models/resourceModel');

exports.getItems = async (req, res, next) => {
    try {
        const items = await Resource.find({});
        console.log("List fetched successfully");
        res.status(200).json({
            success: "true",
            message: "List fetched successfully",
            data: items
        });
    } catch (error) {
        console.log("Unable to fetch list");
        next(error);
        res.status(500).json({
            success: "false",
            message: "Unable to fetch list",
            error: error
        });
    }
}

exports.postItem = async (req, res, next) => {
    console.log(req.body.firstname);
    try{
        const item = new Resource({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            location:req.body.location,
            skillDomain:req.body.skillDomain
        });
        if(req.body.firstname === undefined || req.body.firstname === "undefined" || req.body.firstname === ""){
            res.status(500).json({
                success: "false",
                message: "Parameter firstname missing."
            });
            return;
        }else if(req.body.lastname === undefined || req.body.lastname === "undefined" || req.body.lastname === ""){
            res.status(500).json({
                success: "false",
                message: "Parameter lastname missing."
            });
            return;
        }
        else if(req.body.skillDomain === undefined || req.body.skillDomain === "undefined" || req.body.skillDomain === ""){
            res.status(500).json({
                success: "false",
                message: "Parameter skillDomain missing."
            });
            return;
        }
        else if(req.body.location === undefined || req.body.location === "undefined" || req.body.location === ""){
            res.status(500).json({
                success: "false",
                message: "Parameter location missing."
            });
            return;
        }
        const savedItem = await item.save();
        res.status(200).json({
            success: "true",
            message: "Item created successfully",
            data: savedItem
        });
    }catch(err){
        next(err);
        res.status(500).json({
            success: "false",
            message: "Unable to create item",
            error: err
        });
    }
};

exports.getItem = async (req, res, next) => {
    try {
        const itemId = req.params.itemId;
        console.log('itemId ===', itemId);
        const item = await Resource.findById(itemId);
        if (!item){
            console.log('item does not exist');
            res.status(500).json({
                success: "false",
                message: "item does not exist",
                error: error
            });
        }else{
            console.log("item details fetched");
            res.status(200).json({
                success: "true",
                message: "item details fetched",
                data: item
            });
        }
    } catch (error) {
        console.log('Unable to get item details');
        next(error);
        res.status(500).json({
            success: "false",
            message: "Unable to get item details",
            error: error
        });
    }
};
 
exports.updateItem = async (req, res, next) => {
    try {
        const reqdata = req.body;
        const itemId = req.params.itemId;
        await Resource.findByIdAndUpdate(itemId, reqdata);
        const resource = await Resource.findById(itemId);
        if (!resource){
            console.log("Resource does not exist");
            res.status(500).json({
                success: "false",
                message: "Resource does not exist"
            });
        }else{
            console.log('Resource has been updated');
            res.status(200).json({
                success: "true",
                message: 'Resource has been updated',
                data: resource
            });
        }
    } catch (error) {
        console.log("Unable to update Resource", error);
        next(error);
        res.status(500).json({
            success: "false",
            message: "Unable to update Resource"
        });
    }
};
 


exports.deleteItem = async (req, res, next) => {
 try {
    const itemId = req.params.itemId;
    const item = await Resource.findById(itemId);
    if (!item)
        res.status(500).json({
            success: "false",
            message: "Item does not exist"
        });
    else{
        await Resource.findByIdAndDelete(itemId);
        res.status(200).json({
            success: "true",
            message: 'Item has been deleted'
        });
    }
} catch (error) {
    console.log("Unable to delete item");
    next(error);
    res.status(500).json({
        success: "false",
        message: "Unable to delete item"
    });
}
};






