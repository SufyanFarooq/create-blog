
import multer from "multer";
import {GridFsStorage} from 'multer-gridfs-storage';    

const storage= new GridFsStorage({
    url:'mongodb://user:Sufi2580@blogweb-shard-00-00.rjl2w.mongodb.net:27017,blogweb-shard-00-01.rjl2w.mongodb.net:27017,blogweb-shard-00-02.rjl2w.mongodb.net:27017/BLOGWEB?ssl=true&replicaSet=atlas-4yxbo2-shard-0&authSource=admin&retryWrites=true&w=majority',
    options:{useNewUrlParser:true, useUnifiedTopology:true},
    file:(request, file)=>{
        const match=["image/png", "image/jpg", "image/jpeg" ];
        // console.log(file.orignalname)
        if(match.indexOf(file.mimetype )=== - 1)
        return `${Date.now()}-blog-${file.originalname}`;
    
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    
    }

})

export default multer({storage})