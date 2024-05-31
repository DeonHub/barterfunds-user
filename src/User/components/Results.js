import React from "react";
import { Result } from "antd";

const Results = ({ index, done, title, subtitle, redirectTo }) => {
  return (
    <div className="align-center flex-wrap flex-md-nowrap g-3 h-100">
      <Result
        status={done || index === 4 ? "success" : "warning"}
        title={title}
        subTitle={subtitle}
        extra={[
            !done && (
              <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/${redirectTo}`}  className="btn btn-lg btn-primary">
                Get Started
              </a>
            )
          ]}
      />
    </div>
  );
};

export default Results;
