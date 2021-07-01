import React from "react";
import ChevronLeftOutlined from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlined from "@material-ui/icons/ChevronRightOutlined";
const Pagination = ({ getUrl }) => {
  let pageNo = 1;
  const anchor = document.querySelectorAll("a");
  anchor.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      removeActive();
      a.classList.add("active");
      pageNo = +a.innerText;
      const url = `https://api.thedogapi.com/v1/breeds?limit=50&page=${pageNo}&order=Asc`;
      console.log(url);
      getUrl(url);
    });
  });
  function removeActive() {
    anchor.forEach((a) => {
      a.classList.remove("active");
    });
  }
  return (
    <>
      <div className="pagination">
        <ChevronLeftOutlined
          role="button"
          onClick={() => {
            if (pageNo !== 1) {
              pageNo = pageNo - 1;
              const url = `https://api.thedogapi.com/v1/breeds?limit=50&page=${pageNo}&order=Asc`;
              getUrl(url);
              console.log(url)
            } else {
              alert("Can not go to Back!");
            }
          }}
          id="prev"
          className="arrow"
          style={{ fontSize: 30 }}
        />
        <a href="" className="active">
          1
        </a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <ChevronRightOutlined
          role="button"
          onClick={() => {
            pageNo = pageNo + 1;
            const url = `https://api.thedogapi.com/v1/breeds?limit=50&page=${pageNo}&order=Asc`;
            console.log(url)
            getUrl(url);
          }}
          id="next"
          className="arrow"
          style={{ fontSize: 30 }}
        />
      </div>
    </>
  );
};

export default Pagination;
