import React from "react";
import { convertTimestamp } from "../helper/utils";

const EmailInfo = ({ email, info }) => {
  return (
    <div className=" flex gap-4 w-[95%] border border-[#CFD2DC] rounded-lg bg-white  p-6">
      <div className="w-[50%]">
        <div className="bg-[#E54065] h-12 w-12 flex items-center justify-center rounded-full">
          <p className="text-white text-2xl">
            {email?.from?.name[0].toUpperCase()}
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-2xl text-primary-text font-bold">
            {email?.subject}
          </p>
          <button className="bg-[#e54065] text-sm px-4 py-1.5 rounded-2xl text-white">
            Mark as favourite
          </button>
        </div>
        <p className="text-sm py-6 text-primary-text">
          {convertTimestamp(email?.date)}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: info?.replace(/<\/p>/g, "</p><br>"),
          }}
        />
      </div>
    </div>
  );
};

export default EmailInfo;
