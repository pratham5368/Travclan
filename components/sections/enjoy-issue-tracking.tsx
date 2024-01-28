"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Issue tracking
            <br />
            to modify and even cancel the books 
          </>
        }
        image="/img/issues.webp"
        text="Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team."
      />
      {/*<Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Parent and sub-issues.",
            text: "Break larger takss into smaller issues",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Automated backlog.",
            text: "Linear will auto-close and auto-archive issues.",
          },
          {
            icon: WorkflowsIcon,
            title: "Custom workflows",
            text: "Define unique issue states for each team.",
          },
          {
            icon: CustomViewsIcon,
            title: "Filters and custom views.",
            text: "See only what's relevant for you and your customers.",
          },
          {
            icon: DiscussionIcon,
            title: "Superior On-Ground Support",
            text: "Collaborate on issues without losing context.",
          },
          {
            icon: IssuesIcon,
            title: "Issue templates.",
            text: "Solve the customer suppoert.",
          },
        ]}
      />*/}
      <Features.Cards
        features={[
          {
            image: "/img/card-board.webp",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Dedicated Account Manager",
            text: "To ensure all your calls & questions are answered.",
          },
          {
            image: "/img/card-views.webp",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Booking Confirmation",
            text: "We assure booking confirmation or you get 150% refund.",
          },
        ]}
      />
    </Features>
  );
};
