// // ModalComponent.tsx
// import React, { useState } from "react";
// import Modal from "react-modal";
// import { Minus, Plus, X } from "lucide-react";
// import ImageUploading from 'react-images-uploading';



// interface ModalComponentProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   onSubmit?: (reason?: string) => void;
// //   caseType: "accept" | "reject";
// }

// const data = {
//   links:[] || null,
//   image: String || null
// }


// const EditMoral: React.FC<ModalComponentProps> = ({
//   isOpen,
//   onClose,
//   title,
// //   onSubmit,
// //   caseType,
// }) => {


//     const [inputs, setInputs] = useState<string[]>([""]);

//     // Function to handle input change
//     const handleInputChange = ( value: string) => {
//         const newInputs = [...inputs];
//         newInputs[inputs.length-1]=value;
//         setInputs(newInputs);
//     };

//     // Function to add a new input field
//     const handleAddInput = () => {
//       if(inputs[inputs.length-1].trim()==="") return;
//       const newVal=[...inputs,""];
//       setInputs(newVal);
//     };

//     const handleMinusInput = (index: number) => {
//       if (inputs.length <= 1) return;
    
//     // Create a new array without the input at the specified index
//     const newInputs = inputs.filter((_, i) => i !== index);
//     setInputs(newInputs);
//   };

//   const [images, setImages] = useState([]);
//   const [isImage, setIsImage] = useState<boolean>(false);
//   const maxNumber = 1;
  
//   const onChange = (imageList: any, addUpdateIndex: any) => {
//       console.log(imageList, addUpdateIndex);
//       setImages(imageList);
//       setIsImage(imageList.length > 0);
//   };

    
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Modal"
//       className="w-full h-full max-h-fit overflow-auto max-w-4xl mx-10 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-all"
//       overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//     >
//       <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
//         {title}
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="p-4">
//         {inputs.map((input, index) => (
//             <div key={index} className="flex items-center mb-4">
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => handleInputChange(e.target.value)}
//                 className="w-full border dark:text-white border-gray-300 dark:border-blue-600 dark:bg-gray-700 rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-800"
//                 placeholder="Add Links"
//             />
//             {index === inputs.length - 1 && (
//                 <button
//                 onClick={handleAddInput}
//                 className={`px-2 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 ${
//                   inputs[inputs.length-1].trim()!=="" 
//                     ? 'bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-400 text-white' 
//                     : 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-300 text-gray-400'
//                 }`}
//               >
//                 <Plus className="" />
//               </button>
//             )}
            
//             {inputs.length > 1 && index !== inputs.length - 1 &&<button
//                 onClick={() => handleMinusInput(index)}
//                 disabled={inputs.length <= 1}
//                 className={`px-2 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-red-500 hover:bg-red-600`}
//             >
//                 <Minus/>
//             </button>}
//             </div>
//         ))}
//         </div>   
//         {/* <ImageUploader/>      */}

//         {/* Image */}

//         <div className='p-4'>
//             <ImageUploading
//                 value={images}
//                 onChange={onChange}
//                 maxNumber={maxNumber}
//                 dataURLKey="data_url"
//             >
//                 {({
//                     imageList,
//                     onImageUpload,
//                     onImageRemove,
//                     isDragging,
//                     dragProps,
//                 }) => (
//                     <div>
//                         <div 
//                             className="w-full px-4 py-2 mr-2 border-dotted border-blue-500 dark:border-white border-2 flex flex-col items-center justify-center rounded-md min-h-[200px]" 
//                             onClick={() => !isImage && onImageUpload()}
//                             {...dragProps}
//                         >
//                             {imageList.length > 0 ? (
//                                 <div className="relative group w-full h-full flex justify-center overflow-auto">
//                                     <img 
//                                         src={imageList[0]['data_url']} 
//                                         alt="Uploaded" 
//                                         className="max-h-[60%] object-contain rounded-lg group-hover:brightness-75"
//                                     />
//                                     <button
//                                         className="absolute top-2 right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             onImageRemove(0);
//                                             setIsImage(false);
//                                         }}
//                                     >
//                                         <X className="w-4 h-4 text-white" />
//                                     </button>
//                                 </div>
//                             ) : (
//                                 <h2
//                                     className='md:p-10 text-3xl dark:text-gray-300'
//                                     style={isDragging ? { color: 'red' } : undefined}
//                                 >
//                                     Drop Image here
//                                 </h2>
//                             )}
//                         </div>
                        
//                         {!isImage && (
//                             <button
//                                 type="button"
//                                 onClick={onImageUpload}
//                                 className="w-full px-4 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
//                             >
//                                 Upload
//                             </button>
//                         )}
//                     </div>
//                 )}
//             </ImageUploading>
//         </div>
//         <div className="flex justify-end p-4">
//             <button
//             type="button"
//             onClick={onClose}
//             className="px-4 py-2 mr-2 bg-gray-400 text-white rounded hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700"
//             >
//             Cancel
//             </button>
//             <button
//             type="submit"
//             onClick={()=>console.log(inputs)}
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
//             >
//             Submit
//             </button>
//       </div>
//       </form>
//     </Modal>
//   );
// };

// export default EditMoral;




import React, { useState, FormEvent } from "react";
import Modal from "react-modal";
import { Minus, Plus, X } from "lucide-react";
import ImageUploading from 'react-images-uploading';

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSubmit: (data: SubmissionData) => void;
}

interface SubmissionData {
  links: string[];
  image?: string;
}

const EditMoral: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  title,
  onSubmit,
}) => {
  const [inputs, setInputs] = useState<string[]>([""]);
  const [images, setImages] = useState<any[]>([]);
  const [isImage, setIsImage] = useState<boolean>(false);
  const maxNumber = 1;

  // Function to handle input change
  const handleInputChange = (value: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // Function to add a new input field
  const handleAddInput = () => {
    if (inputs[inputs.length - 1].trim() === "") return;
    setInputs([...inputs, ""]);
  };

  // Function to remove an input field
  const handleMinusInput = (index: number) => {
    if (inputs.length <= 1) return;
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  // Handle image changes
  const onChange = (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
    setIsImage(imageList.length > 0);
  };

  // Reset form
  const resetForm = () => {
    setInputs([""]);
    setImages([]);
    setIsImage(false);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Filter out empty inputs
    const validLinks = inputs.filter(input => input.trim() !== "");

    // Only include non-empty values
    const submissionData: SubmissionData = {
      links: validLinks,
    };

    // Add image if it exists
    if (images.length > 0 && images[0].data_url) {
      submissionData.image = images[0].data_url;
    }

    // Validate that at least one field (links or image) has data
    if (validLinks.length === 0 && !submissionData.image) {
      alert("Please add at least one link or an image");
      return;
    }
    console.log(submissionData)
    onSubmit(submissionData);
    resetForm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className="w-full h-full max-h-fit overflow-auto max-w-4xl mx-10 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-all"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          {inputs.map((input, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className="w-full border dark:text-white border-gray-300 dark:border-blue-600 dark:bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-800"
                placeholder="Add Link"
              />
              {index === inputs.length - 1 ? (
                <button
                  type="button"
                  onClick={handleAddInput}
                  className={`p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 ${
                    input.trim() !== ""
                      ? "bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-400 text-white"
                      : "bg-gray-200 hover:bg-gray-300 focus:ring-gray-300 text-gray-400"
                  }`}
                >
                  <Plus className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleMinusInput(index)}
                  className="p-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-red-500 hover:bg-red-600"
                >
                  <Minus className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemove,
              isDragging,
              dragProps
            }) => (
              <div>
                <div
                  className="w-full px-4 py-2 border-dotted border-blue-500 dark:border-white border-2 flex flex-col items-center justify-center rounded-md min-h-[200px] cursor-pointer"
                  onClick={() => !isImage && onImageUpload()}
                  {...dragProps}
                >
                  {imageList.length > 0 ? (
                    <div className="relative group w-full h-full flex justify-center">
                      <img
                        src={imageList[0]['data_url']}
                        alt="Uploaded"
                        className="max-h-full object-contain rounded-lg group-hover:brightness-75"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation();
                          onImageRemove(0);
                          setIsImage(false);
                        }}
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="text-center"
                      style={isDragging ? { color: 'var(--color-primary)' } : undefined}
                    >
                      <h2 className="text-xl dark:text-gray-300 mb-2">
                        Drop image here or click to upload
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        (Optional)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </ImageUploading>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditMoral;