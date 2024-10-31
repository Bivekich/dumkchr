import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#177245");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = "7644164378:AAF3OQkf77N90TFKjPdATJmlxdvfmw--hpc";
    const chatId = "-1002361113569";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const fullMessage = `Имя:${name}\nТелефон:${phone}\nСообщение:${message}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          chat_id: chatId,
          text: fullMessage,
        }),
      });
      const data = await response.json();
      if (data.ok) {
        setColor("#11462c");
        setTimeout(() => setColor("#177245"), 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex w-[68%] max-[800px]:w-full max-[1650px]:w-[60%] bg-[#E3E3E3] rounded-[30px] text-white flex-shrink-0 flex-col gap-5">
      <div className="w-full bg-[#177245] text-[32px] flex items-center justify-center h-24 rounded-tl-[30px] rounded-tr-[30px] font-bold">
        <p>ОСТАЛИСЬ ВОПРОСЫ?</p>
      </div>
      <div className="w-full flex items-center justify-center text-center font-medium text-[24px] text-[#177245]">
        <p className="w-[80%]">
          Если у вас остались вопросы или вам нужна дополнительная информация,
          не стесняйтесь обращаться к нам! Мы всегда рады помочь и готовы все
          разъяснить. Пожалуйста, заполните форму обратной связи. Мы постараемся
          ответить на ваши запросы в ближайшее время.
        </p>
      </div>
      <form
        className="text-[#177245] w-full flex flex-col justify-center items-center mt-5 h-full"
        onSubmit={(e) => handleSubmit(e)}
        method="post"
      >
        <div className="w-[80%] flex flex-col gap-5">
          <input
            className="bg-inherit border border-[#177245]  rounded-full px-4 placeholder-[#177245] text-[20px]"
            placeholder="Ваше имя"
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="bg-inherit border border-[#177245]  rounded-full px-4 placeholder-[#177245] text-[20px]"
            placeholder="Телефон"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <input
            className="bg-inherit border border-[#177245]  rounded-full px-4 placeholder-[#177245] text-[20px]"
            placeholder="Ваш вопрос"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </div>

        <div className="w-[80%] mt-auto max-[800px]:mb-10 max-[800px]:mt-10 mb-10">
          <button
            type="submit"
            className={`border border-[#177245] transition-all ease-in-out rounded-full text-[20px] w-full h-11 font-bold text-white`}
            style={{
              backgroundColor: `${color}`,
            }}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
