import React from 'react';

// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Navbar = ({ authenticate , setAuthenticate}) => {
  const menulist = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    if (authenticate === false) {
      navigate('/shopping/login');
    } else{
      setAuthenticate(false);
    }
  };
  const goToHome = () => {
    navigate('/shopping');
  };

  const search = (event)=>{
    // console.log('keypress', event)

    if(event.key === 'Enter'){
      // console.log('we click this Key eventer!!!!!!')
      // 입력한 검색어를 읽어와서 url을 바꿔준다

      let keyword = event.target.value;
      console.log('keyword : ', keyword)
      
      navigate(`/shopping/?q=${keyword}`)
    }
  }

  return (
    <NavWrap>
      <Login onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <p>{authenticate == true ? 'Logout' : 'Login'}</p>
      </Login>
      <div>
        <img
          onClick={goToHome}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          style={{ width: '80px' }}
        />
      </div>

      <div>
        <ul>
          {menulist.map((list, idx) => {
            return <li key={idx}>{list}</li>;
          })}
        </ul>

        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type={'text'} onKeyPress={(event)=>{search(event)}}/>
        </div>
      </div>
    </NavWrap>
  );
};

export default Navbar;

const NavWrap = styled.div`
  padding: 20px;
  box-sizing: border-box;

  > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  > div:nth-of-type(3) {
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
    margin-top: 20px;

    > ul {
      display: flex;
      justify-content: center;
      list-style: none;
      gap: 10px;
    }

    > div {
      position: absolute;
      right: 20px;
      border-bottom: 1px solid #eee;

      > input {
        width: 150px;
        margin-left: 8px;
        border: none;
        outline: none;
      }
    }
  }
`;
const Login = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  height: 20px;

  cursor: pointer;

  > p {
    margin: 0;
    padding: 0;
  }
`;
