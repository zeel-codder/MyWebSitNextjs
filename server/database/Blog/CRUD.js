/* eslint-disable no-unused-vars */
const Database = require('../DataBaseConnection');
const {BlogInfo}=Database;


  
const DemoData = {

    "name": "How-Send-Email-in-next-js-app-With-Email-js-module",
    "title": "How Send Email in next js app With Email js module?",
    "img": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    "like": 0,
    "topic": "next-js",
    "creator":"zeelprajapati321@gmail.com"
}


const AddNewBlog = async (data) => {

    if (data == null) {
        await add(DemoData, BlogInfo);
    
    } else {
        return await add(data, BlogInfo);
    }
}


// const add = async (data, Modal) => {

//     const {username,email} = data;
  
//     try{
//         const item= await Modal.find({ username,email })
      
//         if(item!==null){
//             return null;
//         }

//         let document =  new Modal(data);

//         return await document.save();

//     }catch(e){
      
//         return null;
//     }
// }

const add = async (data, Modal) => {

    const name = data.name;
  
    try{
        const item= await Modal.findOne({ name })
      
        if(item!==null){
            return null;
        }
        let document =  new Modal(data);
        return await document.save();

    }catch(e){
      
        return null;
    }


}


const GetBlogList = async () => {


    try {
        const data = await BlogInfo.find({});
        return data;
    } catch {
        return 'Error';
    }

}



const GetOneBlogInformation = async (name) => {

    try {

        const data = await BlogInfo.findOne({
            name
        });
        return data;
    } catch {
        return 'Error';
    }

}



const GetBlogAndUpDate = async (filter, Update) => {

    const {
        name
    } = filter;


    try {
        const doc = await BlogInfo.findOne({
            name
        });

        return await BlogInfo.update({ _id: doc._id }, { ...Update });

      
    } catch {
        return 'Error'
    }
}








exports.add = add;
exports.AddNewBlog  = AddNewBlog ;
exports.GetBlogList = GetBlogList;
exports.GetBlogAndUpDate  = GetBlogAndUpDate ;

exports.GetOneBlogInformation = GetOneBlogInformation;