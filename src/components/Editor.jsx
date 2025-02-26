import { React, useState, useEffect } from 'react'
import axios from 'axios'
import QuillEditor from './QuillEditor';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";


function Editor(props) {
  const navigate = useNavigate();
  const [header, setHeader] = useState("");
  const [caption, setCaption] = useState("");
  const [cover, setCover] = useState('https://via.placeholder.com/800x400');
  const [content, setContent] = useState("");
  const [section, setSection] = useState("");
  const [selectedOption, setSelectedOption] = useState();
  const [author, setAuthor] = useState(JSON.parse(window.localStorage.getItem('user')).id);
  const [pin, setPin] = useState(false);
  const [id, setId] = useState(null);
  const [intitialContent, setInitialContent] = useState('');

  const options = [
    { value: "history", label: "ความเป็นมา" },
    { value: "consult_out", label: "รับปรึกษาทางโทรศัพท์ผู้ป่วยสงสัยได้รับสารพิษ (ภายนอก)" },
    { value: "refer_in", label: "รับตัวผู้ป่วยภาวะพิษไว้รักษา (refer in) มีใบส่งตัว" },
    { value: "consult_in", label: "รับปรึกษาจากภายในคณะแพทยศาสตร์ ม.ขอนแก่น" },
    { value: "fellowship", label: "วว.เวชเภสัชวิทยาและพิษวิทยา" },
    { value: "scholarship", label: "ทุนศึกษาต่อ" },
    { value: "conference", label: "ประชุมการศึกษาดูงานภายนอกสถาบันฝึกอบรมชาการ" },
    { value: "research", label: "วิจัย" },
    { value: "article_public", label: "บทความสำหรับประชาชน" },
    { value: "article_healthcare", label: "บทความสำหรับบุคลากรทางการแพทย์" },
    { value: "elective", label: `แจ้งความจำนงสำหรับนักศึกษาแพทย์ พยาบาล เภสัชกร
    และพาราเมดิค ในการมาวนศึกษาดูงานพิษวิทยา` },
    { value: "schedule", label: "ตารางนักศึกษาที่มาวนงานพิษวิทยา" },
    { value: "online_conference", label: "การอบรมออนไลน์ด้านพิษวิทยา และประกาศนียบัตร" },
    { value: "norteastern_conference", label: `การจัดประชุมวิชาการทางพิษวิทยาภาคตะวันออกเฉียงเหนือประจำปี
    และประกาศนียบัตร` },
    { value: "HAZMAT", label: "การจัดอบรม HazMat สำหรับบุคลากรทางการแพทย์ และ ประกาศนียบัตร" },
    { value: "stat_month", label: "สถิติผู้ป่วยรายเดือน" },
    { value: "stat_year", label: "สถิติผู้ป่วยรายปี" },
    { value: "organization_structure", label: "โครงสร้างองค์กร" },
    { value: "executive", label: "ทำเนียบผู้บริหาร" },
    { value: "staff", label: "ทำเนียบบุคลากร" },
    { value: "contact" , label: "ติดต่อเรา"}
  ];


  useEffect(() => {
    if (props.article) {
      //console.log(props.article);
      var selectedOptionItem = options.find(x => x.value === props.article.section);
      setHeader(props.article.header);
      setCaption(props.article.caption);
      setContent(props.article.content);
      setInitialContent(props.article.content);
      setSelectedOption(props.article.section);
      setSection(props.article.section);
      setSelectedOption(selectedOptionItem);
      setCover(props.article.cover);
      setPin(props.article.pin);
      setId(props.id)
    }
  }, [props.article])

  var uploadCover = async (e) => {
    if (!e.target.files) {
      return;
    }
    var data = new FormData();
    data.append('file', e.target.files[0]);
    const res = await fetch("https://em.kku.ac.th/poison/api/upload.php", {
      method: "POST",
      body: data,
    }).then((res) => res.json());
    setCover(res.src);
  };

  const handlePinChange = (event) => {
    var currentPin = pin;
    setPin(!currentPin);
  }

  var contentChange = (content) => {
    setContent(content);
  }

  var headerChange = (event) => {
    setHeader(event.target.value);
  }

  var captionChange = (event) => {
    setCaption(event.target.value);

  }




  var sectionChange = (selectedOption) => {
    setSection(selectedOption.value);
    setSelectedOption(selectedOption);
    //console.log(section);
  }

  const submitArticle = async () => {
    var form = {
      header, cover, content, author, caption, pin, section
    }
    //console.log(form);
    var data = new FormData();
    data.append('header', header);
    data.append('caption', caption);
    data.append('content', content);
    data.append('pin', pin);
    data.append('cover', cover);
    data.append('author', author);
    data.append('section', section);
    if (props.id) {
      data.append('id', id);
    }
    const res = await fetch("https://em.kku.ac.th/poison/api/newarticle.php", {
      method: "POST",
      body: data,
    }).then((res) => res.json());
    console.log(res);
    navigate('/poison/article/'+res.id);
  }

  return (
    <div className="flex w-full flex-col p-10" >
      <div >
        <h1 className="text-3xl" >บทความใหม่</h1>
      </div>
      <div className='flex flex-col' >
        <input type="hidden" name="id" ></input>
        <h3 className='text-2xl mb-0.5' >หัวข้อ</h3>
        <input type="text" name="header" value={header} onChange={headerChange}></input>
        <h3 className='text-2xl mb-0.5'>พาดหัว</h3>
        <input type="text" name="caption" value={caption} onChange={captionChange} ></input>
        <h3 className='text-2xl mb-0.5'>ภาพหน้าปก</h3>
        <div className='flex flex-col' d="flex" flexDir="column">
          <img id="coverdisplay" style={{ width: '800px', height: '400px' }} alt="ภาพหน้าปก" src={"https://em.kku.ac.th/" + cover}></img>
          <input type="file" accept="image/*" onChange={uploadCover}></input>
        </div>
        <h3 className='text-2xl mb-0.5'>เนื้อหา</h3>
        <div className="flex flex-col w-full bg-white prose">
          <QuillEditor contentChange={contentChange} defaultValue={intitialContent} />
        </div>
        <h3 className='text-2xl mb-0.5'>หมวดหมู่</h3>
        <Select onChange={sectionChange} options={options} value={selectedOption} />
        <div>
          <h3 className="text-2xl flex flex-col justify-start">ประกาศ
          </h3>
          <input type="checkbox" name="pin" checked={pin} value={pin} onChange={handlePinChange} ></input>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className='btn btn-accent'
          onClick={submitArticle}   >Submit</button>
      </div>
    </div>
  )
}

export default Editor