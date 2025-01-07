import crudModel from "../model/model.js";

export const create = async (req, res) => {
    const { name, email, phone, address } = req.body;

    try {
      
        if (!name || !email || !phone || !address) {
            return res.status(400).json({ msg: "All fields are required" });
        }
 
        const isExists = await crudModel.findOne({ email });
        if (isExists) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const crud = new crudModel({ name, email, phone, address });
        const savedData = await crud.save();

        return res.status(201).json({ msg: "Created Successfully", data: savedData });

    } catch (error) {

        return res.status(500).json({ msg: "Internal Error", error: error.message });
    }
};




export const getall=async(req,res)=>{
    try {
        
        const getdata=await crudModel.find()
        return res.status(200).json({getdata})
    } catch (error) {
        return res.status(500).json({ msg: "Internal Error", error: error.message });
    }

}


export const update = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
    try {
        const isExist = await crudModel.findById(id);
        if (!isExist) {
            return res.status(404).json({ msg: "User does not exist" });
        }
        const updatedData = await crudModel.findByIdAndUpdate(
            id,
            { name, email, phone, address },
            { new: true } 
        );
        return res.status(200).json({ msg: "Update Successful", data: updatedData });
    } catch (error) {
    
        return res.status(500).json({ msg: "Internal Error", error: error.message });
    }
};


export const del=async(req,res)=>{
    const {id}=req.params;
    try {
        const isExist = await crudModel.findById(id);
        if (!isExist) {
            return res.status(404).json({ msg: "User does not exist" });
        }
        const deletedata=await crudModel.findByIdAndDelete(id)
        return res.status(200).json({ msg: "Delete Successful", data: deletedata });

    } catch (error) {
        return res.status(500).json({ msg: "Internal Error", error: error.message });
    }


}

export const getone=async(req,res)=>{
    const {id}=req.params;
    try {
        const isExist = await crudModel.findById(id);
        if (!isExist) {
            return res.status(404).json({ msg: "User does not exist" });
        }
        const getdata=await crudModel.findById(id)
        return res.status(200).json( {data: getdata });
    } catch (error) {
         return res.status(500).json({ msg: "Internal Error", error: error.message });
    }

}