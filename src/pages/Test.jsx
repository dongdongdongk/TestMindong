import React from "react";
import { useState } from "react";
import axios from "axios"; // axios import 추가

const apiUrl = process.env.REACT_APP_HOST;
const Test = () => {
    const [test, setTest] = useState();

    const testButton = async () => {
        try {
            // const dummy = 
            // {
            //     id : 'dong',
            //     name : '김동현',
            //     address : '대구'
            // }
            console.log(apiUrl)
            const response = await axios.get(`${apiUrl}/admin/users/1`);
             console.log(response.data)
            setTest(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>회원정보</h1>
            {test ? (
                <>
                    <h2> 아이디 : {test.id}</h2>
                    <h2> 이름 : {test.name}</h2>
                    <h2> 등급 : {test.grade}</h2>
                </>
            ) : (
                <p>회원없음</p>
            )}
            <button onClick={testButton}>불러오기</button>
        </>
    );
}

export default Test;
