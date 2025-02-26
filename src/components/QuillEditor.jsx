import ReactQuill, { Quill } from "react-quill";
import React, { useState, useRef, useMemo, useEffect } from "react";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
import BlotFormatter from "quill-blot-formatter/dist/BlotFormatter";
import ImageResize from 'quill-image-resize-module-react';
import katex from "katex";
import "katex/dist/katex.min.css";
window.katex = katex;

const QuillEditor = (props) => { 
  const [value, setValue] = useState(props.defaultValue);
  const quillRef = useRef();
  Quill.register("modules/imageUploader", ImageUploader);
  Quill.register("modules/blotFormatter", BlotFormatter);
  Quill.register('modules/imageResize', ImageResize);
  const modules = useMemo(() => {
    return {
      blotFormatter: {},
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false
      },
      toolbar: {
        container: [
          [{align: []}],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["link", "image", "video","formula"],
          ["clean"],
        ],
      },
      imageUploader: {
        upload: async (file) => {
          var data = new FormData();
          data.append("file", file);
          const response = await fetch(
            `https://em.kku.ac.th/poison/api/upload.php`,
            {
              method: "POST",
              body: data,
            }
          ).then((res) => res.json());
          console.log(
            `https://em.kku.ac.th/poison/upload/` + response.src
          );
          return `https://em.kku.ac.th/poison/upload/` + response.src;
        },
      },
    };
  }, []);

  
  const formats = [
    "header",
    "align",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "script",
    "indent",
    "direction",
    "size",
    "link",
    "image",
    "video",
    "width",
    "height",
    "data-align"
  ];

  const handleChange = (val) => {
     setValue(val);
     let setParentContent = props.contentChange;
     setParentContent(val);
  };

  useEffect(() => {
      setValue(props.defaultValue);
  },[props.defaultValue])

  return (
    <>
    <div className="font-noto-sans prose-3xl  bg-white" style={{width: '80vw'}}>
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleChange}
      ref={quillRef}
      placeholder={"type here.."}
      formats={formats}
      modules={modules}
      bound={".app"}
      />
    </div>
    </>
  );
};

QuillEditor.Prop

export default QuillEditor;

