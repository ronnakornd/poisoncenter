import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Carousel() {
  const navigate = useNavigate();
  const [contents, setContents] = useState([]);
  const getPinPost = () => {
    axios
      .get("https://em.kku.ac.th/poison/api/pinpost.php")
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
    getPinPost();
  }, []);

  return (
    <div className="carousel w-full  h-96 bg-stone-200 ">
      {contents.map((item, index) => {
        let total = contents.length;
        let prev = index == 0 ? total - 1 : index - 1;
        let next = index == total - 1 ? 0 : index + 1;
        return (
          <div
            id={`slide${index}`}
            className="carousel-item  h-full relative w-full"
          >
            <img
              src={`https://em.kku.ac.th/poison/upload/${item.cover}`}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 bg-stone-300 bg-opacity-60">
              <div className="w-full  flex flex-col justify-center items-center px-60 py-2">
                <h1 className="text-2xl font-bold p-1">{item.header}</h1>
                <h1 className="text-xl h-8 overflow-hidden p-1">
                  {item.caption}
                </h1>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
              <a href={`#slide${prev}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${next}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
