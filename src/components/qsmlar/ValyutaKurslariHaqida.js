import React, {Component} from 'react';
import {Modal, ModalBody,ModalHeader, Table} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation'
class ValyutaKurslariHaqida extends Component {


    state = {
        users: [
            {
                valyut: "1 UZB so'm , UZB",
                sotbolsh: '100',
                sotsh: '50'
            }
        ],
        openModal: false,
        edited:-1
    };


    deleteUser = (index) => {
        this.state.users.splice(index, 1);
        this.setState({
            users: this.state.users
        });
    };
    editUser = (event,value) => {
        this.state.users[this.state.edited]=value;
        this.setState({
            users: this.state.users,
            edited:-1
        });
        this.changeModal();
    };
    changeModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    };

    saveUser = (event, value) => {
        this.state.users.push(value);
        this.setState({
            users: this.state.users
        });
        this.form.reset();
    };
    render() {
        return (
            <div>
                <h3 className="d-flex align-items-center justify-content-center">Valyuta kurslari haqida malumot</h3>

                <div className="d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <Table className="table table-bordered ">
                            <tr className="table-active">
                                <th>
                                    VALYUTA NOMI
                                </th>
                                <th>
                                    SOTIB OLISH
                                </th>
                                <th>
                                    SOTISH
                                </th>

                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {
                                this.state.users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.valyut}</td>
                                        <td>{item.sotbolsh}</td>
                                        <td>{item.sotsh}</td>
                                        <td>
                                            <button onClick={()=>{this.setState({edited:index}); this.changeModal()}} type="button" className="btn bg-warning text-dark">
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => this.deleteUser(index)} type="button"
                                                    className="btn bg-danger text-white">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </Table>

                    </div>

                    <div className="col-md-4">
                        <div className="card leftd">
                            <div className="card-header bg-dark text-white text-center">
                                <h4>Valyutangiz haqida ma'lumot kiriting</h4>
                            </div>
                            <div className="card-body">
                                <AvForm ref={e => this.form = e} onValidSubmit={this.saveUser}>
                                    <AvField className="mb-3" type='select' name='valyut' label="Valyuta nomini tanlang">
                                        <option value="1 AQSh dollari , USD">1 AQSh dollari , USD</option>
                                        <option value="1 Yevro , EUR">1 Yevro , EUR</option>
                                        <option value="1 Rossiya rubli , RUB">1 Rossiya rubli , RUB</option>
                                        <option value="1 Angliya funt sterlingi , GBP">1 Angliya funt sterlingi , GBP</option>
                                        <option value="1 Shveytsariya franki , CHF">1 Shveytsariya franki , CHF</option>
                                        <option value="1 Yaponiya iyenasi , JPY">1 Yaponiya iyenasi , JPY</option>
                                        <option value="1 Qozog‘iston tengesi , KZT">1 Qozog‘iston tengesi , KZT</option>
                                        <option value="1 Angliya funt sterlingi , GBP">1 Angliya funt sterlingi , GBP</option>
                                    </AvField>
                                    <AvField
                                        class="mb-3"
                                        type="number"
                                        name="sotbolsh"
                                        placeholder="10630.00"
                                        label="Sotib olish narxini kiriting"
                                        required
                                    />
                                    <AvField
                                        type="number"
                                        name="sotsh"
                                        placeholder="10690.00"
                                        label="Sotish narxini kiriting"
                                        required
                                    />
                                    <button type="submit" className="btn btn-dark mt-3 w-100">
                                       Valyuta qo'shish
                                    </button>
                                </AvForm>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Modal isOpen={this.state.openModal} toggle={this.changeModal}>

                            <ModalHeader>
                                <h4>Valyuta kursi haqidagi malumotlarni o'zgartirish</h4>
                            </ModalHeader>
                            <ModalBody>
                                <AvForm onValidSubmit={this.editUser} model={this.state.users[this.state.edited]}>
                                    <AvField className="mb-3" type='select' name='valyut' label="Valyuta nomini tanlang">
                                        <option value="1 AQSh dollari , USD">1 AQSh dollari , USD</option>
                                        <option value="1 Yevro , EUR">1 Yevro , EUR</option>
                                        <option value="1 Rossiya rubli , RUB">1 Rossiya rubli , RUB</option>
                                        <option value="1 Angliya funt sterlingi , GBP">1 Angliya funt sterlingi , GBP</option>
                                        <option value="1 Shveytsariya franki , CHF">1 Shveytsariya franki , CHF</option>
                                        <option value="1 Yaponiya iyenasi , JPY">1 Yaponiya iyenasi , JPY</option>
                                        <option value="1 Qozog‘iston tengesi , KZT">1 Qozog‘iston tengesi , KZT</option>
                                        <option value="1 Angliya funt sterlingi , GBP">1 Angliya funt sterlingi , GBP</option>

                                    </AvField>
                                    <AvField
                                        class="mb-3"
                                        type="number"
                                        name="sotbolsh"
                                        placeholder="10630.00"
                                        label="Sotib olish narxini kiriting"
                                        required
                                    />
                                    <AvField
                                        type="number"
                                        name="sotsh"
                                        placeholder="10690.00"
                                        label="Sotish narxini kiriting"
                                        required
                                    />
                                    <button onClick={this.changeModal} type="button" className="btn btn-primary mt-3">
                                        cancel
                                    </button>
                                    <button type="submit" className="btn btn-warning mt-3">
                                        edit
                                    </button>
                                </AvForm>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default ValyutaKurslariHaqida;