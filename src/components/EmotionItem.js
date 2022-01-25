import React from "react";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_decript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      // 클래스를 배열로 준후에 join으로 합쳐준다.(삼항연산자로 토글 처럼 활용가능.)
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img src={emotion_img} />
      <span>{emotion_decript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
