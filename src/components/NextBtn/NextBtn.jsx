import React from 'react';
import './NextBtn.scss';
import { useNavigate } from 'react-router-dom';

const NextBtn = ({ isCheck, text, selectedFood }) => {
  const navigate = useNavigate();
  const { meal, age, spicy, type } = isCheck || {};

  const allChecked = meal && age && spicy && type;

  const handleSubmit = () => {
    if (selectedFood) {
      // 사용자에게 이동을 확인하는 메시지를 보여줍니다.
      if (
        window.confirm(
          '저장후 이동하시겠습니까? 저장 후 이동하시면 무조건 드시는겁니다!ㅋㅋ 오늘 앱 이용은 종료됩니다.',
        )
      ) {
        const searchUrl = `https://map.naver.com/v5/search/${encodeURIComponent(
          selectedFood,
        )}`;

        // 사용자가 '예'를 클릭한 경우, 새 창을 열고 음식을 로컬스토리지에 저장합니다.
        window.open(searchUrl, '_blank');
        navigate('/');
      } else {
        alert('이동하겠습니다.');
        const searchUrl = `https://map.naver.com/v5/search/${encodeURIComponent(
          selectedFood,
        )}`;

        // 사용자가 '예'를 클릭한 경우, 새 창을 열고 음식을 로컬스토리지에 저장합니다.
        window.open(searchUrl, '_blank');
        navigate('/');
      }
    } else {
      if (allChecked) navigate('/eat');
    }
  };

  return (
    <button className="nextBtn" type="button" onClick={handleSubmit}>
      {isCheck && !allChecked ? '모두 선택해 주세요' : text}
    </button>
  );
};
export default NextBtn;
