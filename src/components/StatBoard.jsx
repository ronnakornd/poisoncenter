import React, { useState, useEffect } from "react";

function StatBoard() {
  const [totalCase, setTotalCase] = useState(0);
  const [followUptoday, setFollowUptody] = useState(0);
  const [closedCase, setClosedCase] = useState(0);
  return (
    <div className="shadow card-body rounded-lg flex p-1">
      <div className="text-lg flex flex-col gap-2">
        <div className="bg-stone-300 p-5">เคสทั้งหมด <b>{totalCase}</b> คน</div>
        <div className="bg-stone-300 p-5">เคสที่ต้องติดตามวันนี้ <b>{followUptoday}</b> คน</div>
        <div className="bg-stone-300 p-5">เคสที่ปิดไปแล้ว <b>{closedCase}</b> คน</div>
      </div>
    </div>
  );
}

export default StatBoard;
