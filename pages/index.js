import React from "react";
import Head from "next/head";
import axios from "../lib/axios";

import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import PlanForm from "../components/PlanForm" 
import PlansSection from "../sections/Plans";
//import fetch from "isomorphic-unfetch";

// eslint-disable-next-line react/prop-types
function Main({plans,setBuyPlanModal}) {
  return (
    <Layout>
      <Head>
        <title>Hellol</title>
      </Head>
      <PlanForm setBuyPlanModal={setBuyPlanModal} 
                plan={plans}/>
      <Carousel/>      
      <PlansSection plans={plans}/>
    </Layout>
  );
}

Main.getInitialProps = async () => {
  const res = await axios.get('/plan');
  const plans =  await res.data;

  return { plans };
};

export default Main;