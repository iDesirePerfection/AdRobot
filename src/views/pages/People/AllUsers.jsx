import React from 'react';

import {
    Button,
    Card,
    CardHeader,
    Table,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import AllPeopleHeader from "components/Headers/AllPeopleHeader.jsx";


class AllUsers extends React.Component {

    render() {
        return (
            <>
                <AllPeopleHeader name="All Users" parentName="People" />

                <Container className="mt--6" fluid>
                    <Card>
                        <CardHeader className="border-0">
                            <Row>
                                <Col xs="6">
                                    <h3 className="mb-0">Checkbox + Labels</h3>
                                </Col>
                                <Col className="text-right" xs="6">
                                    <Button
                                        className="btn-round btn-icon"
                                        color="danger"
                                        href="#pablo"
                                        id="tooltip163216539"
                                        onClick={e => e.preventDefault()}
                                        size="sm"
                                    >
                                        <span className="btn-inner--icon mr-1">
                                            <i className="fas fa-trash" />
                                        </span>
                                        <span className="btn-inner--text">Delete</span>
                                    </Button>
                                    <UncontrolledTooltip delay={0} target="tooltip163216539">
                                        Edit product
                      </UncontrolledTooltip>
                                </Col>
                            </Row>
                        </CardHeader>

                        <Table className="align-items-center table-flush" hover responsive>
                            <thead className="thead-light">
                                <tr>
                                    <th>
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id="table-check-all"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="table-check-all"
                                            />
                                        </div>
                                    </th>
                                    <th>Author</th>
                                    <th>Created at</th>
                                    <th>Product</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-success">
                                    <th>
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id="table-check-all"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="table-check-all"
                                            />
                                        </div>
                                    </th>
                                    <td className="table-user">
                                        <b>John Michael</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">10/09/2018</span>
                                    </td>
                                    <td>
                                        <a
                                            className="font-weight-bold"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Argon Dashboard PRO
                        </a>
                                    </td>
                                    <td>
                                        <label className="custom-toggle">
                                            <input defaultChecked type="checkbox" />
                                            <span
                                                className="custom-toggle-slider rounded-circle"
                                                data-label-off="No"
                                                data-label-on="Yes"
                                            />
                                        </label>
                                    </td>
                                </tr>
                                <tr className="table-">
                                    <th>
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id="table-check-all"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="table-check-all"
                                            />
                                        </div>
                                    </th>
                                    <td className="table-user">
                                        <b>Alex Smith</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">08/09/2018</span>
                                    </td>
                                    <td>
                                        <a
                                            className="font-weight-bold"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Argon Design System
                        </a>
                                    </td>
                                    <td>
                                        <label className="custom-toggle">
                                            <input type="checkbox" />
                                            <span
                                                className="custom-toggle-slider rounded-circle"
                                                data-label-off="No"
                                                data-label-on="Yes"
                                            />
                                        </label>
                                    </td>
                                </tr>
                                <tr className="table-warning">
                                    <th>
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id="table-check-all"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="table-check-all"
                                            />
                                        </div>
                                    </th>
                                    <td className="table-user">
                                        <b>Samantha Ivy</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">30/08/2018</span>
                                    </td>
                                    <td>
                                        <a
                                            className="font-weight-bold"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Black Dashboard
                        </a>
                                    </td>
                                    <td>
                                        <label className="custom-toggle">
                                            <input type="checkbox" />
                                            <span
                                                className="custom-toggle-slider rounded-circle"
                                                data-label-off="No"
                                                data-label-on="Yes"
                                            />
                                        </label>
                                    </td>
                                </tr>
                                <tr className="table-">
                                    <th>
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id="table-check-all"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="table-check-all"
                                            />
                                        </div>
                                    </th>
                                    <td className="table-user">
                                        <b>John Michael</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">10/09/2018</span>
                                    </td>
                                    <td>
                                        <a
                                            className="font-weight-bold"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Argon Dashboard PRO
                        </a>
                                    </td>
                                    <td>
                                        <label className="custom-toggle">
                                            <input defaultChecked type="checkbox" />
                                            <span
                                                className="custom-toggle-slider rounded-circle"
                                                data-label-off="No"
                                                data-label-on="Yes"
                                            />
                                        </label>
                                    </td>
                                </tr>
                                <tr className="table-">
                                    <th>
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id="table-check-all"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="table-check-all"
                                            />
                                        </div>
                                    </th>
                                    <td className="table-user">
                                        <b>John Michael</b>
                                    </td>
                                    <td>
                                        <span className="text-muted">10/09/2018</span>
                                    </td>
                                    <td>
                                        <a
                                            className="font-weight-bold"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Argon Dashboard PRO
                        </a>
                                    </td>
                                    <td>
                                        <label className="custom-toggle">
                                            <input defaultChecked type="checkbox" />
                                            <span
                                                className="custom-toggle-slider rounded-circle"
                                                data-label-off="No"
                                                data-label-on="Yes"
                                            />
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Container>
            </>
        );
    }
}

export default AllUsers;