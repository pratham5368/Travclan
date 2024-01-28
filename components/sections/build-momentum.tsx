"use client";

import { Features } from "../features";
import { AutomaticTrackingIcon } from "../icons/features/build-momentum-icons/automatic-tracking";
import { BePreparedIcon } from "../icons/features/build-momentum-icons/be-prepared";
import { FullyConfigurableIcon } from "../icons/features/build-momentum-icons/fully-configurable";
import { PredictDelaysIcon } from "../icons/features/build-momentum-icons/predict-delays";
import { ScheduledIcon } from "../icons/features/build-momentum-icons/scheduled";
import { ScopeCreepIcon } from "../icons/features/build-momentum-icons/scope-creep";

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            sell travel services
            <br />
             and boost your profits!
          </>
        }
        image="img/cycles.webp"
        imageSize="large"
        text="TravClan Trust Guarantee. Find fast resolution to all your booking queries."
      />
      <Features.Grid
        features={[
          {
            icon: AutomaticTrackingIcon,
            title: "Automatic tracking.",
            text: "Tracking of any late Flights or hotel booking cancellations.",
          },
          {
            icon: ScheduledIcon,
            title: "On-time Pick Up",
            text: "We guarantee on time pick up or get refund upto ₹1,000.",
          },
          {
            icon: FullyConfigurableIcon,
            title: "Booking Confirmation.",
            text: "Define start date, end date, duration, and more.",
          },
          {
            icon: PredictDelaysIcon,
            title: "Predict delays.",
            text: "Get the best refund.",
          },
          {
            icon: ScopeCreepIcon,
            title: "Scope creep.",
            text: "Understand which issues are added mid-cycle.",
          },
          {
            icon: BePreparedIcon,
            title: "24*7 Flight Support Team.",
            text: "Schedule work in advance with upcoming TravClan updates.",
          },
        ]}
      />
    </Features>
  );
};
