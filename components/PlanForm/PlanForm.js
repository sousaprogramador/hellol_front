import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import fetch from "isomorphic-unfetch";

import { Creators as StoreActions } from "../../store";
import { PlanFormContainer, FormSection } from "./styles";
import api from "../../lib/axios";

class PlanForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      send: false,
      data: [],
      form:{
        originCode:"",
        destinationCode:"",
        minutes:"",
        planId:0,
      }
    };  
    this.closeForm = this.closeForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ opened: true });
      document.querySelector("body").classList.add("vh-100");
    }, 5);

    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  handleChange = value => {
    this.setState({ value });
    if (value === null) {
      this.setState({ expired: "true" });
    }
  };

  escFunction(event) {
    if (event.keyCode === 27) {
      this.closeForm();
    }
  }

  closeForm() {
    const { setBuyPlanModal } = this.props;
    document.querySelector("body").classList.remove("vh-100");
    this.setState({ opened: false });
    setTimeout(() => {
      setBuyPlanModal(false);
    }, 500);
  }

  handleInput(e) {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ load: true, loading: true });
    this.dispatchSubmit();
  }

  async dispatchSubmit() {
    const { form } = this.state;

    this.setState({ sended: true, loading: false });

    const { data } = await api.post("/fare/simulation", form);
    
    this.setState({ data, send: true });
  }

  render() {
    const { loading, value, opened } = this.state || {};
    const { plan, mode } = this.props;

    return (
      <PlanFormContainer>
        <div className={`form-plan ${mode} ${opened ? "show" : "hidden"}`}>
          {
            <>
              <div className="header">
                <div className="logo" />
                <div className="bar-title">
                  <span className="title">Simulação de Planos</span>
                  <span>Preencha os campos abaixo</span>
                </div>
                <p
                  className="close-btn"
                  title="Fechar"
                  onClick={this.closeForm}
                >
                  X
                </p>
              </div>

              <div className="card-ddfa">
                <FormSection>
                  <form onSubmit={this.handleSubmit}>
                    <p className="section-title">Simulação de plano</p>
                    <div id="customer-details">
                      <div class="form-group" id="plan-id">
                        <label>Plano</label>
                        <select
                          required
                          autoFocus
                          name="planId"
                          class="form-control"
                          onChange={this.handleInput}
                        >
                          <option></option>
                        {!!plan &&
                          plan.map((plans, index) => (                            
                            <option value={plans.id} key={index} >{plans.name}</option>
                          ))}
                        </select>
                      </div>
                      <div class="form-group" id="ddd-code">
                        <label>DD Origem</label>
                        <input
                          required
                          autoFocus
                          type="text"
                          class="form-control"
                          placeholder="DDD Origem"
                          name="originCode"
                          onChange={this.handleInput}
                          value={this.state.form.originCode}
                        />
                      </div>
                      <div class="form-group" id="ddd-code">
                        <label>DD Destino</label>
                        <input
                          required
                          autoFocus
                          type="text"
                          class="form-control"
                          placeholder="DDD Destino"
                          name="destinationCode"
                          onChange={this.handleInput}
                          value={this.state.form.destinationCode}
                        />
                      </div>
                      <div class="form-group" id="email">
                        <label>Minutos</label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          placeholder="Minutos"
                          name="minutes"
                          onChange={this.handleInput}
                          value={this.state.form.minutes}
                        />
                      </div>                      
                    </div>
                    <div className="loading-indicator">
                      {loading ? (
                        <div className="loader" />
                      ) : (
                        <button className={value === null ? "disabled" : null}>
                          Enviar
                        </button>
                      )}
                    </div>
                  </form>
                  {this.state.send ?                  
                    <div>
                      <div className="card-ddfa">
                      <p className="section-title">Detalhes da simulação</p>                      
                      <div className="bar-title">
                        <span className="title"><b>{this.state.data.name}</b> R$ {this.state.data.pricePlan}</span> 
                        <br/>                                                                       
                        <span className="title"><b>Preço sem plano </b> R$ {this.state.data.priceTotal}</span>                                                                        
                      </div>
                      </div>
                    </div>
                  : ''}
                </FormSection>
              </div>
            </>
          }
        </div>
        <div
          className={`shadow-overlay  ${
            opened ? "show-shadows" : "hidden-shadows"
          }`}
        ></div>
      </PlanFormContainer>
    );
  }
}

const mapStateToProps = state => ({
  opened: state.BuyPlanModal
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...StoreActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanForm);
