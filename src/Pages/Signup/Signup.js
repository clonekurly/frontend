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

import React, { useState } from "react";

function Signup() {
  const [inputs, setInputs] = useState({
    Id: "",
    showIdInfo: false,
    Pwd: "",
    showPwdInfo: false,
    RePwd: "",
    showRePwdInfo: false,
    username: "",
    phone: "",
    email: "",
  });

  const {
    Id,
    showIdInfo,
    Pwd,
    showPwdInfo,
    RePwd,
    showRePwdInfo,
    username,
    phone,
    email,
  } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
      //핸드폰번호 text아닌 숫자로 입력될까봐...
    });
  };

  const onClick = (e) => {
    console.log(e.target.name);
    let name = `show${e.target.name}Info`;
    setInputs({
      ...inputs,
      [name]: true,
    });
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

      <div className="signup_content">
        <div className="signup_Id_wrap">
          <div className="signup_Id_title">
            아이디<span className="ico">*</span>
          </div>
          <input
            className="signup_Id_input"
            type="text"
            name="Id"
            placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
            maxLength="16"
            onChange={onChange}
            value={Id}
            onClick={onClick}
          />
          <div className="signup_Id_check">중복확인</div>
        </div>
        {showIdInfo ? (
          <div className="signup_Id_info">
            <li>6자 이상의 영문과 숫자를 조합</li>
            <li> 아이디 중복 확인</li>
          </div>
        ) : null}

        <div className="signup_Pw_wrap">
          <div className="signup_Pw_title">
            비밀번호<span className="ico">*</span>
          </div>
          <input
            className="signup_Pw_input"
            name="Pwd"
            placeholder="비밀번호를 입력해주세요"
            maxLength="16"
            onChange={onChange}
            value={Pwd}
            onClick={onClick}
          />
          {showPwdInfo ? (
            <div className="signup_Id_info">
              <li>10자 이상 입력</li>
              <li> 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</li>
              <li>동일한 숫자 3개 이상 연속 사용 불가</li>
            </div>
          ) : null}
        </div>

        <div className="signup_RePw_wrap">
          <div className="signup_RePw_title">
            비밀번호<span className="ico">*</span>
          </div>
          <input
            className="signup_RePw_input"
            type="text"
            name="RePwd"
            placeholder="비밀번호를 한번 더 입력해주세요"
            maxLength="16"
            onChange={onChange}
            value={RePwd}
            onClick={onClick}
          />
        </div>
        {showRePwdInfo ? (
          <div className="signup_Id_info">
            <li>동일한 비밀번호를 입력해주세요</li>
          </div>
        ) : null}

        <div className="signup_Username_wrap">
          <div className="signup_Username_title">
            이름<span className="ico">*</span>
          </div>
          <input
            className="signup_Username_input"
            type="text"
            name="username"
            placeholder="이름을 입력해주세요"
            onChange={onChange}
            value={username}
          />
        </div>
        <div className="signup_Email_wrap">
          <div className="signup_Email_title">
            이메일<span className="ico">*</span>
          </div>
          <input
            className="signup_Email_input"
            type="text"
            name="email"
            placeholder="예:markerkeyrly@kurly.com"
            onChange={onChange}
            value={email}
          />
          <div className="signup_Email_check">중복확인</div>
        </div>
        <div className="signup_Phone_wrap">
          <div className="signup_Phone_title">
            휴대폰<span className="ico">*</span>
          </div>
          <input
            className="signup_Phone_input"
            type="text"
            name="phone"
            placeholder="숫자 입력해주세요"
            pattern="[0-9]*"
            onChange={onChange}
            value={phone}
          />
          <div className="signup_Phone_check">중복확인</div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
