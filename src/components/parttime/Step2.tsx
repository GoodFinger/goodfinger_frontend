import React from "react";
import styled from "styled-components";

interface Step2Props {
  recruitment: number;
  preferredSex: string;
  preferredAge: Array<number>;
  preferredFlag: boolean;
  handleRecruitment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePreferredSex: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePreferredAge: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePreferredFlag: (e: React.ChangeEvent<HTMLInputElement>) => void;
  moveNext: () => void;
  moveBack: () => void;
}

function Step2({
  recruitment,
  preferredSex,
  preferredAge,
  preferredFlag,
  handleRecruitment,
  handlePreferredSex,
  handlePreferredAge,
  handlePreferredFlag,
  moveNext,
  moveBack,
}: Step2Props) {
  return (
    <div>
      <div>
        <button onClick={moveBack}>뒤로가기</button>
      </div>
      <div>
        <div>인원</div>
        <input type="number" value={recruitment} onChange={handleRecruitment} />
      </div>
      <div>
        <div>선호나이</div>
        <input
          type="radio"
          name="preferredAge"
          id="preferred_no"
          value="no"
          onChange={handlePreferredFlag}
          checked={!preferredFlag}
        />
        <label htmlFor="preferred_no">없음</label>
        <input
          type="radio"
          name="preferredAge"
          id="preferred_yes"
          value="yes"
          onChange={handlePreferredFlag}
          checked={preferredFlag}
        />
        <label htmlFor="preferred_yes">있음</label>
        {preferredFlag && (
          <div>
            <input
              type="checkbox"
              id="age_10"
              value="10"
              onChange={handlePreferredAge}
              checked={preferredAge.filter((data) => data === 10).length > 0}
            />
            <label htmlFor="age_10">10대</label>
            <input
              type="checkbox"
              id="age_20"
              value="20"
              onChange={handlePreferredAge}
              checked={preferredAge.filter((data) => data === 20).length > 0}
            />
            <label htmlFor="age_20">20대</label>
            <input
              type="checkbox"
              id="age_30"
              value="30"
              onChange={handlePreferredAge}
              checked={preferredAge.filter((data) => data === 30).length > 0}
            />
            <label htmlFor="age_30">30대</label>
            <input
              type="checkbox"
              id="age_40"
              value="40"
              onChange={handlePreferredAge}
              checked={preferredAge.filter((data) => data === 40).length > 0}
            />
            <label htmlFor="age_40">40대</label>
          </div>
        )}
      </div>
      <div>
        <div>선호성별</div>
        <input
          type="radio"
          value="no"
          name="sex"
          onChange={handlePreferredSex}
          checked={preferredSex === "no"}
          id="no_sex"
        />
        <label htmlFor="no_sex">성별무관</label>
        <input
          type="radio"
          value="female"
          name="sex"
          onChange={handlePreferredSex}
          checked={preferredSex === "female"}
          id="sex_female"
        />
        <label htmlFor="sex_female">여성</label>
        <input
          type="radio"
          value="male"
          name="sex"
          onChange={handlePreferredSex}
          checked={preferredSex === "male"}
          id="sex_male"
        />
        <label htmlFor="sex_male">남성</label>
      </div>
      <div>
        <button onClick={moveNext}>MoveNext</button>
      </div>
    </div>
  );
}

export default Step2;
