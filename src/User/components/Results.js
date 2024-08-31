import React from "react";
import { Result } from "antd";
import openNotification from "../../components/OpenNotification";

const Results = ({ index, done, title, subtitle, redirectTo, isEmail }) => {
  return (
    <div className="align-center flex-wrap flex-md-nowrap g-3 h-100">
      
      <Result
        status={done || index === 4 ? "success" : "warning"}
        title={title}
        subTitle={subtitle}
        extra={[
            !done && (
              isEmail ? (
                <span
                className="btn btn-lg btn-primary"
                 onClick={() => {
                  openNotification('topRight', 'info', 'Verify Email Address', 'Check your email for an activation link to verify your email address before you can proceed. Contact support if you have any issues.');
                }}>
                  Get Started
                </span>
                
              ) : (
                <a href={`/user/${redirectTo}`}  className="btn btn-lg btn-primary">
                Get Started
              </a>
              )
              
            )
          ]}
      />
    </div>
  );
};

export default Results;
