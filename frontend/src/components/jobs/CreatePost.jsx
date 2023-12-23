import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function CreatePost({display, geoLong, geoLat}) {
    const [data, setData] = useState({
        jobId: uuidv4(),
        jobTitle: "",
        companyURL: "http://dummyimage.com/512x512.png/ff4444/ffffff",
        company: "",
        salary: "",
        freq: "daily",
        jobType: "temporary",
        duration: "2",
        geoLong: geoLong,
        geoLat: geoLat
    })
    function handleSubmit() {
        axios.post("/api/jobs/addJob", data)
            .then(res => res.data)
            .then(res => console.log(res))
    }

    return (
        <div style={{display: display}}>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicJobTitle">
                    <Form.Control
                        placeholder="Job Title"
                        name={"jobTitle"}
                        value={data.jobTitle}
                        onChange={(e) => setData(prevState => ({...prevState, [e.target.name]: e.target.value}))}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Control
                        placeholder="Company Name"
                        name={"company"}
                        value={data.company}
                        onChange={(e) => setData(prevState => ({...prevState, [e.target.name]: e.target.value}))}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSalary">
                    <Form.Control
                        placeholder="Salary"
                        name={"salary"}
                        value={data.salary}
                        onChange={(e) => setData(prevState => ({...prevState, [e.target.name]: e.target.value}))}
                    />
                </Form.Group>


                <div className="d-grid gap-2">
                    <Button variant="primary" type="Submit">
                        Create
                    </Button>
                </div>
            </Form>

        </div>
    )
}