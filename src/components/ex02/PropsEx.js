import Contents from "./components/Contents";
import Ex from "./components/Ex";
// import "./style.css";

// const Menus = [
//   {
//     id: 0,
//     title: "아침메뉴",
//     main: "시리얼",
//     sub: "커피",
//   },
//   {
//     id: 1,
//     title: "점심메뉴",
//     main: "샌드위치",
//     sub: "마카롱",
//   },
//   {
//     id: 2,
//     title: "저녁메뉴",
//     main: "샌드위치",
//     sub: "마카롱",
//   },
// ];

const PropsEx = () => {
  return (
    <>
      <div className="wrap">
        <div className="morning">
          <Contents text="아침메뉴" bgColor="lightblue" />
          <Contents text="메인: 시리얼" bgColor="cyan" />
          <Contents text="서브메뉴: 커피" bgColor="cyan" />
        </div>
        <div className="noon">
          <Contents text="점심메뉴" bgColor="orange" />
          <Contents text="메인: 샌드위치" bgColor="cyan" />
          <Contents text="서브메뉴: 마카롱" bgColor="cyan" />
        </div>
        <div className="evening">
          <Ex text="저녁메뉴" bgColor="salmon" />
          <Ex text="메인: 샌드위치" bgColor="cyan" />
          <Ex text="서브메뉴: 마카롱" bgColor="cyan" />
        </div>
      </div>
    </>
  );
};

export default PropsEx;
