import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ModalGiamdoc(props) {

    const defaultUserData = {
        fullName: '',
        userName: '',
        password: '',
        phone: '',
        email: '',
        role: '',
        position: '',
        department: '',
        image: '',

    }

    const validateInputDefault = {
        fullName: true,
        userName: true,
        password: true,
        phone: true,
        email: true,
        role: true,
        position: true,
        department: true,
        validImage: true,
    }

    const [userDataDefault, setuserDataDefault] = useState(defaultUserData);

    const handleApprove = () => {
        props.approveDocument();
        props.inactive();
    }


    return (
        <>
            <Modal size='lg' show={props.active} onHide={props.inactive}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='text-primary text-uppercase'>Duyệt văn bản</div>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="user-info-container col-xs-12">
                        <form method="POST" action="/user/create-user" >
                            <div className="container">
                                <div className="row d-flex justify-content-center form-group">
                                    <div className="mb-3 col-sm-4 form-group">
                                        <label htmlFor="fullName" className="form-label">Tên văn bản</label>
                                        <input type="text" className="form-control" id="tit" name="title" required onChange={() => { }}
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-4 form-group">
                                        <label htmlFor="userName" className="form-label">Thời hạn xử lý</label>
                                        <input disabled="" type="text" className="form-control" id="date" name="datehandle" />
                                    </div>
                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="userImage" className="form-label">Văn bản</label>
                                        <input type="file" name="document" id="doc" className="form-control" accept="application/pdf" multiple />
                                    </div>
                                </div>

                                <div className="row mt-3 row mt-3 d-flex justify-content-center">
                                    <div className="mb-3 col-sm-12 form-group">
                                        <label htmlFor="des" className="form-label">Mô tả văn bản</label>
                                        <textarea className="form-control" id="des" name="description" rows="4"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleApprove}>Duyệt</Button>
                    <Button variant="btn btn-secondary" onClick={props.inactive}>Đóng</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalGiamdoc
