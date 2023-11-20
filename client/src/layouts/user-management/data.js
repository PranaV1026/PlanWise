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
      { Header: "Total", accessor: "total", align: "center" },
      { Header: "Estimated", accessor: "estimated", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        plan: <b>Plan A</b>,
        type: <b>Mutual Funds</b>,
        amount: <div>Rs. 10000 / M </div>,
        total : <div> Rs. 50000 </div> ,
        estimated : <div> Rs. 100000 </div> ,
        action: (
            <MDBox>
                <MDButton component="a" href="#"   color="info" fontWeight="medium">
                Withdraw
                </MDButton>
            </MDBox>
        ),
      }
    ],
  };
}
