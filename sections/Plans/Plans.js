import { useEffect } from "react";
import { Container } from "./styles";
import PropTypes from "prop-types";

import PlanCard from "../../components/PlanCard";
import PlanList from "../../components/PlanList";

const PlansSection = ({ plans }) => {  
  useEffect(() => {
    return () => {
      window.onscroll = () => {};
    };
  }, []);

  return (
    <Container id="plans-section">
      <div className="wrapper">
        <div className="wrapper-content">
          <div className="row">
            <h3 id="plans-title">Ofertas Especiais</h3>
          </div>
          <PlanList>
            {!!plans &&
              plans.map((plan, index) => (
                <PlanCard plan={plan} key={plan.id} index={index}></PlanCard>
              ))}
          </PlanList>
        </div>
      </div>
    </Container>
  );
};

PlansSection.propTypes = {
  plans: PropTypes.array
};

export default PlansSection;