import { Box, Container, Link, Typography } from "@material-ui/core";

const links = [
  {
    label: "About Us",
    href: "https://devias.io/about-us",
  },
  {
    label: "Terms",
    href: "https://devias.io/legal/tos",
  },
];

export const Footer = () => (
  <div>
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: {
          sm: "row",
          xs: "column",
        },
        py: 3,
        "& a": {
          mt: {
            sm: 0,
            xs: 1,
          },
          "&:not(:last-child)": {
            mr: {
              sm: 5,
              xs: 0,
            },
          },
        },
      }}
    >
      <Typography color="textSecondary" variant="caption"></Typography>
      <Box sx={{ flexGrow: 1 }} />
    </Container>
  </div>
);
