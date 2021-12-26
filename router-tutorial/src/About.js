import React from 'react';
import qs from 'qs';

const About = ({location}) =>{

    const query = qs.parse(location.search,{
        ignoreQueryPrefix: true //문자열 맨 앞에 ? 를 생략
    });
    const showDetail = query.detail === 'true' ;

    return(
        <div>
            <h1>소개</h1>
            <p>라우터 예제 실습 코드</p>
            {showDetail && <p>detail 값을 true 로 설정하셨습니다!</p>}
        </div>
    );
};

export default About;