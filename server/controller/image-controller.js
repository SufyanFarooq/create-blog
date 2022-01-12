import grid from 'gridfs-stream';
import mongoose from 'mongoose';
let url='http://localhost:8000';
let gfs;
let gridFsBucket;
const conn=mongoose.connection;
conn.once('open', ()=>{
    gfs= grid(conn.db, mongoose.mongo);
    // console.log("connected", gfs)
    gfs.collection('photos');
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'file'
      });
})
export const uploadImage=(request, responce)=>{
    try{
        
        if(!request.file){
            return responce.status(404).json("File not found");
        }
        
        const imageURL= `${url}/file/${request.file.filename}`;
        console.log(request.file.filename)
        responce.status(200).json(imageURL);
    }catch(error){
        responce.status(500).json(error);
    }
}

export const getImage=async(req, res)=>{
    try{
    //   let file= await  gfs.files.findOne({filename:req.params.filename});
     let readStream= await gfs.createReadStream(req.params.filename);
     readStream.pipe(res);
    }catch(error){
       res.status(500).json("Fialed to fetch the image", error)
    }
}