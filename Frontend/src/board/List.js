import React, { useEffect, useState } from "react";
import '../css/List.css';
import { AiFillBook } from "react-icons/ai";
import axios from "axios";
import ClickButton from "../component/ClickButton";
import { Link } from "react-router-dom";
const List = () => {
    const [boardList, setBoardList] = useState([]);

    // 컴포넌트가 렌더링 될때 마다 실행
    useEffect (() => {
        axios
        .get("/api/board/viewlist")
        .then((response) => {
          setBoardList(response.data); // Update the state with the fetched data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);

    const onClick =() => {
        window.location.href="/board/write";
    }
    return (
        <div className="viewList">
           <div id="viewtitleicon"><AiFillBook/><strong id="title_viewList">View List</strong></div>
           
            <table id="board_table">
                <tr>
                <th>No</th>
                <th>Title</th>
                <th>Writer</th>
                <th>View</th>
                </tr>
                {boardList.map((board, index) => (
          <tr key={index}>
            <td class="board_view_id">{index + 1}</td>
            <td>{board.title}</td>
            <td>3</td>
            <td>{board.viewCnt}</td>
          </tr>
        ))}
      </table>

        <ClickButton onClick={onClick} buttonText="글쓰기" id="board_button"/>
        </div>
    
    );

}
export default List;