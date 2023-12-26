import React, { HtmlHTMLAttributes, useState } from "react";
import { Button } from "..";

type FileUploadrProps = HtmlHTMLAttributes<HTMLDivElement> & {
  theme?: string;
  uploades?: (files:Array<any>) => void
};

const FileUploadr: React.FC<FileUploadrProps> = ({ children, theme, ...props }) => {
  const [isLoading,setisLoading] = useState(false);
  const [files,setFiles] = useState<Array<any>>([]);
  const getBase64 = (file:any,name:string) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
          setFiles([...files,{
            url:reader.result,
            name:name
          }])
          setisLoading(false)       
      };
      reader.onerror = function (error) {
          console.log('Error: ', error);
      };
  }   
  const deleteFile = (index:number) => {
    const newArr = [...files]
    newArr.splice(index,1)
    setFiles(newArr)
  }
  return (
    <div className={`${theme}-FileUploader-container`} {...props}>
      <div className={`${theme}-FileUploader-title`}>Upload File</div>
          <div className={`${theme}-FileUploader-uploadBox-container`}>
              {isLoading ?
                  <div className={`${theme}-FileUploader-uploadBox-loading`}>
                              
                  </div>                                         
                  :
                  <div className={`${theme}-FileUploader-uploadBox-box ${files.length >0 ? `${theme}-FileUploader-uploadBox-fileExist`:undefined}`}>
                      <div className={`flex justify-center items-center w-full h-full `}>
                          <div className="grid">
                            <div className={`${theme}-FileUploader-icon`}></div>
                              <div className="text-[14px] text-center text-[#0F0F0F] font-bold">
                                  Drag & drop files or <span className="text-[#00B5FB] cursor-pointer">Browse</span> 
                              </div>
                              <div className="flex justify-center items-center mt-2">
                                  <div className="text-[#7B93AF] text-center text-[12px]">Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</div>
                              </div>
                          </div>
                      </div>
                      <input  onChange={(res:any) => {
                          setisLoading(true)
                          getBase64(res.target.files[0],res.target.value)    
                      }}  className="opacity-0 w-full h-full absolute top-0" type="file" id="upload-button" multiple accept="*" />                        
                  </div>
            }
            {files.length > 0 ? 
              <>
                <div>
                  <div className="text-[#676767] text-sm mt-5">Uploaded files</div>
                  <div className="overflow-auto mt-[6px] max-h-[150px]">
                    {files.map((item,index) => {
                      return (
                        <div className={`${theme}-FileUploader-uploadBox-file`}>
                          <div className="text-sm text-[#0F0F0F]">{item.name}</div>
                          <div onClick={() => deleteFile(index)} className="w-4 h-4 flex justify-center items-center cursor-pointer bg-[#1C1C1C] opacity-10 rounded-full">
                            <img src="Acord/Trash.svg" alt="" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </>
            : undefined}
          </div>      
          <div className="relative bottom-2 w-[-webkit-fill-available]">
            <Button disabled={files.length ==0} theme="Copilot">Continue</Button>
          </div>
    </div>
  );
};

FileUploadr.defaultProps = {
  theme: "Acord",
};

export default FileUploadr;
