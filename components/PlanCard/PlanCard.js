import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Creators as StoreActions } from "../../store";

import { Container } from "./styles";

const PlanCard = ({ plan,setBuyPlanModal, setActivePlan }) => {
  function handleClick(plan) {
    setBuyPlanModal(false);
    setActivePlan(plan);
  }

  const style = {
    animation: `slide-top ${0.5 * ((1 + 1) / 2.5)}s`
  };
  return (
    <Container style={style}>      
      <div className="plan-card-border"></div>
      <div className="plan-card-wrapper">
        <div className="plan-card-header">
          <p className="plan-description">{plan.description}</p>
          <div className="plan-pricing">
            <span id="plan-price">R${plan.price}/</span>
            <span id="plan-month">mês</span>
          </div>
          <div className="button-wrapper">
            <button onClick={() => handleClick(plan)}>SELECIONAR PLANO</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

PlanCard.defaultProps = {
  plan: {
    name: "PLANO Hellol",
    price: 30,
    minutes: 30,
    description: "Válido durante 12 meses no boleto fixo."
  }
};

PlanCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.String,
    price: PropTypes.number,
    minutes:PropTypes.number,
    description: PropTypes.string
  })
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...StoreActions }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(PlanCard);