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
                      <div style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        width:'100%',
                        height:'100%'
                      }}>
                          <div style={{display:'grid'}}>
                            <div className={`${theme}-FileUploader-icon`}></div>
                              <div style={{
                                fontSize:'14px',
                                textAlign:'center',
                                color:'#0F0F0F',
                                fontWeight:'500'
                              }}>
                                  Drag & drop files or <span style={{color:'#00B5FB',cursor:'pointer'}}>Browse</span> 
                              </div>
                              <div className={`${theme}-FileUploader-uploader-suportText-container`}>
                                  <div className={`${theme}-FileUploader-uploader-suportText`}>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</div>
                              </div>
                          </div>
                      </div>
                      <input  onChange={(res:any) => {
                          setisLoading(true)
                          getBase64(res.target.files[0],res.target.value)    
                      }}  className={`${theme}-FileUploader-uploader-input`} type="file" id="upload-button" multiple accept="*" />                        
                  </div>
            }
            {files.length > 0 ? 
              <>
                <div>
                  <div className={`${theme}-FileUploader-itemList-titleBox`}>Uploaded files</div>
                  <div className={`${theme}-FileUploader-itemList-items`}>
                    {files.map((item,index) => {
                      return (
                        <div className={`${theme}-FileUploader-uploadBox-file`}>
                          <div className={`${theme}-FileUploader-itemList-title`}>{item.name}</div>
                          <div onClick={() => deleteFile(index)} className={`${theme}-FileUploader-uploadBox-trashIcon`}>
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
          <div className="Copilot-FileUploader-uploadBox-button-container">
            <Button disabled={files.length ==0} theme="Copilot">Continue</Button>
          </div>
    </div>
  );
};

FileUploadr.defaultProps = {
  theme: "Acord",
};

export default FileUploadr;
