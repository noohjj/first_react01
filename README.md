\*jsx문법
=> react에서 사용 가능한 문법
=> js 파일에서 태그를 사용할 수 있음
=> 반환되는 태그가 하나 - 반드시 부모태그가 존재해야 함
=> 태그는 반드시 닫을 것

\*fragment 태그
=> 부모역할 태그
=> <></> 꺽쇠 괄호만 사용
=>fragment 컴포넌트를 불러와서 사용

컴포넌트 만들 때 이름은 항상 첫글자를 대문자로!

const Ex2 = ({ Menus }) => {
return (

<div>
<h2>{Menus[0].title}</h2>
<p>
메인:{Menus[0].main}
<br />
서브메뉴:{Menus[0].sub}
</p>

      <h2>{Menus[1].title}</h2>
      <p>
        메인:{Menus[1].main}
        <br />
        서브메뉴:{Menus[1].sub}
      </p>

      <h2>{Menus[2].title}</h2>
      <p>
        메인:{Menus[2].main}
        <br />
        서브메뉴:{Menus[2].sub}
      </p>
    </div>

);
};

// const Menus = [
// {
// id: 0,
// title: "아침메뉴",
// main: "시리얼",
// sub: "커피",
// },
// {
// id: 1,
// title: "점심메뉴",
// main: "샌드위치",
// sub: "마카롱",
// },
// {
// id: 2,
// title: "저녁메뉴",
// main: "샌드위치",
// sub: "마카롱",
// },
// ];
export default Ex2;
