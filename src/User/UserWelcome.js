import React, { useEffect, useState } from "react";
import "./User.css";

import Results from "./components/Results";

const UserWelcome = ({ user }) => {
  const [index, setIndex] = useState(1);
  const [steps, setSteps] = useState([
    {
      index: 0,
      title: "Verify email address",
      done: false,
      current: false,
      pending: false,
    },
    {
      index: 1,
      title: "Secure your account (2FA)",
      done: false,
      current: false,
      pending: false,
    },
    {
      index: 2,
      title: "Verify your identity (KYC)",
      done: false,
      current: false,
      pending: false,
    },
    {
      index: 3,
      title: "Activate your BarterFunds Wallet",
      done: false,
      current: false,
      pending: false,
    },
    {
      index: 4,
      title: "Make transaction",
      done: false,
      current: false,
      pending: false,
    },
  ]);

  useEffect(() => {
    // Determine the index of the first undone step
    let firstUndoneIndex = steps.findIndex((step) => {
      switch (step.title) {
        case "Verify email address":
          return user.verified === false;
        case "Secure your account (2FA)":
          return user.twoFactorAuth === false;
        case "Verify your identity (KYC)":
          return user.kycApproved === false;
        case "Activate your BarterFunds Wallet":
          return user.addedPaymentMethod === false;
        case "Make transaction":
          return (
            user.verified &&
            user.twoFactorAuth &&
            user.kycApproved &&
            user.addedPaymentMethod
          );
        default:
          return false;
      }
    });

    if (firstUndoneIndex === -1) firstUndoneIndex = steps.length; // If all steps are done, set index to the last step

    // Update steps based on first undone step
    const updatedSteps = steps.map((step, index) => ({
      ...step,
      done: index < firstUndoneIndex,
      current: index === firstUndoneIndex,
      pending: index > firstUndoneIndex,
    }));

    // Set the index to the current index
    setIndex(firstUndoneIndex);

    // Update state
    setSteps(updatedSteps);
  }, [user, steps]);

  const handleClick = (clickedIndex) => {
    if (steps[clickedIndex].pending) return;

    // Update state
    setIndex(clickedIndex);
  };

  const renderSteps = () => {
    return steps.map((step) => (
      <li
        key={step.index}
        className={`${step.done ? "list-step-done" : ""} ${
          step.current ? "list-step-current" : ""
        } ${step.pending ? "list-step-pending disabled" : ""}`}
        style={{
          cursor:
            step.done || step.current
              ? "pointer"
              : step.pending
              ? "not-allowed"
              : "default",
        }}
        onClick={() => handleClick(step.index)}
      >
        {step.title}
      </li>
    ));
  };

  const renderProgressBar = () => {
    const doneCount = steps.filter((step) => step.done).length;
    const progress = (doneCount / steps.length) * 100;
    return (
      <div className="card-inner">
        <div className="align-center gx-3">
          <div className="flex-item">
            <div className="progress progress-sm progress-pill w-80px">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="flex-item">
            <span className="sub-text sub-text-sm text-soft">
              {doneCount}/{steps.length} Completed
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="nk-content nk-content-fluid">
      <div className="container-xl wide-lg">
        <div className="nk-content-body">
          <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
            <div className="nk-block-head-content text-center">
              <h2 className="nk-block-title fw-normal">
                Hello, {user.firstname} {user.surname}!
              </h2>
              <div className="nk-block-des">
                <p>
                  Welcome to <strong>Barter Funds</strong>. You are few steps
                  away to complete your profile. These are required to buy and
                  sell on our platform! Let’s start!
                </p>
              </div>
            </div>
          </div>
          {/* .nk-block-head */}
          <div className="nk-block">
            <div className="card card-custom-s1 card-bordered">
              <div className="row no-gutters">
                <div className="col-lg-4">
                  <div className="card-inner-group h-100">
                    <div className="card-inner">
                      <h5>Let’s Finish Registration</h5>
                      <p>
                        Only few minutes required to complete your registration
                        and set up your account.
                      </p>
                    </div>
                    <div className="card-inner">
                      <ul className="list list-step">{renderSteps()}</ul>
                    </div>
                    <div className="card-inner">{renderProgressBar()}</div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="card-inner card-inner-lg h-100">
                    {index === 0 ? (
                      <Results
                        index={index}
                        done={steps[index].done}
                        title={
                          steps[index].done
                            ? "Email Address Verified!"
                            : "Verify Email Address"
                        }
                        subtitle={
                          steps[index].done
                            ? "Your email address has been successfully verified. Complete the remaining steps enjoy full access to your account."
                            : "Verify your email address to proceed. We need to confirm your email before granting access to your account features."
                        }
                      />
                    ) : index === 1 ? (
                      <Results
                        index={index}
                        done={steps[index].done}
                        title={
                          steps[index].done
                            ? "Account Successfully Secured"
                            : "Secure Your Account (2FA)"
                        }
                        subtitle={
                          steps[index].done
                            ? "Your account has been successfully secured with two-factor authentication. Your account is now better protected against unauthorized access."
                            : "Enable two-factor authentication for added security. Adding an extra layer of protection to your account helps keep your information safe."
                        }
                      />
                    ) : index === 2 ? (
                      <Results
                        index={index}
                        done={steps[index].done}
                        title={
                          steps[index].done
                            ? "KYC Successfully Approved"
                            : "Verify Your Identity (KYC)"
                        }
                        subtitle={
                          steps[index].done
                            ? "Your identity has been successfully verified. Complete the remaining steps for access to all features and functionalities of your account."
                            : "Complete your KYC verification to access all features. Verifying your identity helps us ensure the security of your account and prevent fraud."
                        }
                        redirectTo={'kycs'}
                      />
                    ) : index === 3 ? (
                      <Results
                        index={index}
                        done={steps[index].done}
                        title={
                          steps[index].done
                            ? "BarterFunds Wallet Activated!"
                            : "Activate your BarterFunds Wallet"
                        }
                        subtitle={
                          steps[index].done
                            ? "Your BarterFunds Wallet has been successfully set up. You can now proceed with transactions and payments smoothly."
                            : "Activate your BarterFunds Wallet to proceed with transactions. Activating allows you to make purchases and transactions securely."
                        }

                        redirectTo={'barter-wallet'}
                      />
                    ) : (
                      <Results
                        index={index}
                        done={steps[index].done}
                        title={"Congratulations! You're Ready to Transact"}
                        subtitle={
                          "Congratulations! You have successfully completed all necessary steps. You are now ready to make transactions."
                        }
                        redirectTo={'transactions'}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nk-block">
            <div className="card card-bordered">
              <div className="card-inner card-inner-lg">
                <div className="align-center flex-wrap flex-md-nowrap g-4">
                  <div className="nk-block-image w-120px flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 118"
                    >
                      <path
                        d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z"
                        transform="translate(0 -1)"
                        fill="#f6faff"
                      />
                      <rect
                        x={18}
                        y={32}
                        width={84}
                        height={50}
                        rx={4}
                        ry={4}
                        fill="#fff"
                      />
                      <rect
                        x={26}
                        y={44}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={50}
                        y={44}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={74}
                        y={44}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={38}
                        y={60}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={62}
                        y={60}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <path
                        d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z"
                        transform="translate(0 -1)"
                        fill="#798bff"
                      />
                      <path
                        d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                        transform="translate(0 -1)"
                        fill="#6576ff"
                      />
                      <path
                        d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                        transform="translate(0 -1)"
                        fill="none"
                        stroke="#6576ff"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <line
                        x1={40}
                        y1={22}
                        x2={57}
                        y2={22}
                        fill="none"
                        stroke="#fffffe"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <line
                        x1={40}
                        y1={27}
                        x2={57}
                        y2={27}
                        fill="none"
                        stroke="#fffffe"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <line
                        x1={40}
                        y1={32}
                        x2={50}
                        y2={32}
                        fill="none"
                        stroke="#fffffe"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <line
                        x1="30.5"
                        y1="87.5"
                        x2="30.5"
                        y2="91.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="28.5"
                        y1="89.5"
                        x2="32.5"
                        y2="89.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="79.5"
                        y1="22.5"
                        x2="79.5"
                        y2="26.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="77.5"
                        y1="24.5"
                        x2="81.5"
                        y2="24.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="90.5"
                        cy="97.5"
                        r={3}
                        fill="none"
                        stroke="#9cabff"
                        strokeMiterlimit={10}
                      />
                      <circle
                        cx={24}
                        cy={23}
                        r="2.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeMiterlimit={10}
                      />
                    </svg>
                  </div>
                  <div className="nk-block-content">
                    <div className="nk-block-content-head px-lg-4">
                      <h5>We’re here to help you!</h5>
                      <p className="text-soft">
                        Ask a question or file a support ticket, manage request,
                        report an issues. Our team support team will get back to
                        you by email.
                      </p>
                    </div>
                  </div>
                  <div className="nk-block-content flex-shrink-0">
                    <a href="/support" className="btn btn-lg btn-outline-primary">
                      Get Support Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWelcome;
