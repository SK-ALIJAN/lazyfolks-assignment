import React from "react";
import { Helmet } from "react-helmet";

const HelmetForSeo = ({title, des}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={des} />
    </Helmet>
  );
};

export default HelmetForSeo;
