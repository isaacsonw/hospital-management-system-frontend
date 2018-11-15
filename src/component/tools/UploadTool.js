import Promise from "bluebird"
export default (url,data,uploadProgress,destination)=>{
    return new Promise((resolve, reject)=> {
        let xhr = new XMLHttpRequest();
        let fd = new FormData();
        fd.append('passport', data);
        fd.append('destination', destination);
        let uploadFailed=(evt)=> {
            let {response} = evt.target;
            try{
                reject({type:"responseError",data:"Error response received from server",response:!response ? "Network error occurred trying to upload":response})
            }catch (e) {
                reject({type:"jsonError",data:"Data response from server not a valid json",response:null})
            }
        };
        let uploadCanceled=(evt)=> {
                reject({type:"userError",data:"The upload has been canceled by the user",response:""})
        };

        let uploadComplete=(evt)=> {
            let {status,response} = evt.target;
            if(status !==200){
                reject({type:"statusError",data:"Error response received from server ",response:JSON.parse(response)});

            }
            else {
                resolve({type:"responseSuccess",data:"File upload Successfully",response:JSON.parse(response)})
            }

        };

        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST",url);
        xhr.send(fd);


    });

}