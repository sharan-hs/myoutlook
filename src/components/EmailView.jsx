import React, { useEffect, useState } from "react";
import { EMAIL_API, EMAIL_BODY_API } from "../helper/utils";
import Email from "./Email";
import EmailInfo from "./EmailInfo";

const EmailView = () => {
  const [emailList, setEmailList] = useState();
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [emailBody, setEmailBody] = useState(null);

  const getData = async () => {
    const response = await fetch(EMAIL_API);
    const data = await response.json();
    setEmailList(data?.list);
  };

  const getEmailBody = async (emailId) => {
    const response = await fetch(`${EMAIL_BODY_API}/?id=${emailId}`);
    const data = await response.json();
    setEmailBody(data?.body);
  };

  const handleEmailClick = (email) => {
    console.log("clik");
    setSelectedEmail(email);
    getEmailBody(email.id);
    setExpanded(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="mx-auto  w-[90vw] pt-10 pb-4 flex">
        <span>Filter By: </span>
        <div className="flex items-start justify-evenly w-[20%]">
          <button>Unread</button>
          <button className="px-4 rounded-2xl bg-[#e1e4ea]">Read</button>
          <button>Favorites</button>
        </div>
      </div>
      <div className="flex">
        <div
          className={
            `${expanded ? "w-[35%]" : "w-[90%] mx-auto"}
            ` + "overflow-y-auto"
          }
        >
          {emailList?.map((email) => (
            <Email
              key={email.id}
              email={email}
              expanded={expanded}
              selected={email.id === selectedEmail?.id}
              onClick={() => handleEmailClick(email)}
            />
          ))}
        </div>

        <div className={expanded ? "w-[65%] ml-4 p-4" : ""}>
          {selectedEmail && (
            <EmailInfo email={selectedEmail} info={emailBody} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailView;
