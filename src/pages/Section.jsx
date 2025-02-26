import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Section() {
  const navigate = useNavigate();
  const { section_id } = useParams();
  const [contents, setContents] = useState([]);
  const sections = [
    { value: "history", label: "ความเป็นมา" },
    {
      value: "consult_out",
      label: "รับปรึกษาทางโทรศัพท์ผู้ป่วยสงสัยได้รับสารพิษ (ภายนอก)",
    },
    {
      value: "refer_in",
      label: "รับตัวผู้ป่วยภาวะพิษไว้รักษา (refer in) มีใบส่งตัว",
    },
    { value: "consult_in", label: "รับปรึกษาจากภายในคณะแพทยศาสตร์ ม.ขอนแก่น" },
    { value: "fellowship", label: "วว.เวชเภสัชวิทยาและพิษวิทยา" },
    { value: "scholarship", label: "ทุนศึกษาต่อ" },
    {
      value: "conference",
      label: "ประชุมการศึกษาดูงานภายนอกสถาบันฝึกอบรมชาการ",
    },
    { value: "research", label: "วิจัย" },
    { value: "article_public", label: "บทความสำหรับประชาชน" },
    { value: "article_healthcare", label: "บทความสำหรับบุคลากรทางการแพทย์" },
    {
      value: "elective",
      label: `แจ้งความจำนงสำหรับนักศึกษาแพทย์ พยาบาล เภสัชกร
    และพาราเมดิค ในการมาวนศึกษาดูงานพิษวิทยา`,
    },
    { value: "schedule", label: "ตารางนักศึกษาที่มาวนงานพิษวิทยา" },
    {
      value: "online_conference",
      label: "การอบรมออนไลน์ด้านพิษวิทยา และประกาศนียบัตร",
    },
    {
      value: "norteastern_conference",
      label: `การจัดประชุมวิชาการทางพิษวิทยาภาคตะวันออกเฉียงเหนือประจำปี
    และประกาศนียบัตร`,
    },
    {
      value: "HAZMAT",
      label: "การจัดอบรม HazMat สำหรับบุคลากรทางการแพทย์ และ ประกาศนียบัตร",
    },
    { value: "stat_month", label: "สถิติผู้ป่วยรายเดือน" },
    { value: "stat_year", label: "สถิติผู้ป่วยรายปี" },
    { value: "organization_structure", label: "โครงสร้างองค์กร" },
    { value: "executive", label: "ทำเนียบผู้บริหาร" },
    { value: "staff", label: "ทำเนียบบุคลากร" },
    { value: "contact", label: "ติดต่อเรา" },
  ];

  const getSection = () => {
    axios
      .get("https://em.kku.ac.th/poison/api/section.php?section=" + section_id)
      .then(function (response) {
        console.log(response);
        if (response.data.error) {
          alert(response.data.error);
        } else {
          console.log(response.data);
          setContents(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getLabel = (section) => {
    let sectionItem = sections.find((item) => item.value == section);
    return sectionItem.label;
  };

  useEffect(() => {
    if (section_id) {
      getSection();
    }
  }, [section_id]);

  return (
    <div className="flex flex-col gap-5 p-10">
      <h1 className="text-4xl font-bold">{getLabel(section_id)}</h1>
      <div className="flex flex-col gap-3 p-5">
        {contents.map((item) => {
          return (
            <div
              onClick={() => navigate(`/poison/article/${item.id}`)}
              className="p-3 flex gap-5 bg-stone-200 hover:bg-slate-100 cursor-pointer rounded-md"
            >
              <img
                src={`https://em.kku.ac.th/poison/upload/${item.cover}`}
                width={100}
                alt="รูปภาพ"
              />
              <div className="flex flex-col p-3">
                <h1 className="text-4xl font-bold">{item.header}</h1>
                <p className="text-md overflow-clip">{item.caption}</p>
                <p className="self-end">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section;
