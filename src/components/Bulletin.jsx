import React, { useState, useEffect } from "react";
import StatBoard from "./StatBoard";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Bulletin() {
  const navigate = useNavigate();
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

  const getBulletin = () => {
    axios
      .get("https://em.kku.ac.th/poison/api/bulletin.php")
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

  const createCase = () => {
    axios
      .post("https://em.kku.ac.th/poison/api/poison_case.php", {})
      .then(function (response) {
        console.log(response);
        if (response.data.error) {
          alert(response.data.error);
        } else {
          navigate("/case/" + response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getBulletin();
  }, []);
  
  return (
    <div className=" grid grid-cols-2 bg-stone-400">
      <div className="w-full h-full bg-stone-600 p-10">
        <h1 className="text-2xl font-bold text-stone-100">ปรึกษาเคสพิษวิทยา</h1>
        <div className="flex flex-col gap-2 p-5">
          <button className="btn btn-accent" onClick={createCase}>
            ปรึกษาเคสใหม่
          </button>
          <button className="btn btn-neutral">ปรึกษาเคสเก่า</button>
        </div>
        <h1 className="text-2xl font-bold text-stone-100">
          สถิติเดือน ตุลาคม 2566
        </h1>
        <div className="p-5">
          <StatBoard />
        </div>
      </div>
      <div className="w-full h-full p-10 bg-stone-400">
        <h1 className="text-2xl font-bold text-stone-800">ข่าวสาร</h1>
        <div className="flex flex-col gap-2 mt-2 max-h-72 overflow-auto">
          {contents.map((item) => {
            return (
              <div
                className="p-4 hover:bg-stone-100 cursor-pointer bg-stone-300 rounded-md"
                onClick={() => navigate(`/poison/article/${item.id}`)}
              >
                <h1 className="text-lg font-bold">{item.header}</h1>
                <p className="text-sm">{item.caption}</p>
                <p className="float-right flex gap-2">
                  <div className="inline badge badge-neutral">
                    {getLabel(item.section)}
                  </div>
                  <p className="text-sm">{item.time}</p>
                </p>
              </div>
            );
          })}
        </div>
        <div className="float-right link p-3">เพิ่มเติม..</div>
      </div>
    </div>
  );
}

export default Bulletin;
