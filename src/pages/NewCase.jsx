import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewCase() {
  let navigate = useNavigate();
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

  });

  const createCase = () => {
    axios
      .post("https://em.kku.ac.th/poison/api/poison_case.php", {})
      .then(function (response) {
        console.log(response);
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setFormData({
            ...formData,
            ["id"]: response.data,
          });
          navigate('/case/'+response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="m-5 p-10 flex flex-col items-center justify-center">
      {formData.id && <h1 className="uppercase text-xl">Case NO: #{formData.id}</h1>}
      {
        {
          0: (
            <button className="btn btn-neutral" onClick={createCase}>
              start new case
            </button>
          ),
        }[step]
      }
    </div>
  );
}

export default NewCase;
