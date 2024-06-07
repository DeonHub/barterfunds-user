import React from "react";

const Success = ({ title, subtitle, body }) => {

  return (
    <div className="nk-block-head text-center">
        <div className="nk-block-head-content  text-success">
          {/* <h4 className="nk-block-title">🎉 Congratulations! 🎉</h4> */}
          <h4 className="nk-block-title">{title}</h4>
          {/* <h6> You’re now part of Barter Funds community. </h6> */}
          <h6>{subtitle}</h6>
          <div className="nk-block-des">
            {/* <p>Please check your email and verify your account to unlock all the exciting features awaiting you.</p> */}
            <p>{body}</p>
          </div>
        </div>
      </div>
    );

}

export default Success;
