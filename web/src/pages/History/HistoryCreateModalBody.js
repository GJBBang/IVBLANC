import React, { useState } from 'react';
import {
  InputGroup,
  FormControl,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import axios from 'axios';
import StyleSelectButton from './StyleSelectButton';
import Spinner from '../../components/Spinner';

export default function HistoryCreateModalBody({
  getmyHistoriesData,
  handleClose,
}) {
  const [files, setFiles] = useState('');
  const [loading, setLoading] = useState(false);

  const onLoadFile = (e) => {
    const file = e.target.files;
    setFiles(file);
  };

  const [selectedImg, setSelectedImg] = useState();
  const [selectedStyle, setSelectedStyle] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedSubject, setSelectedSubject] = useState();
  const [selectedText, setSelectedText] = useState();

  const imgHandleChange = (e) => {
    setSelectedImg(e.target.files[0]);
  };
  const styleHandleChange = (e) => {
    setSelectedImg(e.target.value);
  };
  const dateHandleChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const subjectHandleChange = (e) => {
    setSelectedSubject(e.target.value);
  };
  const textHandleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const getMyStylesData = () => {
    axios
      .get('http://i6d104.p.ssafy.io:9999/api/style/finduserstyle', {
        headers: {
          'X-AUTH-TOKEN': localStorage.getItem('JWT'),
          // `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJQayI6IjEiLCJpYXQiOjE2NDM4Nzg4OTMsImV4cCI6MTY0NjQ3MDg5M30.Q2T5EQ38F53h1x037StKPwE-DBeqU0hBEAPY3D9w6WY`,
        },
      })
      .then((response) => {
        setSelectedStyle(response.data.data);
      });
  };

  const createHistories = () => {
    const formData = new FormData();
    formData.append('photoList', selectedImg);
    formData.append('styleId', Number(selectedStyle.styleId));
    formData.append('date', selectedDate);
    formData.append('subject', selectedSubject);
    formData.append('text', selectedText);

    setLoading(true);

    axios
      .post('http://i6d104.p.ssafy.io:9999/api/history/add', formData, {
        headers: {
          'X-AUTH-TOKEN': localStorage.getItem('JWT'),
          // "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJQayI6IjEiLCJpYXQiOjE2NDM4Nzg4OTMsImV4cCI6MTY0NjQ3MDg5M30.Q2T5EQ38F53h1x037StKPwE-DBeqU0hBEAPY3D9w6WY",
        },
      })
      .then((response) => {
        if (response.status === 200 && response.data.output === 1) {
          alert('?????? ???????????????!');
          setLoading(false);
          getmyHistoriesData();
          handleClose();
        } else if (response.status === 200 && response.data.output === 0) {
          alert(response.data.msg);
          setLoading(false);
        } else {
          alert(response.data.msg);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const getImg = (data) => {
    setSelectedStyle(data);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Form style={{ maxWidth: '100%', width: 'auto' }}>
          <Row>
            <Col xs={4} md={4}>
              <Form.Group controlId='dob'>
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type='date'
                  name='dob'
                  placeholder='Date of Birth'
                  onChange={dateHandleChange}
                />
              </Form.Group>

              <Form.Label>Title</Form.Label>
              <InputGroup className='mb-3'>
                <FormControl onChange={subjectHandleChange} />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>Comment</InputGroup.Text>
                <FormControl
                  rows={12}
                  as='textarea'
                  aria-label='With textarea'
                  onChange={textHandleChange}
                />
              </InputGroup>
            </Col>

            <Col xs={4} md={4}>
              <div className='d-flex flex-column align-content-center justify-content-center'>
                <div style={{ marginLeft: '23%', marginBottom: '2%' }}>
                  <h3>?????????????????????</h3>
                </div>
                <div>
                  {selectedStyle && (
                    <img
                      alt={selectedStyle.styleId}
                      src={selectedStyle.url}
                      date={selectedStyle.createDate}
                      madeby={selectedStyle.madeby}
                      style={{
                        marginLeft: '2%',
                        maxWidth: '300px',
                        maxHeight: '400px',
                      }}
                      // onChange={styleHandleChange}
                    />
                  )}
                  <div style={{ marginLeft: '30%', marginBottom: '2%' }}>
                    <StyleSelectButton getImg={getImg} />
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={4} md={4}>
              <h3 style={{ marginLeft: '18%' }}>????????? ????????????</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        {selectedImg && (
                          <img
                            alt='sample'
                            src={URL.createObjectURL(selectedImg)}
                            style={{
                              marginLeft: '2%',
                              width: '300px',
                              height: '400px',
                            }}
                          />
                        )}
                        <div
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                          }}
                        >
                          <input
                            style={{
                              marginLeft: '26%',
                              marginTop: '10%',
                              backgroundColor: '#EA8FAA',
                              color: 'white',
                            }}
                            name='imgUpload'
                            type='file'
                            accept='image/*'
                            onChange={imgHandleChange}
                          />
                          {/* <button 
                style={{ backgroundColor: "gray", color: "white", width: "55px", height: "40px", cursor: "pointer", }} 
                onClick={() => deleteFileImage()} > ?????? </button>  */}
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <hr></hr>
          <Button
            style={{
              marginLeft: '26%',
              marginTop: '1%',
              backgroundColor: '#EA8FAA',
              color: 'white',
              borderStyle: 'none',
              fontSize: '1.2rem',
              padding: '1% 20%',
            }}
            onClick={createHistories}
          >
            ??????
          </Button>
        </Form>
      )}
    </>
  );
}
