import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import _, { update } from "lodash";
import { toast } from 'react-toastify';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import moment from 'moment'
import './ModalGiamDoc.scss'



function ModalGiamdoc(props) {

    const listGiamdoc = {
        docName: '',
        docDes: '',
        docTimeStart: '',
        docTimeEnd: '',
        docHandOver: '',
        docStatus: '',
        docFile: []
    }

    const [giamdocDataDefault, setGiamDocDataDefault] = useState(listGiamdoc);
    const [dateRange, setDateRange] = useState([]);
    const [value, setValue] = useState();


    const handleApprove = () => {
        props.approveDocument();
        props.inactive();
    }


    useEffect(() => {
        setGiamDocDataDefault(props.setDataModalGiamDoc)
    }, [props.setDataModalGiamDoc])

    const handleOnchangeForm = (value, inputName) => {
        //dùng hàm clonedeep để copy các phần tử (số nhiều) bên trong obj
        let _giamdocDataDefault = _.cloneDeep(giamdocDataDefault);
        _giamdocDataDefault[inputName] = value;
        setGiamDocDataDefault(_giamdocDataDefault);
    }
    // useEffect(() => {
    //     if (props.active) {
    //         setGiamDocDataDefault(props.setDataModalGiamDoc);

    //         if (
    //             props.setDataModalGiamDoc &&
    //             props.setDataModalGiamDoc.docTimeStart &&
    //             props.setDataModalGiamDoc.docTimeEnd
    //         ) {
    //             const startDate = moment(props.setDataModalGiamDoc.docTimeStart);
    //             const endDate = moment(props.setDataModalGiamDoc.docTimeEnd);
    //             setDateRange([startDate, endDate]);
    //         }
    //     }
    // }, [props.active, props.setDataModalGiamDoc]);

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
                                        <input type="text" className="form-control" id="tit" name="title" required readOnly
                                            value={giamdocDataDefault.docName}
                                            onChange={(event) => { handleOnchangeForm(event.target.value, "docName") }}
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-4 form-group">
                                        <label htmlFor="userName" className="form-label">Bàn giao</label>
                                        <input disabled="" type="text" className="form-control" id="date" name="datehandle"
                                            value={giamdocDataDefault.docHandOver}
                                            onChange={(event) => { handleOnchangeForm(event.target.value, "docExpire") }}
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="userImage" className="form-label">Văn bản</label>
                                        <input type="file" name="document" id="doc" className="form-control" accept="application/pdf" multiple

                                        />
                                    </div>
                                    <div className="deadline-tb mb-3 form-group " style={{ width: 500 }}>
                                        <label htmlFor="userName" className="form-label">Thời hạn xử lý</label>
                                        <div className='Datepicker'>
                                            <DatePicker label="Uncontrolled picker"
                                                placeholder='Chọn ngày bắt đầu...'
                                                value={value}
                                                onChange={(newValue) => setValue(newValue)}
                                            />
                                            <DatePicker
                                                label="Controlled picker"
                                                placeholder='Chọn ngày kết thúc...'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-3 row mt-3 d-flex justify-content-center">
                                    <div className="mb-3 col-sm-12 form-group">
                                        <label htmlFor="des" className="form-label">Mô tả văn bản</label>
                                        <textarea className="form-control" id="des" name="description" rows="4"
                                            value={giamdocDataDefault.docDes}
                                            onChange={(event) => { handleOnchangeForm(event.target.value, "docDes") }}

                                        ></textarea>
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
