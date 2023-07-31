const Logo = function () {
  const arr10 = Array.from({ length: 10 }, (_, i) => i + 1);
  // console.log(arr10);

  return (
    <header className="header">
      <div className="header__box-img">
        {arr10.map((num) => {
          return (
            <img src={`./../img/img-${num}.jpg`} alt={`img ${num}`} key={num} />
          );
        })}
      </div>

      <h1>🌴Far Away🌴</h1>
    </header>
  );
};

export default Logo;
