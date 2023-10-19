import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import "./ListManager.scss";
// import ModalGiamdoc from '../ManageGiamdoc/ModalGiamdoc';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function GiamDoc() {
    const listGiamdoc = [
        {
            docName: "Khoa nội",
            docDes: "Mô tả văn bản 1",
            docTimeStart: "10/10/2023",
            docTimeEnd: "01/01/2024",
            docExpire: "Khoa nội",
            docStatus: 0
        },
        {
            docName: "Khoa nội",
            docDes: "Mô tả văn bản 1",
            docTimeStart: "10/10/2023",
            docTimeEnd: "01/01/2024",
            docExpire: "Khoa nội",
            docStatus: 1
        },
        {
            docName: "Khoa nội",
            docDes: "Mô tả văn bản 1",
            docTimeStart: "10/10/2023",
            docTimeEnd: "01/01/2024",
            docExpire: "Khoa nội",
            docStatus: 0
        },
        {
            docName: "Khoa nội",
            docDes: "Mô tả văn bản 1",
            docTimeStart: "10/10/2023",
            docTimeEnd: "01/01/2024",
            docExpire: "Khoa nội",
            docStatus: 1
        },
        {
            docName: "Khoa nội",
            docDes: "Mô tả văn bản 1",
            docTimeStart: "10/10/2023",
            docTimeEnd: "01/01/2024",
            docExpire: "Khoa nội",
            docStatus: 0
        },
        {
            docName: "Khoa nội",
            docDes: "Mô tả văn bản 1",
            docTimeStart: "10/10/2023",
            docTimeEnd: "01/01/2024",
            docExpire: "Khoa nội",
            docStatus: 0
        },
        {
            docName: "Khoa nội",
            docDes: "Mô tả văn bản 1",
            docTimeStart: "10/10/2023",
            docTimeEnd: "01/01/2024",
            docExpire: "Khoa nội",
            docStatus: 1
        }

    ]

    const { user } = useContext(UserContext);
    const [isShowModalGiamDoc, setIsShowModalGiamDoc] = useState(false);
    const [actionModalGiamDoc, setActionModalGiamDoc] = useState("BROWSE");
    const [docStatus, setDocStatus] = useState(0);
    const [dataModalGiamDoc, setDataModalGiamDoc] = useState({});
    const [lstGiamdoc, setListGiamdoc] = useState(listGiamdoc);




    return (
        <div className='grid-container'>
            <div className="sidebar item2 ">
                <div className='first-menu'>
                    <h4>Danh mục</h4>
                    <div>
                        <ul>
                            <li>Công việc đã giao</li>
                            <li>Đã hoàn thành</li>
                            <li>Tất cả công việc</li>
                            <li>Tasks</li>
                        </ul>
                    </div>
                </div>
                <div className='second-menu'>
                    <h4>Danh sách nhóm</h4>
                    <div>
                        <ul>
                            <li>Tạo nhóm</li>
                            <li>Team 1
                                <ul className='dropdown'>
                                    <li>Nguyễn Văn A</li>
                                    <li>Nguyễn Văn B</li>
                                    <li>Nguyễn Văn A</li>
                                    <li>Nguyễn Văn A</li>
                                </ul>
                            </li>
                            <li>Team 2
                                <ul className='dropdown'>
                                    <li>Nguyễn Văn A</li>
                                    <li>Nguyễn Văn B</li>
                                    <li>Nguyễn Văn A</li>
                                    <li>Nguyễn Văn A</li>
                                </ul>
                            </li>
                            <li>Team 3
                                <ul className='dropdown'>
                                    <li>Nguyễn Văn A</li>
                                    <li>Nguyễn Văn B</li>
                                    <li>Nguyễn Văn A</li>
                                    <li>Nguyễn Văn A</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div><hr /></div>
            </div>
            <div className='table-index item3'>
                <div className='container mt-3'>
                    <div className='user-body'>
                        <h3 className="row text-primary text-uppercase mb-3">Danh sách văn bản</h3>
                        <div className="row">
                            {user && user.account.departmentId === 3 ?
                                <div className='actions'>
                                    <button className='btn btn-primary mb-3 add-user' >
                                        <i className="fa fa-plus i-add"></i>Duyệt văn bản
                                    </button>
                                </div>
                                : null
                            }
                            <div className="row justify-content-center">
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr className='title-table'>
                                            <th scope="col">Tên văn bản</th>
                                            <th scope="col">Mô tả văn bản</th>
                                            <th colSpan={1} scope="col">Thời hạn xử lý</th>
                                            <th scope="col">Bàn giao</th>
                                            <th scope="col">Trạng thái</th>
                                            <th scope="col">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listGiamdoc && listGiamdoc.length > 0 ?
                                            listGiamdoc.map((itemGiamdocList, indexGiamdocList) => (
                                                <tr key={`row-${indexGiamdocList}`}>
                                                    <td><button className="title-doc">{itemGiamdocList.docName}</button></td>
                                                    <td>{itemGiamdocList.docDes}</td>
                                                    <td>{itemGiamdocList.docTimeStart} - {itemGiamdocList.docTimeEnd}</td>
                                                    <td>{itemGiamdocList.docExpire}</td>
                                                    <td>
                                                        {itemGiamdocList.docStatus === 0 ? (
                                                            <span className="status rounded-pill warning">Chưa xử lý</span>
                                                        ) : (
                                                            <span className="status rounded-pill success">Đã xử lý</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {itemGiamdocList.docStatus === 0 ? (
                                                            <button className="btn btn-success"> Duyệt <i className="fa-solid fa-check text-white"></i></button>
                                                        ) : (
                                                            <button className="btn btn-secondary disabled"> Đã duyệt <i className="fa-solid fa-check text-white"></i></button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                            :
                                            <tr><td>Không tìm thấy danh sách người dùng</td></tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiamDoc;