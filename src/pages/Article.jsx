import React , {useEffect , useState} from 'react'
import { useParams ,useNavigate , useOutletContext} from "react-router-dom";
import axios from 'axios';
function Article() {
  const [user ,setuser] = useOutletContext();
  const navigate= useNavigate();
  const position = user? user.position:null;
  const {article_id} = useParams();
  const [content , setContent] = useState();
  const sections = [
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

  const getLabel = (section) => {
    let sectionItem = sections.find(item => item.value == section);
    return sectionItem.label;
  }

  const getArticle = () =>{
    axios
    .get("https://em.kku.ac.th/poison/api/viewarticle.php?id="+article_id)
    .then(function (response) {
      console.log(response);
      if (response.data.error) {
        alert(response.data.error);
      } else {
          console.log(response.data);
          setContent(response.data);
          
          setContent(...content,{section: sectionItem.label});
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(()=>{
    console.log(article_id);
     getArticle();
},[])
  return (
    <div className="p-20 min-h-screen" >
            <div className="mb-5">
            <h1 className="text-4xl mb-3 font-bold">{content? content.header:""}</h1>
            <div className="badge  badge-xs badge-neutral cursor-pointer" onClick={()=> navigate(`/poison/api/section/${content? content.section:""}`)} >{content? getLabel(content.section):""}</div>
            <p className="text-xs">ผู้เขียน {content? content.author:""}</p>
            <p className="text-xs">เวลา {content? content.date:""}</p>
            {position == "admin" && <btn onClick={()=>navigate(`/poison/edit_article/${article_id}`)} className="btn btn-xs btn-neutral">แก้ไขบทความ</btn>}
            </div>
            <div className="w-full prose prose-3xl" dangerouslySetInnerHTML={{__html:content?content.content:""}}>

            </div>
    </div>
  )
}

export default Article