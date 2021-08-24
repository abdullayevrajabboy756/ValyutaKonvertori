import React, {Component} from 'react';
import {AvField, AvForm} from "availity-reactstrap-validation";

class KonvertatsiyaPage extends Component {
    state = {
        inputqymat: null,
        selectqymat: null,
        USD:null,
        EUR:null,
        RUB:null,
        GBP:null,
        CHF:null,
        JPY:null,
        KZT:null
    };

    getInputValue = (event) => {
        this.setState({
            inputqymat: event.target.value
        });
        this.setState({
            USD:this.myselect.props.children[0].props.value
        });
        this.setState({
            EUR:this.myselect.props.children[1].props.value
        });
        this.setState({
            RUB:this.myselect.props.children[2].props.value
        });
        this.setState({
            GBP:this.myselect.props.children[3].props.value
        });
        this.setState({
            CHF:this.myselect.props.children[4].props.value
        });
        this.setState({
            JPY:this.myselect.props.children[5].props.value
        });
        this.setState({
            KZT:this.myselect.props.children[6].props.value
        });
    };

   /* getInputValue2=(event)=>{
        this.setState({
            selectqymat: event.target.value
        });
        /!*console.log(this.state.selectqymat)
        console.log(this.myselect.props.children[2].props.value)*!/
    };*/

    select=()=>{
     if (this.state.USD==="USD"){
         this.state.inputqymat=this.state.inputqymat*(10630)
          /*this.setState({
              inputqymat: (this.state.inputqymat)*(10630)
          });*/
      }

        if (this.state.EUR==="EUR"){
            this.setState({
                inputqymat: (this.state.inputqymat)*(12000)
            })
        }

        if (this.state.RUB==="RUB"){
            this.setState({
                inputqymat: (this.state.inputqymat)*(110)
            })
        }

        if (this.state.GBP==="GBP"){
            this.setState({
                inputqymat: (this.state.inputqymat)*(13900)
            })
        }

        if (this.state.CHF==="CHF"){
            this.setState({
                inputqymat: (this.state.inputqymat)*(11000)
            })
        }

        if (this.state.JPY==="JPY"){
            this.setState({
                inputqymat: (this.state.inputqymat)*(80)
            })
        }

        if (this.state.KZT==="KZT"){
            this.setState({
                inputqymat: (this.state.inputqymat)*(13)
            })
        }

        else {
          this.setState({
              inputqymat: "bunday valyuta kiritilmagan"
          })
      }
    };

    render() {
        return (
            <div>
                <h3 className="d-flex align-items-center justify-content-center">
                    Valyuta konvertori
                </h3>
                <div className="col-md-6 offset-3">
                    <div className="card d-flex">
                        <div className="card-header d-flex w-100">
                            <AvForm class="d-flex" ref={e => this.form = e}  >
                                <AvField
                                    type="number"
                                    value="inputqymat"
                                    name="inputs"
                                    placeholder="1"
                                    label="Summani kiriting"
                                    required
                                    onChange={this.getInputValue}
                                />

                                <AvField type='select' name='valyut' ref={c => this.myselect = c}    onChange={this.getInputValue2} label="Valyuta nomini tanlang">
                                    <option  value="USD">USD</option>
                                    <option  value="EUR">EUR</option>
                                    <option  value="RUB">RUB</option>
                                    <option  value="GBP">GBP</option>
                                    <option  value="CHF">CHF</option>
                                    <option  value="JPY">JPY</option>
                                    <option  value="KZT">KZT</option>
                                </AvField>

                                <button type="button" className="btn btn-success mt-3" onClick={this.select}>Natijani olish</button>
                            </AvForm>

                            <div className="summa">{this.state.inputqymat} {this.state.selectqymat} </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default KonvertatsiyaPage;