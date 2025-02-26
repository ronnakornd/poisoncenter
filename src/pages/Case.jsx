import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Case() {
  let { case_id } = useParams();
  Date.prototype.toDateInputValue = function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  };

  Date.prototype.toTimeInputValue = function () {
    var today = new Date();
    var time =
      today.getHours().toString().padStart(2, "0") +
      ":" +
      today.getMinutes().toString().padStart(2, "0");
    return time;
  };
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    id: undefined,
    caller_name: undefined,
    caller_phone: undefined,
    call_date: new Date().toDateInputValue(),
    call_time: new Date().toTimeInputValue(),
    patient_name: undefined,
    patient_phone: undefined,
    patient_birth_date: undefined,
    patient_age: undefined,
    patient_gender: "male",
    patient_age_category: "neonatal",
    patient_pregnancy: false,
    patient_gestational_age_week: 0,
    patient_gestational_age_plus_day: 0,
    patient_gestational_trimester: 0,
    patient_lactation: false,
  });
  const patientAgeInput = useRef();
  const patientAgeCategoryInput = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name == "patient_birth_date") {
      ageCal(value);
    }
    if (name == "patient_gestational_age_week" || name == "patient_gestational_age_day") {

    }
  };

  const nextStep = () => {
    if (step < 4) {
      let currentStep = step;
      setStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      let currentStep = step;
      setStep(currentStep - 1);
    }
  };

  const save = () => {
    axios
      .put("https://em.kku.ac.th/poison/api/poison_case.php", formData)
      .then(function (response) {
        console.log(response);
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("save success");
          setFormData({ ...response.data });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const ageCal = (data) => {
    var ageMS = Date.parse(Date()) - Date.parse(data);
    var age = new Date();
    age.setTime(ageMS);
    var ageYear = age.getFullYear() - 1970;
    var ageDay = age.getDate();
    var ageCategory = "neonatal";
    if (ageYear < 1) {
      if (ageDay > 28) {
        ageCategory = "infant";
      }
    } else {
      if (ageYear < 3) {
        ageCategory = "preschool";
      } else if (ageYear < 7) {
        ageCategory = "kindergarten";
      } else if (ageYear < 12) {
        ageCategory = "primary school";
      } else if (ageYear < 18) {
        ageCategory = "secondary school";
      } else if (ageYear < 25) {
        ageCategory = "university";
      } else if (ageYear < 35) {
        ageCategory = "early adult";
      } else if (ageYear < 45) {
        ageCategory = "middle adult";
      } else if (ageYear < 55) {
        ageCategory = "late middle adult";
      } else if (ageYear < 65) {
        ageCategory = "late adult";
      } else {
        ageCategory = "elderly";
      }
    }
    setFormData({
      ...formData,
      patient_age: ageYear,
    });
    patientAgeInput.current.value = ageYear;
    patientAgeCategoryInput.current.value = ageCategory;
  };

  const trimesterCal = (data) => {
           
  }

  const getCase = () => {
    axios
      .get("https://em.kku.ac.th/poison/api/poison_case.php?id=" + case_id)
      .then(function (response) {
        console.log(response);
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setFormData({ ...response.data });
          console.log(response.data);
          setStep(1);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getCase();
  }, []);
  return (
    <div className="m-5 p-10 flex flex-col items-center justify-center">
      {formData.id && (
        <h1 className="uppercase text-xl">Case NO: #{formData.id}</h1>
      )}
      {
        {
          0: <div>Loading...</div>,
          1: (
            <div className="flex flex-col">
              <label className="flex flex-col" htmlFor="">
                ชื่อผู้ปรึกษา
                <input
                  type="text"
                  name="caller_name"
                  value={formData.caller_name}
                  id=""
                  className="input"
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                เบอร์โทรศัพท์ผู้ปรึกษา
                <input
                  type="number"
                  name="caller_phone"
                  value={formData.caller_phone}
                  className="input"
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                วันที่ปรึกษา
                <input
                  type="date"
                  value={formData.call_date}
                  name="call_date"
                  className="input"
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                เวลาที่ปรึกษา
                <input
                  type="time"
                  value={formData.call_time}
                  name="call_time"
                  className="input"
                  onChange={handleChange}
                />
              </label>
            </div>
          ),
          2: (
            <div className="flex flex-col">
              <label className="flex flex-col" htmlFor="">
                ชื่อผู้ป่วย
                <input
                  type="text"
                  name="patient_name"
                  value={formData.patient_name}
                  id=""
                  className="input"
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                เบอร์โทรศัพท์ผู้ป่วย
                <input
                  type="number"
                  name="patient_phone"
                  value={formData.patient_phone}
                  className="input"
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                วัน/เดือน/ปีเกิดของผู้ป่วย
                <input
                  type="date"
                  value={formData.patient_birth_date}
                  name="patient_birth_date"
                  className="input"
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                อายุผู้ป่วย(ปี)
                <input
                  type="number"
                  value={formData.patient_age}
                  name="patient_age"
                  className="input"
                  ref={patientAgeInput}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                กลุ่มอายุผู้ป่วย
                <input
                  type="text"
                  value={formData.patient_age_category}
                  name="patient_age_category"
                  className="input"
                  ref={patientAgeCategoryInput}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                เพศของผู้ป่วย
                <select
                  name="patient_gender"
                  id=""
                  value={formData.patient_gender}
                  onChange={handleChange}
                >
                  <option value="male">ชาย</option>
                  <option value="female">หญิง</option>
                </select>
              </label>
            </div>
          ),
          3: (
            <div className="flex flex-col">
              <div className="flex flex-col" htmlFor="">
                ตั้งครรภ์
                <label htmlFor="" className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="patient_pregnancy"
                    value={true}
                    id=""
                    className="input"
                    onChange={() => setFormData({ ...formData, patient_pregnancy: true })}
                    checked={formData.patient_pregnancy}
                  />
                  ใช่
                </label>
                <label htmlFor="" className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="patient_pregnancy"
                    value={false}
                    className="input"
                    onChange={() => setFormData({ ...formData, patient_pregnancy: false })}
                    checked={!formData.patient_pregnancy}
                  />
                  ไม่ใช่
                </label>
              </div>
              {formData.patient_pregnancy == true &&
                <>
                  <label className="flex flex-col" htmlFor="">
                    อายุครรภ์ (สัปดาห์)
                    <input
                      type="number"
                      name="patient_gestational_age_week"
                      value={formData.patient_gestational_age_week}
                      className="input"
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex flex-col" htmlFor="">
                    อายุครรภ์ (วัน)
                    <input
                      type="number"
                      name="patient_gestational_age_plus_day"
                      value={formData.patient_gestational_age_plus_day}
                      className="input"
                      onChange={handleChange}
                    />
                  </label>
                  <label className="flex flex-col" htmlFor="">
                    ไตรมาสของการตั้งครรภ์
                    <input
                      type="number"
                      name="patient_gestational_trimester"
                      value={formData.patient_gestational_trimester}
                      className="input"
                      onChange={handleChange}
                    />
                  </label>
                </>
              }
              <label className="flex flex-col" htmlFor="">
                วัน/เดือน/ปีเกิดของผู้ป่วย
                <input
                  type="date"
                  value={formData.patient_birth_date}
                  name="patient_birth_date"
                  className="input"
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                อายุผู้ป่วย(ปี)
                <input
                  type="number"
                  value={formData.patient_age}
                  name="patient_age"
                  className="input"
                  ref={patientAgeInput}
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                เพศของผู้ป่วย
                <select
                  name="patient_gender"
                  id=""
                  value={formData.patient_gender}
                  onChange={handleChange}
                >
                  <option value="male">ชาย</option>
                  <option value="female">หญิง</option>
                </select>
              </label>
            </div>
          ),
        }[step]
      }
      {step > 0 && (
        <div className="flex gap-1 mt-2">
          <button className="btn btn-neutral" onClick={prevStep}>
            previous
          </button>
          <button className="btn btn-warning" onClick={save}>
            save
          </button>
          <button className="btn btn-accent" onClick={nextStep}>
            next
          </button>
        </div>
      )}
    </div>
  );
}

export default Case;
