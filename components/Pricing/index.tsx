"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="impact" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Driving Public Value Through Innovation"
          paragraph="Aintegenz Innovations empowers governance through intelligent automation, real-time analytics, and citizen-centric AI solutions—building a smarter, transparent, and efficient public sector."
          center
          width="665px"
        />

        {/* Grid wrapper with equal height cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex">
            <PricingBox
              title="AI Governance Suite"
              impact="50+ Government Departments Empowered"
              subtitle="Empowering ministries and departments with actionable AI insights, enabling faster and more transparent decision-making."
            >
              <OfferList text="Predictive Data Analytics" status="active" />
              <OfferList text="Policy Impact Dashboards" status="active" />
              <OfferList text="Automated Reports & Trends" status="active" />
              <OfferList text="Department-Level Customization" status="active" />
              <OfferList text="Citizen Feedback Integration" status="inactive" />
            </PricingBox>
          </div>

          <div className="flex">
            <PricingBox
              title="Smart Service Automation"
              impact="Millions of Citizens Benefiting"
              subtitle="Transforming citizen service delivery through AI-driven automation, improving accessibility, and reducing response time."
            >
              <OfferList text="AI-powered Chat & Helpdesk" status="active" />
              <OfferList text="Workflow Automation" status="active" />
              <OfferList text="Smart Document Processing" status="active" />
              <OfferList text="Multi-language Citizen Support" status="active" />
              <OfferList text="Predictive Service Optimization" status="inactive" />
            </PricingBox>
          </div>

          <div className="flex">
            <PricingBox
              title="Transparency & Data Intelligence"
              impact="Enhanced Public Trust and Efficiency"
              subtitle="Delivering real-time dashboards and cross-departmental analytics for transparent governance and performance monitoring."
            >
              <OfferList text="Real-time Decision Dashboards" status="active" />
              <OfferList text="Cross-System Data Integration" status="active" />
              <OfferList text="Automated Compliance Tracking" status="active" />
              <OfferList text="Public Access Portals" status="active" />
              <OfferList text="Predictive Policy Simulation" status="active" />
            </PricingBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
