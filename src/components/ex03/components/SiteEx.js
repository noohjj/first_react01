const arr = [
  {
    id: 0,
    title: "유튜브 바로가기",
    url: "https://youtube.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
  },
  {
    id: 1,
    title: "네이버 바로가기",
    url: "https://www.naver.com/",
    logo: "https://w7.pngwing.com/pngs/775/1022/png-transparent-naver-logo-search-engines.png",
  },
];

const SiteEx = () => {
  return (
    <div>
      {arr.map((Site) => (
        <div key={Site.id}>
          <h2>{Site.title}</h2>
          <a href={Site.url}>
            <img src={Site.logo} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SiteEx;
