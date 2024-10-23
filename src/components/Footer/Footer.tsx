import { Map, YMaps } from "@pbe/react-yandex-maps";

export default function Footer() {
  const mapState = {
    center: [44.195662, 42.036152],
    zoom: 17,
  };
  return (
    <div className="h-96 bg-white w-screen left-0 rounded-tl-[30px] -mx-14 rounded-tr-[30px] px-14 py-7 flex flex-col gap-5 text-[#004B2D] justify-center items-center">
      <div className="flex gap-48 w-full max-[1800px]:gap-40 max-[1700px]:gap-20 max-[1400px]:gap-5 max-[1300px]:gap-10 justify-between">
        <div className="flex gap-4 w-[30%] max-[1200px]:w-[20%] ">
          <div className="h-16 w-16 bg-[#004B2D] flex rounded-full flex-shrink-0">
            <img src="лого(1).png"></img>
          </div>
          <p className="max-[1920px]:w-[100%] max-[1660px]:w-[100%] max-[1440px]:w-[25rem] w-[60%] font-medium text-[18px]">
            ДУХОВНОЕ УПРАВЛЕНИЕ МУСУЛЬМАН КАРАЧАЕВО-ЧЕРКЕССКОЙ РЕСПУБЛИКИ
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold text-[20px] font-inter">Популярные разделы</p>
          <a href="/NewsPage">Новости</a>
          <a href="/Decree">Указы</a>
          <a href="#">Обращения</a>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold text-[20px]">Наши контакты</p>
          <p>+7 (878) 228-42-36</p>
          <p className="w-80">
            Россия, Карачаево-Черкесская Республика, Черкесск, проспект Ленина,
            326
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold text-[20px]">Как нас найти</p>
          <div className="w-64 h-52 bg-[#D9D9D9]">
            <YMaps>
              <Map defaultState={mapState} className="w-full h-full"></Map>
            </YMaps>
          </div>
        </div>
      </div>
      <div className="w-full h-10 border-t-2 border-[#004B2D] items-center flex justify-between text-[#004B2D]"></div>
    </div>
  );
}
