import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar(props) {
  const navigate = useNavigate();
  const tabs = [
    { name: "ความเป็นมา", path: "/poison/section/history" },
    {
      name: "บริการ",
      subTabs: [
        {
          name: "รับปรึกษาทางโทรศัพท์ผู้ป่วยสงสัยได้รับสารพิษ (ภายนอก)",
          path: "/poison/section/consult_out",
        },
        {
          name: "รับตัวผู้ป่วยภาวะพิษไว้รักษา (refer in) มีใบส่งตัว",
          path: "/poison/section/refer_in",
        },
        {
          name: "รับปรึกษาจากภายในคณะแพทยศาสตร์ ม.ขอนแก่น",
          path: "/poison/section/consult_in",
        },
      ],
    },
    {
      name: "วิชาการ",
      subTabs: [
        {
          name: "วว.เวชเภสัชวิทยาและพิษวิทยา",
          path: "/poison/section/fellowship",
        },
        { name: "ทุนศึกษาต่อ", path: "/poison/section/scholarship" },
        {
          name: "การศึกษาดูงานภายนอกสถาบันฝึกอบรม",
          path: "/poison/section/conference",
        },
      ],
    },
    { name: "วิจัย", path: "/poison/section/research" },
    {
      name: "บทความ",
      subTabs: [
        { name: "บทความสำหรับประชาชน", path: "/poison/section/article_public" },
        {
          name: "บทความสำหรับบุคลากรทางการแพทย์",
          path: "/poison/section/article_healthcare",
        },
      ],
    },
    {
      name: "กิจกรรม",
      subTabs: [
        {
          name: "แจ้งความจำนงสำหรับนักศึกษาแพทย์ พยาบาล เภสัชกร และพาราเมดิค ในการมาวนศึกษาดูงานพิษวิทยา",
          path: "/poison/section/elective",
        },
        {
          name: "ตารางนักศึกษาที่มาวนงานพิษวิทยา",
          path: "/poison/section/schedule",
        },
        {
          name: "การอบรมออนไลน์ด้านพิษวิทยา และประกาศนียบัตร",
          path: "/poison/section/online_conference",
        },
        {
          name: "การจัดประชุมวิชาการทางพิษวิทยาภาคตะวันออกเฉียงเหนือประจำปี และประกาศนียบัตร",
          path: "/poison/section/norteastern_conference",
        },
        {
          name: "การจัดอบรม HazMat สำหรับบุคลากรทางการแพทย์ และประกาศนียบัตร",
          path: "/poison/section/HAZMAT",
        },
      ],
    },
    {
      name: "สถิติผู้ป่วยพิษ",
      subTabs: [
        { name: "สถิติผู้ป่วยรายเดือน", path: "/poison/section/stat_month" },
        { name: "สถิติผู้ป่วยรายปี", path: "/poison/section/stat_year" },
      ],
    },
    {
      name: "เกี่ยวกับเรา",
      subTabs: [
        {
          name: "โครงสร้างองค์กร",
          path: "/poison/section/organization_structure",
        },
        { name: "ทำเนียบผู้บริหาร", path: "/poison/section/executive" },
        { name: "ทำเนียบบุคลากร", path: "/poison/section/staff" },
      ],
    },
    { name: "ติดต่อเรา", path: "/poison/section/contact" },
  ];

  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabId) => {
    // If clicking on the currently open tab, close it
    if (activeTab === tabId) {
      setActiveTab(null);
    } else {
      // Otherwise, open the clicked tab (and close others)
      setActiveTab(tabId);
    }
  };

  const logout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="navbar bg-accent z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[90vw] p-2 shadow"
          >
            {tabs.map((tab) => (
              <li>
                {tab.subTabs ? (
                  <details
                    className="dropdown"
                    open={activeTab === tab.name}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleTab(tab.name);
                    }}
                  >
                    <summary>{tab.name}</summary>
                    <ul className="p-2">
                      {tab.subTabs.map((subTab) => (
                        <li className="w-full flex bg-stone-300 mb-1">
                          <a
                            onClick={() => {
                              navigate(subTab.path);
                            }}
                          >
                            {subTab.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a
                    onClick={() => {
                      navigate(tab.path);
                    }}
                  >
                    {tab.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <a
          className="btn btn-ghost normal-case text-sm"
          onClick={() => navigate("/poison")}
        >
          <img src={Logo} width="40" alt="" />
          ศุนย์พิษวิทยา <br></br>โรงพยาบาลศรีนครินทร์
        </a>
      </div>
      <div className="navbar-center hidden lg:flex z-50">
        <ul className="menu menu-horizontal px-1">
          {tabs.map((tab) => (
            <li>
              {tab.subTabs ? (
                <details
                  className="dropdown"
                  open={activeTab === tab.name}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTab(tab.name);
                  }}
                >
                  <summary>{tab.name}</summary>
                  <ul className="p-2">
                    {tab.subTabs.map((subTab) => (
                      <li>
                        <a
                          onClick={() => {
                            navigate(subTab.path);
                          }}
                        >
                          {subTab.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a
                  onClick={() => {
                    navigate(tab.path);
                  }}
                >
                  {tab.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {!props.user && (
          <a
            className="btn btn-neutral"
            onClick={() => navigate("/poison/login")}
          >
            Login
          </a>
        )}
        {props.user && (
          <div className="text-stone-200 flex flex-col items-center p-3">
            <p>{props.user.fullname}</p>
            <div>
              <button
                className="btn btn-xs btn-neutral"
                onClick={() => navigate("/poison/newarticle")}
              >
                บทความใหม่
              </button>
              <button className="btn btn-xs" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
