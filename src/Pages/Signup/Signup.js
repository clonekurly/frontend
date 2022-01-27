import React, { useState, useEffect } from "react";

/*
POST
/member
application/json
{
    "request": {
        "payload": {
            "Info": {
                "memberId" : "rottenpear99", 
                "memberPwd" : "rott0000000",
                "username" : "Chaerin Lee",
                "email" : "rottenpear99@naver.com",
                "address" : "서울특별시 마포구 공덕동",
                "birthDate" : 1993-11-25,
                "phone" : "01038307035",
                "sex" : 1
            }
        }
    }
}
*/

const Signup = () => {
  const [showId, setshowId] = useState(false);
  const [showPwd, setshowPwd] = useState(false);
  const [showRePwd, setshowRePwd] = useState(false);
  const [username, setusername] = useState("");

  const [form, setForm] = useState({
    memberId: "",

    memberPwd: "",

    RePwd: "",

    email: "",
    address: "",

    birthDate: "",
    phone: "",
    sex: "",
  });
  const {
    memberId,

    memberPwd,

    RePwd,

    email,
    address,
    showAddress,
    birthDate,
    phone,
    sex,
  } = form;

  /*  const onChange = (e) => {
    setTimeout(() => console.log(e), 500);
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어씌우기
    };
    setForm(nextForm);
  };*/

  const ShowIdGuide = () => {
    setshowId(true);
  };

  const ShowPwdGuide = () => {
    setshowPwd(true);
  };

  const ShowRePwdGuide = () => {
    setshowRePwd(true);
  };

  return (
    <div className="signup_main">
      <div className="signup_title">
        <h2>회원가입</h2>
        <p className="signup_sub">
          <span className="ico">*</span>
          필수입력사항
        </p>
      </div>
      <div className="signup_form">
        <div className="signup_wrap">
          <div className="signup_Id">
            <div className="signup_Id_title">
              아이디
              <span className="ico">*</span>
            </div>
            <div className="signup_Id_wrap">
              <input
                type="text"
                name="memberId"
                maxLength="16"
                label="아이디"
                placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                className="signup_Id_input"
                onClick={ShowIdGuide}
              />
              <div className="signup_Id_btn"> 중복 확인</div>
            </div>
            {showId ? (
              <div className="SignupGuide">
                <li>6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                <li>아이디 중복확인</li>
              </div>
            ) : null}
          </div>

          <div className="signup_Pwd">
            <div className="signup_Pwd_title">
              비밀번호
              <span className="ico">*</span>
            </div>
            <div className="signup_Pwd_wrap">
              <input
                type="text"
                name="memberPwd"
                maxLength="16"
                label="비밀번호"
                placeholder="비밀번호를 입력하세요"
                className="signup_Pwd_input"
                onClick={ShowPwdGuide}
              />
            </div>
            {showPwd ? (
              <div className="SignupGuide">
                <li>10자 이상 입력</li>
                <li>영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합</li>
                <li>동일한 숫자 3개 이상 연속 사용 불가</li>
              </div>
            ) : null}
          </div>

          <div className="signup_RePwd">
            <div className="signup_RePwd_title">
              비밀번호확인
              <span className="ico">*</span>
            </div>
            <div className="signup_RePwd_wrap">
              <input
                type="text"
                name="memberPwd"
                maxLength="16"
                label="비밀번호"
                placeholder="비밀번호를 한번 더 입력하세요"
                className="signup_RePwd_input"
                onClick={ShowRePwdGuide}
              />
            </div>
            {showRePwd ? (
              <div className="SignupGuide">
                <li>동일한 비밀번호를 입력해주세요</li>
              </div>
            ) : null}
          </div>

          <div className="signup_Name">
            <div className="signup_Name_title">
              이름
              <span className="ico">*</span>
            </div>
            <div className="signup_Name_wrap">
              <input
                type="text"
                name="username"
                maxLength="16"
                label="이름"
                placeholder="이름를 입력하세요"
                className="signup_Name_input"
              />
            </div>
          </div>

          <div className="signup_Email">
            <div className="signup_Email_title">
              이메일
              <span className="ico">*</span>
            </div>
            <div className="signup_Email_wrap">
              <input
                type="text"
                name="email"
                label="이메일"
                placeholder="예:marketkurly@kurly.com"
                className="signup_Email_input"
              />
              <div className="signup_Email_btn"> 중복 확인</div>
            </div>
          </div>

          <div className="signup_Phone">
            <div className="signup_Phone_title">
              이메일
              <span className="ico">*</span>
            </div>
            <div className="signup_Phone_wrap">
              <input
                type="text"
                name="phone"
                label="이메일"
                placeholder="숫자만 입력하시오"
                pattern="[0-9]*"
                className="signup_Phone_input"
              />
              <div className="signup_Phone_btn"> 인증번호 받기</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="유저명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
    */
  );
};
export default Signup;
