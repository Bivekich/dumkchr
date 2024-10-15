export default function Form() {
  return (
    <div className="flex max-[1800px]:w-[80%] w-[70%] h-full bg-[#E3E3E3] rounded-[30px] text-white flex-shrink-0 flex-col gap-5">
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
      <form className="text-[#177245] w-full flex flex-col justify-center items-center mt-5 h-full">
        <div className="w-[80%] flex flex-col gap-5">
          <input
            className="bg-inherit border border-[#177245]  rounded-full px-4 placeholder-[#177245] text-[20px]"
            placeholder="Ваше имя"
            type="text"
          ></input>
          <input
            className="bg-inherit border border-[#177245]  rounded-full px-4 placeholder-[#177245] text-[20px]"
            placeholder="Телефон"
            type="tel"
          ></input>
          <input
            className="bg-inherit border border-[#177245]  rounded-full px-4 placeholder-[#177245] text-[20px]"
            placeholder="Ваш вопрос"
            type="text"
          ></input>
        </div>

        <div className="w-[80%] mt-auto mb-10">
          <button
            type="submit"
            className="bg-[#177245] border border-[#177245]  rounded-full text-[20px] w-full h-11 font-bold text-white"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
