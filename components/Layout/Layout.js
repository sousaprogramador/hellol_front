import React from 'react'
import Header from "../Header";
import Footer from "../Footer";
import FormPlan from "../PlanForm";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children,showBuyPlan } = this.props;
    return (
      <React.Fragment>
        {showBuyPlan && <FormPlan />}
        <div className={showBuyPlan ? "blur" : null}>
          <Header />
            <main>{children}</main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;