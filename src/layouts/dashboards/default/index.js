// @mui material components
import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import { Card } from "@mui/material";

function Default() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <div style={{ height: "100%" }}>
            <Card>
              <></>
            </Card>
          </div>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <></>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <></>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Default;
