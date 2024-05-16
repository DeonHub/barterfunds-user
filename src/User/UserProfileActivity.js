import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";


class Activity extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <div className="nk-body npc-crypto bg-white has-sidebar">
        <div className="nk-app-root">
            {/*Main Start*/}
            <div className="nk-main ">
                {/*Sidebar Start*/}
                <UserSidebar />
                {/*Sidebar End*/}
                <div className="nk-wrap ">
                    {/*Main Header Start*/}
                    <UserHeader />
                    {/*Main Header End*/}
                    {/*Content Start*/}
                    <div className="nk-content nk-content-fluid">
  <div className="container-xl wide-lg">
    <div className="nk-content-body">
      <div className="nk-block-head">
        <div className="nk-block-head-content">
          <div className="nk-block-head-sub">
            <a className="back-to" href="/frontend/user/user/profile.html">
              <em className="icon ni ni-arrow-left" />
              <span>My Profile</span>
            </a>
          </div>
          <h2 className="nk-block-title fw-normal">Login Activity</h2>
          <div className="nk-block-des">
            <p>
              Here is your last 20 login activities log.{" "}
              <span className="text-soft">
                <em
                  className="icon ni ni-info"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="activities log"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* nk-block-head */}
      <div className="nk-block">
        <div className="nk-block-title-group mb-3">
          <h6 className="nk-block-title title">Activity on your account</h6>
          <a href="#" className="link link-danger">
            Clear log
          </a>
        </div>
        <div className="card card-bordered">
          <table className="table table-ulogs">
            <thead className="table-light">
              <tr>
                <th className="tb-col-os">
                  <span className="overline-title">
                    Browser <span className="d-sm-none">/ IP</span>
                  </span>
                </th>
                <th className="tb-col-ip">
                  <span className="overline-title">IP</span>
                </th>
                <th className="tb-col-time">
                  <span className="overline-title">Time</span>
                </th>
                <th className="tb-col-action">
                  <span className="overline-title">&nbsp;</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tb-col-os">Chrome on Window</td>
                <td className="tb-col-ip">
                  <span className="sub-text">192.149.122.128</span>
                </td>
                <td className="tb-col-time">
                  <span className="sub-text">11:34 PM</span>
                </td>
                <td className="tb-col-action" />
              </tr>
              <tr>
                <td className="tb-col-os">Mozilla on Window</td>
                <td className="tb-col-ip">
                  <span className="sub-text">86.188.154.225</span>
                </td>
                <td className="tb-col-time">
                  <span className="sub-text">
                    Nov 20, 2019{" "}
                    <span className="d-none d-sm-inline-block">10:34 PM</span>
                  </span>
                </td>
                <td className="tb-col-action">
                  <a href="#" className="link-cross me-sm-n1">
                    <em className="icon ni ni-cross" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="tb-col-os">Chrome on iMac</td>
                <td className="tb-col-ip">
                  <span className="sub-text">192.149.122.128</span>
                </td>
                <td className="tb-col-time">
                  <span className="sub-text">
                    Nov 12, 2019{" "}
                    <span className="d-none d-sm-inline-block">08:56 PM</span>
                  </span>
                </td>
                <td className="tb-col-action">
                  <a href="#" className="link-cross me-sm-n1">
                    <em className="icon ni ni-cross" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="tb-col-os">Chrome on Window</td>
                <td className="tb-col-ip">
                  <span className="sub-text">192.149.122.128</span>
                </td>
                <td className="tb-col-time">
                  <span className="sub-text">
                    Nov 03, 2019{" "}
                    <span className="d-none d-sm-inline-block">04:29 PM</span>
                  </span>
                </td>
                <td className="tb-col-action">
                  <a href="#" className="link-cross me-sm-n1">
                    <em className="icon ni ni-cross" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="tb-col-os">Mozilla on Window</td>
                <td className="tb-col-ip">
                  <span className="sub-text">86.188.154.225</span>
                </td>
                <td className="tb-col-time">
                  <span className="sub-text">
                    Oct 29, 2019{" "}
                    <span className="d-none d-sm-inline-block">09:38 AM</span>
                  </span>
                </td>
                <td className="tb-col-action">
                  <a href="#" className="link-cross me-sm-n1">
                    <em className="icon ni ni-cross" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="tb-col-os">Chrome on iMac</td>
                <td className="tb-col-ip">
                  <span className="sub-text">192.149.122.128</span>
                </td>
                <td className="tb-col-time">
                  <span className="sub-text">
                    Oct 23, 2019{" "}
                    <span className="d-none d-sm-inline-block">04:16 PM</span>
                  </span>
                </td>
                <td className="tb-col-action">
                  <a href="#" className="link-cross me-sm-n1">
                    <em className="icon ni ni-cross" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="tb-col-os">Chrome on Window</td>
                <td className="tb-col-ip">
                  <span className="sub-text">192.149.122.128</span>
                </td>
                <td className="tb-col-time">
                  <span className="sub-text">
                    Oct 15, 2019{" "}
                    <span className="d-none d-sm-inline-block">11:41 PM</span>
                  </span>
                </td>
                <td className="tb-col-action">
                  <a href="#" className="link-cross me-sm-n1">
                    <em className="icon ni ni-cross" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="tb-col-os">Mozilla on Window</td>
                <td className="tb-col-ip">
                  <span className="sub-text">86.188.154.225</span>
                </td>
                <td className="tb-col-time">
                  <span className="sub-text">
                    Oct 13, 2019{" "}
                    <span className="d-none d-sm-inline-block">05:43 AM</span>
                  </span>
                </td>
                <td className="tb-col-action">
                  <a href="#" className="link-cross me-sm-n1">
                    <em className="icon ni ni-cross" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="tb-col-os">Chrome on iMac</td>
                <td className="tb-col-ip">
                  <span className="sub-text">192.149.122.128</span>
                </td>
                <td className="tb-col-time">
                  <span className="sub-text">
                    Oct 03, 2019{" "}
                    <span className="d-none d-sm-inline-block">04:12 AM</span>
                  </span>
                </td>
                <td className="tb-col-action">
                  <a href="#" className="link-cross me-sm-n1">
                    <em className="icon ni ni-cross" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          {/* .table */}
        </div>
        {/* .card */}
      </div>
      {/* .nk-block */}
    </div>
  </div>
</div>

                    {/*Content End*/}
                    {/*Footer Start*/}
                    <UserFooter />
                    {/*Footer End*/}

                </div>
            </div>
            {/*Main End*/}

        </div>
      </div> 
  


    );
  }
}

export default Activity;
