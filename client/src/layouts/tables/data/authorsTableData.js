/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
 

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import MDButton from "components/MDButton";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Plan", accessor: "plan",  align: "left" },
      { Header: "Type", accessor: "type", align: "left" },
      { Header: "Amount (D/M/Y)", accessor: "amount", align: "left" },
      { Header: "Duration", accessor: "duration", align: "center" },
      { Header: "Total Payout", accessor: "total", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        plan: <b>Life Time Income Plan</b>,
        type: <b>Mutual Funds</b>,
        amount: <div>Rs. 6.8 K/ Monthly </div>,
        duration : <div> 3 yrs </div> ,
        total : <div> Rs. 30.5 L </div> ,
        action: (
            <MDBox>
                <MDButton component="a" href="#"   color="info" fontWeight="medium">
                Apply
                </MDButton>
            </MDBox>
        ),
      }
    ],
  };
}
