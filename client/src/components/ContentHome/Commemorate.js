import React, { useContext, useEffect, useState } from "react";
import "./Commemorate.css";
import Candle from "../../assets/candle.png";
import { MemorialContext } from "../../contexts/MemorialContext";
import { Link } from "react-router-dom";

export default function Commemorate() {
  const {
    memorialState: { memorials },
    getMemorials,
    toggleCandles,
    searchMemorials
  } = useContext(MemorialContext);

  
  const [keyword, setKeyword] = useState("");
 
  const handleSearch = e => {
    searchMemorials(keyword);
    
    setKeyword("");
    
  }

  useEffect(() => {
    getMemorials();
  }, []);

  

  return (
    <section className="section-frame2 clearfix">
      <div className="container list-comment">
        <h2 className="title-cate txt_34 color-main">Tưởng nhớ</h2>
        <div className="box-search">
          <div className="search search-vne" id="formSearchHeader">
            <input
              id="searchQuery"
              type="text"
              name="q"
              placeholder="Tìm kiếm theo tên"
              autoComplete="off"
              onChange={e => setKeyword(e.target.value)}
              value={keyword}
             
            />

            <button
              type="submit"
              title="Tìm kiếm"
              className="btn-search-vne"
              id="searchForum"
              onClick={handleSearch}
              
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        <ul className="list-item d-flex justify-content-between align-items-center">
          {memorials.length > 0 &&
            memorials.map((memorial, index) => (
              <li key={index}>
                <div class="item">
                  <h3 className="title">
                   <Link to={`/${memorial._id}`} title="ABC"> 
                      {memorial?.deceasedPersonName}
                    </Link>
                  </h3>
                  <div className="address">
                    {memorial?.district}, {memorial?.province}
                  </div>
                  <div className="item-comment">
                    <div className="content_less">
                      <p className="Normal">{memorial?.remembranceWords}</p>
                    </div>
                  </div>
                  <p>{memorial?.relationship}</p>
                  <div className="item-username">
                    <div> {memorial?.senderName}</div>
                  </div>

                  <div className="social cmt-show" cmt-show={1}>
                    <button
                      className="item-like art-like-toggle usi_tl_4393713 usi_loaded"
                      onClick={() => {
                        toggleCandles(memorial._id);
                      }}
                      data-aid={4393713}
                      data-type={1}
                      title="Thắp nến"
                      data-total={74}
                    >
                      <div className="icon">
                        <img src={Candle} alt="anh" />
                      </div>
                      <div className="text">
                        Thắp nến
                        {" "}
                        <strong className="num">{memorial?.candles?.length}</strong>
                      </div>
                    </button>
                    <a className="face"></a>
                    <a
                      className="count_cmt comment"
                      style={{ whiteSpace: "nowrap", display: "none" }}
                    >
                      <span className="font_icon number widget-comment-4393713-1"></span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
