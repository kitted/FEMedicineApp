// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";

function DefaultProfileCard({ image, name, position, description, social }) {
  const { socialMediaColors } = colors;

  // Render the social media icons
  const renderSocial = social.map(({ link, icon, color }, key) => (
    <SoftBox
      key={color}
      component={Link}
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize="1.375rem"
      color={socialMediaColors[color].main}
      py={2}
      pr={2}
      pl={key === 0 ? 0 : 2}
      lineHeight={1}
    >
      {icon}
    </SoftBox>
  ));

  return (
    <SoftBox>
      <SoftAvatar src={image} alt={name} size="xxl" shadow="xl" variant="rounded" />
      <SoftBox py={2.5} pr={4}>
        <SoftTypography variant="h5">{name}</SoftTypography>
        <SoftTypography variant="body2" color="text">
          {position}
        </SoftTypography>
        {description && (
          <SoftBox my={2}>
            <SoftTypography variant="body2" color="text">
              {description}
            </SoftTypography>
          </SoftBox>
        )}
        <SoftBox display="flex">{renderSocial}</SoftBox>
      </SoftBox>
    </SoftBox>
  );
}

// Setting default props for the DefaultProfileCard
DefaultProfileCard.defaultProps = {
  description: "",
  social: [{}],
};

// Typechecking props for the DefaultProfileCard
DefaultProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string,
  social: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProfileCard;
