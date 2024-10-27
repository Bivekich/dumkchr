import { useEffect, useState } from "react";
import { getContacts } from "./sanity/sanity";

export default function Contact() {
  const [contacts, setContacts] = useState("");
  useEffect(() => {
    const query = async () => {
      const contacts = await getContacts();
      setContacts(contacts.info);
    };
    query();
  }, []);
  return (
    <div className="flex gap-2 mb-52 w-full">
      <pre className="flex text-wrap w-[60%] font-inter text-white text-[20px] font-bold">
        {contacts}
      </pre>
    </div>
  );
}
