/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
 

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import MDButton from "components/MDButton";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Company", accessor: "company", align: "left" },
      { Header: "Return", accessor: "return", align: "left" },
      { Header: "Investors", accessor: "investor", align: "left" },
      { Header: "Chances", accessor: "chances", align: "center" },
      // { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        company: <Project image={LogoAsana} name="Asana" />,
        investor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2,500+
          </MDTypography>
        ),
        return: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7.91%
          </MDTypography>
        ),
        chances: <Progress color="info" value={60} />,
        action: (
          <MDButton component="a" href="#" color="success">
            View Plan
          </MDButton>
        ),
      },
      {
        company: <Project image={logoGithub} name="Github" />,
        investor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          5,000+
          </MDTypography>
        ),
        return: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              7.42%
          </MDTypography>
        ),
        chances: <Progress color="success" value={100} />,
        action: (
          <MDButton component="a" href="#" color="success">
            View Plan
          </MDButton>
        ),
      },
      {
        company: <Project image={logoAtlassian} name="Atlassian" />,
        investor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            3,400+
          </MDTypography>
        ),
        return: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7.05%
          </MDTypography>
        ),
        chances: <Progress color="error" value={30} />,
        action: (
          <MDButton component="a" href="#" color="success">
            View Plan
          </MDButton>
        ),
      },
      {
        company: <Project image={logoSpotify} name="Spotify" />,
        investor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            14,000+
          </MDTypography>
        ),
        return: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8.16%
          </MDTypography>
        ),
        chances: <Progress color="info" value={80} />,
        action: (
          <MDButton component="a" href="#" color="success">
            View Plan
          </MDButton>
        ),
      },
      {
        company: <Project image={logoSlack} name="Slack" />,
        investor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            1,000+
          </MDTypography>
        ),
        return: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8.0%
          </MDTypography>
        ),
        chances: <Progress color="error" value={0} />,
        action: (
          <MDButton component="a" href="#" color="success">
            View Plan
          </MDButton>
        ),
      },
      {
        company : <Project image={logoInvesion} name="Invesion" />,
        investor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2,300+
          </MDTypography>
        ),
        return: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8.2%
          </MDTypography>
        ),
        chances: <Progress color="success" value={100} />,
        action: (
          <MDButton component="a" href="#" color="success">
            View Plan
          </MDButton>
        ),
      },
    ],
  };
}
