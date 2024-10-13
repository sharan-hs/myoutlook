import React from "react";
import { convertTimestamp } from "../helper/utils";

const Email = ({ email, selected, onClick, expanded }) => {
  return (
    <div className={`${expanded ? "pl-16" : ""}` + " flex justify-evenly "}>
      <div
        className={
          selected
            ? "flex px-4 py-3 gap-4 border border-[#CFD2DC] rounded-lg bg-[#f2f2f2] my-4 w-full"
            : "flex px-4 py-3 gap-4 border border-[#CFD2DC] rounded-lg bg-white my-4 w-full"
        }
        onClick={onClick}
      >
        <div className="bg-[#E54065] h-12 w-12 flex items-center justify-center rounded-full">
          <p className="text-white text-2xl">
            {email?.from?.name[0].toUpperCase()}
          </p>
        </div>
        <div>
          <p className="text-base text-primary-text">
            From: <span className="font-semibold">{email?.from?.name}</span>
            <span className="font-semibold text-sm">
              &lt;{email?.from?.email}&gt;
            </span>
          </p>
          <p className="text-base text-primary-text">
            Subject: <span className="font-semibold">{email?.subject}</span>
          </p>
          <p
            className={`${
              expanded ? "truncate max-w-[20vw]" : ""
            } + "text-base py-2 text-primary-text"`}
          >
            {email?.short_description}
          </p>
          <p className="text-sm text-primary-text">
            {convertTimestamp(email?.date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Email;
