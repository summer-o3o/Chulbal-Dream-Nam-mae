import React, { useState, useCallback } from 'react';
import './Option.scss';

const Option = ({ isCheck, setISCheck }) => {
  const [activeIds, setActiveIds] = useState([1]);

  // const handleCheck = useCallback(
  //   (e) => {
  //     const { title, value } = e.target;
  //     const currentOptionIndex =
  //       OPTION_LIST.findIndex((option) => option.title === title) + 1;

  //     if (isCheck[title] === value) {
  //       setActiveIds((ids) => ids.filter((id) => id <= currentOptionIndex));
  //       setISCheck((prev) => {
  //         let newIsCheck = { ...prev };
  //         for (let i = currentOptionIndex; i <= OPTION_LIST.length; i++) {
  //           const optionTitle = OPTION_LIST[i - 1].title;
  //           newIsCheck[optionTitle] = '';
  //         }
  //         return newIsCheck;
  //       });
  //     } else {
  //       setActiveIds((ids) => [...ids, currentOptionIndex + 1]);
  //       setISCheck((prev) => ({ ...prev, [title]: value }));
  //     }
  //   },
  //   [isCheck]
  // );

  const handleCheck = id => {
    /**
     * 0,1 번
     * 2,3 번
     * 4, 5번
     * 6번 7번
     */
    // switch (id) {
    //   case 0:
    //     console.log('dd');
    //     break;
    //   default:
    // }
    // if (meal ) {

    // }
    console.log(id);
  };

  return (
    <div className="RecommendWrap">
      {OPTION_LIST.map((option, index) => (
        <button
          key={index}
          className="RecommendBox"
          // className={`RecommendBox ${
          //   isCheck[option.title] === text ? 'checked' : ''
          // }`}
          onClick={() => handleCheck(option.id)}
          type="button"
        >
          {option.value}
          <img className="RecommendCheck" src="../img/check.svg" alt="" />
        </button>
      ))}
    </div>
  );
};

export default Option;

const OPTION_LIST = [
  { id: 0, value: '점심' },
  { id: 1, value: '저녁' },
  { id: 2, value: '20대 이하' },
  { id: 3, value: '20대 이상' },
  { id: 4, value: '맵초보' },
  { id: 5, value: '맵달인' },
  { id: 6, value: '다이어트식' },
  { id: 7, value: '일반식' },
];
