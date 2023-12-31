import React, { useState } from "react";

import Input from "@/components/Input";
import Tag from "@/components/Tag";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

import * as S from "./styled";

import { EButtonSize } from "@/components/Button/interface";

import * as icon from "@/assets/images/icons/index";

function SampleIndex() {
  const [text, setText] = useState("");

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.replace(/\D/g, ""));
  };

  return (
    <>
      <h1>샘플 페이지</h1>
      <div>
        <Tag label="블라블라" />
      </div>
      <div>
        <Input value={text} onChange={handleText} />
        {text}
      </div>

      <Button text={"헷"} size={EButtonSize.MEDIUM} />
      <Button text={"헷11"} href={"/"} />

      <S.FloatingHome to="/">
        <Icon width={20} height={20}>
          <icon.Home />
        </Icon>
      </S.FloatingHome>
    </>
  );
}

export default SampleIndex;
