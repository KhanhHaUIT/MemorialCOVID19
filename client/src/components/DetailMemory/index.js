import React, { useContext, useEffect, useState } from "react";
import "./DetailMemory.css";
import { Link, useParams } from "react-router-dom";

import { MemorialContext } from "../../contexts/MemorialContext";
import { CommentContext } from "../../contexts/CommentContext";
import ViewMoreMemorial from "./ViewMoreMemorial";
import { AuthContext } from "../../contexts/AuthContext";
import Comment from "./Comment";

export default function DetailMemory() {
  const {
    memorialState: { memorial },
    getMemorial,
  } = useContext(MemorialContext);


  const {
    addComment
  } = useContext(CommentContext);
  
  const {
    authState: {
      user,
      isAuthenticated,
    }
  } = useContext(AuthContext)
  const [comment, setComment] = useState("");
  const { cardId } = useParams();
  useEffect(() => {
    getMemorial(cardId);
  }, [cardId]);

  const handleComment = (e) => {
    e.preventDefault();
    // addComment({
    //   senderId: _id,
    //   memorialId: memorial._id,
    //   message: comment
    // });
    // setComment("");
    if(!isAuthenticated){
      alert("You must be logged in to comment")
    }else{
      addComment({
        senderId: user._id,
        memorialId: memorial._id,
        message: comment
      });
      
      
      setComment("");
    }
  };
  
  return (
    <section className="section page-detail top-detail">
      <div className="container">
        <div className="social_pin">
          <ul className="social_left">
            <li>
              <a
                href="https://www.facebook.com/congdongvnexpress"
                className="social_fb flexbox btn_share"
                data-type="fb"
                rel="nofollow"
                title="Chia sẻ bài viết lên facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/VnEnews"
                className="social_twit flexbox btn_share"
                data-type="tw"
                rel="nofollow"
                data-url="https://bit.ly/3FySNza"
                title="Chia sẻ bài viết lên twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li
              className="myvne_save_for_later"
              data-token="349481b806b6ae91fbc94739b8812d16"
              data-article-id={4392821}
              title="Lưu bài viết"
            >
              <a href="javascript:void(0);" className="social_save flexbox">
                <i className="bi bi-save-fill"></i>
              </a>
            </li>
            <li className="li_comment">
              <a
                href="#box_comment_vne"
                className="social_comment flexbox"
                title="Bình luận"
              >
                <i className="bi bi-chat-left-fill"></i>
                <span className="number_cmt num_cmt_detail widget-comment-4392821-1" />
              </a>
            </li>
            <li>
              <a
                href="/thoi-su/tuong-nho-nan-nhan-covid-19"
                className="social_back flexbox"
              >
                <i className="bi bi-arrow-left"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-1">
          <div className="header-content width_common">
            <ul className="breadcrumb" data-campaign="Header">
              <li>
                <Link
                  data-medium="Menu-TuongNhoNanNhanCovid19"
                  to="/"
                  title="Tưởng nhớ nạn nhân Covid-19"
                >
                  Tưởng nhớ nạn nhân Covid-19
                </Link>
              </li>{" "}
              <span id="parentCateDetail" data-cate={1005155} />
              <span id="site-sub-id" data-cate={1005155} />
              <li>Tưởng niệm</li>
            </ul>
            <span className="date d-none">
              Thứ hai, 22/11/2021, 14:03 (GMT+7)
            </span>
          </div>
          <h1 className="title-detail">
            {memorial?.deceasedPersonName} ({memorial?.birthYear} -{" "}
            {memorial?.deathYear})
          </h1>
          <p className="description address">
            {memorial?.district}, {memorial?.province}
          </p>
          <article className="fck_detail ">
            <p className="Normal">{memorial?.remembranceWords}</p>
            <p className="author_mail">
              <strong>
                {memorial?.relationship}: {memorial?.senderName}
              </strong>
            </p>
          </article>
          <div class="footer-content  width_common">
            <Link to="/" class="save back-folder minus">
              <i className="bi bi-arrow-left"></i>
            </Link>
            <a
              class="item-like art-like-toggle usi_tl_4394881 usi_loaded"
              data-aid="4394881"
              data-type="1"
              data-total="63"
            >
              <div class="icon"></div>
              <div class="text">
                Thắp nến <strong class="num">{memorial?.candles?.length}</strong>
              </div>
            </a>
            <div class="social">
              <span class="txt">Chia sẻ</span>
              <a
                href="https://facebook.com"
                class="fb btn_share"
                data-type="fb"
                title="Chia sẻ bài viết lên facebook"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                class="tw btn_share"
                data-type="tw"
                rel="noreferrer"
                data-url="https://bit.ly/3xsxw7l"
                title="Chia sẻ bài viết lên twitter"
                target="_blank"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://gmail.com"
                rel="noreferrer"
                title="Mail"
                target="_blank"
              >
                <i class="bi bi-envelope-fill"></i>
              </a>
              <a
                href="gmail.com"
                class="share-link btn_copy"
                rel="noreferrer"
                title="Copy link"
                target="_blank"
              >
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>

          {/* Footer */}

          <div className="section-comment">
            <div
              className="box_comment_vne width_common"
              style={{
                transformOrigin: "0px 0px",
                opacity: 1,
                transform: "scale(1, 1)",
              }}
            >
              <div
                className="ykien_vne width_common"
                style={{
                  transformOrigin: "0px 0px",
                  opacity: 1,
                  transform: "scale(1, 1)",
                }}
              >
                <div className="left">
                  <h3
                    style={{ display: "inline-block", fontWeight: "bold" }}
                    rel="time"
                  >
                    Ý kiến
                  </h3>
                </div>
              </div>

              {/* Bình luận */}
              <div className="input_comment width_common">
                <form
                  id="comment_post_form"
                  onSubmit={handleComment}
                  style={{ display: "flex" }}
                >
                  <div className="box-area-input width_common">
                    <textarea
                      id="txtComment"
                      className="txt_comment block_input"
                      placeholder="Ý kiến của bạn"
                      style={{ height: 30, maxHeight: 30, width: "650px" }}
                      defaultValue={""}
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                    />

                    <span
                      className="note-count-text"
                      style={{ display: "none" }}
                    >
                      <span className="counter_world">0</span> / 1500 ký tự
                    </span>
                  </div>{" "}
                  <button className="btn btn-info" type="submit">
                    Gửi
                  </button>
                  <span
                    className="error_lk error_txt_cmt"
                    style={{ display: "none" }}
                  >
                    Bạn chưa nhập nội dung bình luận.
                  </span>
                  <div
                    className="width_common block_relative"
                    style={{ display: "none" }}
                  >
                    <div className="left block_not_login block_anonymous" />
                    <div className="right block_btn_send">
                      <button
                        type="button"
                        value="Gửi"
                        className="btn_send_comment btn_vne"
                        id="comment_post_button"
                      >
                        Gửi
                      </button>
                    </div>
                    <div
                      className="like_google"
                      style={{
                        transformOrigin: "0px 0px",
                        opacity: 1,
                        transform: "scale(1, 1)",
                      }}
                    >
                      <div className="google_name">
                        <img
                          id="open_id_status"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          width="24px"
                          height="30px"
                          alt="vnexpress"
                          className="google_active"
                        />
                        <span id="open_id_name" />
                      </div>
                      <div
                        className="block_action_google"
                        style={{ display: "none" }}
                      >
                        <ul>
                          <li>
                            <a
                              id="open_id_share"
                              href="javascript:;"
                              title="Tắt chia sẻ"
                            >
                              Tắt chia sẻ
                            </a>
                          </li>
                          <li>
                            <a
                              id="open_id_sigout"
                              href="javascript:;"
                              title="Đăng xuất"
                            >
                              Đăng xuất
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
                <div
                  id="comment_reply_wrapper"
                  className="input_comment reply_input_comment width_common"
                  style={{ display: "none" }}
                >
                  <form id="comment_reply_form">
                    <div className="box-area-input width_common">
                      <textarea
                        id="txtComments"
                        className="txt_comment block_input"
                        placeholder="Ý kiến của bạn"
                        style={{ height: 30, maxHeight: 30 }}
                        defaultValue={""}
                      />
                      <span
                        className="note-count-text"
                        style={{ display: "none" }}
                      >
                        <span className="counter_world">0</span> / 1500 ký tự
                      </span>
                    </div>
                    <span
                      className="error_lk error_txt_cmt"
                      style={{ display: "none" }}
                    >
                      Bạn chưa nhập nội dung bình luận.
                    </span>
                    <div
                      className="box_emoji"
                      style={{
                        transformOrigin: "0px 0px",
                        opacity: 1,
                        transform: "scale(1, 1)",
                      }}
                    >
                      <svg className="icon icon_emoji emoji-icon">
                        <use xlinkHref="#emoji-icon" />
                      </svg>
                      <div className="list_emoji">
                        <ul className="ul_emoji">
                          <li className="item_emoji" data-emj=":-)">
                            <svg className="icon icon_emoji emoji-1">
                              <use xlinkHref="#emoji-1" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":-D">
                            <svg className="icon icon_emoji emoji-2">
                              <use xlinkHref="#emoji-2" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj="xD">
                            <svg className="icon icon_emoji emoji-3">
                              <use xlinkHref="#emoji-3" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":')">
                            <svg className="icon icon_emoji emoji-4">
                              <use xlinkHref="#emoji-4" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":P">
                            <svg className="icon icon_emoji emoji-5">
                              <use xlinkHref="#emoji-5" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=";)">
                            <svg className="icon icon_emoji emoji-6">
                              <use xlinkHref="#emoji-6" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj="^^">
                            <svg className="icon icon_emoji emoji-7">
                              <use xlinkHref="#emoji-7" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj="^_^">
                            <svg className="icon icon_emoji emoji-8">
                              <use xlinkHref="#emoji-8" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj="<3">
                            <svg className="icon icon_emoji emoji-9">
                              <use xlinkHref="#emoji-9" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":^*">
                            <svg className="icon icon_emoji emoji-10">
                              <use xlinkHref="#emoji-10" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj="B)">
                            <svg className="icon icon_emoji emoji-11">
                              <use xlinkHref="#emoji-11" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":|">
                            <svg className="icon icon_emoji emoji-12">
                              <use xlinkHref="#emoji-12" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":o">
                            <svg className="icon icon_emoji emoji-13">
                              <use xlinkHref="#emoji-13" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":(">
                            <svg className="icon icon_emoji emoji-14">
                              <use xlinkHref="#emoji-14" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":'(">
                            <svg className="icon icon_emoji emoji-15">
                              <use xlinkHref="#emoji-15" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":-/">
                            <svg className="icon icon_emoji emoji-16">
                              <use xlinkHref="#emoji-16" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":@">
                            <svg className="icon icon_emoji emoji-17">
                              <use xlinkHref="#emoji-17" />
                            </svg>
                          </li>
                          <li className="item_emoji" data-emj=":VN:">
                            <svg className="icon icon_emoji emoji-18">
                              <use xlinkHref="#emoji-18" />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="width_common block_relative"
                      style={{ display: "none" }}
                    >
                      <div className="left block_not_login block_anonymous" />
                      <div className="right">
                        <button
                          type="button"
                          value="Gửi"
                          className="btn_send_comment btn_vne"
                          id="comment_reply_button"
                        >
                          Gửi
                        </button>
                      </div>
                      <div
                        className="like_google"
                        style={{
                          transformOrigin: "0px 0px",
                          opacity: 1,
                          transform: "scale(1, 1)",
                        }}
                      >
                        <div className="google_name">
                          <img
                            id="open_id_status"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                            width="24px"
                            height="30px"
                            alt="vnexpress"
                            className="google_active"
                          />
                          <span id="open_id_name" />
                        </div>
                        <div
                          className="block_action_google"
                          style={{ display: "none" }}
                        >
                          <ul>
                            <li>
                              <a
                                id="open_id_share"
                                href="javascript:;"
                                title="Tắt chia sẻ"
                              >
                                Tắt chia sẻ
                              </a>
                            </li>
                            <li>
                              <a
                                id="open_id_sigout"
                                href="javascript:;"
                                title="Đăng xuất"
                              >
                                Đăng xuất
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Filter */}
              <div className="width_common" id="box_comment">
                <div
                  className="main_show_comment width_common mb10"
                  id="list_comment"
                  style={{
                    transformOrigin: "0px 0px",
                    opacity: 1,
                    transform: "scale(1, 1)",
                    height: "100%",
                  }}
                >
                  <Comment />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ViewMoreMemorial />
      </div>
    </section>
  );
}
