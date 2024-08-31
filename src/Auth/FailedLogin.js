import React from "react";
import { Result } from "antd";


const FailedLogin = () => {

  return (
    <div className="mt-5">
      <div className="brand-logo text-center">
        <a href={`/`} className="logo-link">
          <img
            className="logo-dark logo-img logo-img-lg"
            src="/assets/images/barterfunds-logo.png"
            alt="logo"
          />
        </a>
      </div>
      <Result
        status="403"
        title="Multiple unsuccessful login attempts."
        subTitle="Please wait a few minutes before attempting to log in again. If you continue to experience issues, please contact support for assistance."
        extra={
          <div>
            <a href={`/`}>
              <button className="btn btn-outline-primary btn-sm">
                Back Home
              </button>
            </a>{" "}
            <a href="/support-center">
              <button className="btn btn-primary btn-sm">
                Contact support
              </button>
            </a>
          </div>
        }
      />
      {/* <Countdown title="Countdown" value={deadline} onFinish={onFinish} /> */}
    </div>
  );
};

export default FailedLogin;
