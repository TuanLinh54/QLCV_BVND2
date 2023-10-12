import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import "./ListGiamDoc.scss";
import ModalGiamdoc from '../ManageGiamdoc/ModalGiamdoc';


function Index() {
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
        }

    ]

    const { user } = useContext(UserContext);
    const [isShowModalGiamDoc, setIsShowModalGiamDoc] = useState(false);
    const [actionModalGiamDoc, setActionModalGiamDoc] = useState("BROWSE");
    const [docStatus, setDocStatus] = useState(0);
    const [dataModalGiamDoc, setDataModalGiamDoc] = useState({});
    const [lstGiamdoc, setListGiamdoc] = useState(listGiamdoc);


    const approveDocument = () => {
        // 1. Cập nhật trạng thái của văn bản thành "Đã xử lý"
        const updatedListGiamdoc = lstGiamdoc.map(item => {
            if (item.docStatus === 0) {
                return {
                    ...item,
                    docStatus: 1,
                };

            }
            return item;

        });
        setListGiamdoc(updatedListGiamdoc); // 2. Cập nhật danh sách văn bản
        setIsShowModalGiamDoc(false);
        // setDocStatus(1)
    }

    const btnInActiveModalBrowseGD = () => {
        setIsShowModalGiamDoc(false);
    }

    const btnApprove = (listGiamdoc) => {
        setActionModalGiamDoc("BROWSE");
        setDataModalGiamDoc(listGiamdoc);
        setIsShowModalGiamDoc(true);
    }

    const btnHandOver = () => {
        setActionModalGiamDoc("HANDOVER");
        setIsShowModalGiamDoc(true);
    }

    return (
        <div>
            <div className='table-index'>
                <div className='container mt-3'>
                    <div className='user-body'>
                        <h3 className="row text-primary text-uppercase mb-3">Danh sách văn bản</h3>
                        <div className="row">
                            {user && user.account.departmentId === 3 ?
                                <div className='actions'>
                                    <button className='btn btn-primary mb-3 add-user' onClick={() => btnApprove()}>
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
                                                            <button className="btn btn-success" onClick={() => btnApprove(itemGiamdocList)}> Duyệt <i className="fa-solid fa-check text-white"></i></button>
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

            <ModalGiamdoc
                active={isShowModalGiamDoc}
                inactive={btnInActiveModalBrowseGD}
                action={actionModalGiamDoc}
                setDataModalGiamDoc={dataModalGiamDoc}
                approveDocument={approveDocument}
                dataModalGiamDoc={dataModalGiamDoc}
            />
        </div>
    );
}

export default Index;