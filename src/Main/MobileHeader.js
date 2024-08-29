import React, { useState, useEffect } from 'react';
import './Header.css';

const MobileMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assuming 768px as the breakpoint for mobile devices

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menuItems = [
      {
        title: "Personal",
        subMenus: [
          {
            title: "Digital Assets",
            links: [
              {
                title: "Buy Assets",
                url: `/digital-assets/#buy`,
                description: "Purchase digital assets securely."
              },
              {
                title: "Sell Assets",
                url: `/digital-assets#sell`,
                description: "Sell your digital assets easily."
              },
              {
                title: "Send Assets",
                url: `/digital-assets/#send`,
                description: "Transfer assets to others."
              },
              {
                title: "Receive Assets",
                url: `/digital-assets/#receive`,
                description: "Accept digital assets from others."
              }
            ]
          },
          
          {
            title: "Payments",
            links: [
              { title: "International Payments", 
                url: `/transfer`, 
                description: "Make payments across borders." },
              { title: "Online Payments", 
                url: `/pay-for-me`,
                description: "Pay for services online." },
              { title: "Bill/Invoice Payments", 
                url: `/invoice`,
                description: "Settle your bills and invoices." },
              { title: "Escrow Services", 
                url: `/escrow`,
                description: "Secure transactions with escrow." }
            ]
          }
        ]
      },
      {
        title: "Business",
        subMenus: [
          {
            title: "Get Paid",
            links: [
              { title: "Get paid by clients/customers", 
                url: `/digital-assets#receive`, 
                description: "Acquire digital assets for your business." },
              { title: "Get paid by marketplaces", 
                url: `/marketplace`,
                description: "Get paid for your goods and services on marketplaces" },
              { title: "Multicurrency account", 
                url: `/multicurrency`, 
                description: "Manage multiple currencies in one account." },
              { title: "Receive Assets", 
                url: `/digital-assets/#receive`, 
                description: "Collect digital assets from clients." }
            ]
          },
          {
            title: "Make Payments",
            links: [
              { title: "Pay suppliers", 
                url: `/pay-for-me`, 
                description: "Facilitate global business payments." },
              { title: "Pay for Goods and Services", 
                url: `/pay-for-me`, 
                description: "Handle online transactions smoothly." },
              { title: "Bill/Invoice Payments", 
                url: `/invoice`,
                description: "Manage your business invoices." },
              { title: "Escrow Services", 
                url: `/escrow`, 
                description: "Secure business deals with escrow." }
            ]
          }
        ]
      },
      {
        title: "Freelance",
        subMenus: [
          {
            title: "Get Paid",
            links: [
              { title: "Get paid by clients/customers", 
                url: `/digital-assets/#receive`, 
                description: "Receive payments from clients and customers." },
              { title: "Get paid by marketplaces", 
                url: `/marketplce`, 
                description: "Get paid for your work on various marketplaces." },
              { title: "Multicurrency account", 
                url: `/multicurrency`, 
                description: "Manage earnings in multiple currencies." },
              { title: "Receive Assets", 
                url: `/digital-assets/#receive`, 
                description: "Accept payments in digital assets." }
            ]
          },
          {
            title: "Receive Payments",
            links: [
              { title: "International Payments", 
                url: `/digital-assets/transfer`,
                description: "Receive international payments easily." },
              { title: "Receive Assets", 
                url: `/digital-assets#receive`, 
                description: "Collect digital assets for your freelance work." },
              { title: "Bill/Invoice Payments", 
                url: `/invoice`, 
                description: "Get paid by sending bills or invoices." },
              { title: "Escrow Services", 
                url: `/escrow`,
                description: "Securely receive payments with escrow." }
            ]
          }
        ]
      },
      {
        title: "Tools",
        subMenus: [
          {
            title: "Paypal Tools",
            links: [
              { title: "Paypal fees checker", 
                url: `/paypal-fees-checker`, 
                description: "Calculate Paypal fees for transactions." },
              { title: "Paypal rate checker", 
                url: `/coming-soon`,
                description: "Check the current Paypal exchange rates." },
              { title: "Paypal currency converter", 
                url: `/coming-soon`, 
                description: "Convert currencies using Paypal rates." },
              { title: "Paypal Account Creation", 
                url: `/coming-soon`, 
                description: "Exchange currencies via Paypal." }
            ]
          },
          {
            title: "General Tools",
            links: [
              { title: "Invoice Generator", 
                url: `/coming-soon`, 
                description: "Create professional invoices easily." },
              { title: "Fees Checker", 
                url: `/coming-soon`,
                description: "Check fees for various transactions." },
              { title: "Currency Converter", 
                url: `/coming-soon`,
                description: "Convert between different currencies." },
              { title: "Exchange Rate Checker", 
                url: `/coming-soon`,
                description: "Create a verified Paypal account." }
            ]
          }
        ]
      },
      {
        title: "Help",
        url: `/support-center`,
        description: "Get assistance and find FAQs."
      }
    ];
    
    
    const handleMenuClick = (index) => {
      setActiveMenu(index === activeMenu ? null : index);
    };
    
    const handleSubMenuClick = (menuIndex, subMenuIndex) => {
      setActiveSubMenu((prev) => ({
        ...prev,
        [menuIndex]: subMenuIndex === prev[menuIndex] ? null : subMenuIndex,
      }));
    };
    
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
    
    return (
      <header id="header" className="fixed-top">
        <div className="main-header">
          <div className="container px-3 px-xl-0">
            <div className="d-flex">
              <div className="d-flex align-items-center me-auto">
                <div className="d-flex align-items-center flex-fill">
                  <div className="site-branding header-logo flex-fill">
                    <a href="https://www.barter-funds.com" className="custom-logo-link dark" rel="home">
                      <img src="/assets/images/barterfunds-logo.png" width={200} height={40} alt="BarterFunds" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                {isMobile && (
                  <button className="menu-toggle" onClick={toggleMenu} style={{ width: '40px', height: '40px', fontSize: '25px' }}>
                    <i className={`la ${menuVisible ? 'la-times' : 'la-bars'}`}></i>
                  </button>
                )}
                <div className={`mmenu ${menuVisible ? 'show-menu' : ''}`}>
                  {menuItems.map((menuItem, menuIndex) => (
                    <div key={menuIndex}>
                      {menuItem.subMenus ? (
                        <>
                          <div className="mmenu-item" onClick={() => handleMenuClick(menuIndex)}>
                            {menuItem.title}
                            {menuItem.subMenus.length > 0 && (
                              <span className={`arrow ${activeMenu === menuIndex ? 'la la-angle-up' : 'la la-angle-right'} arrow`}></span>
                            )}
                          </div>
                          {activeMenu === menuIndex && menuItem.subMenus.length > 0 && (
                            <div className="msubmenu">
                              {menuItem.subMenus.map((subMenu, subMenuIndex) => (
                                <div key={subMenuIndex}>
                                  <div className="msubmenu-item" onClick={() => handleSubMenuClick(menuIndex, subMenuIndex)}>
                                    {subMenu.title}
                                    {subMenu.links.length > 0 && (
                                      <span className={`arrow ${activeSubMenu[menuIndex] === subMenuIndex ? 'la la-angle-up' : 'la la-angle-right'} arrow`}></span>
                                    )}
                                  </div>
                                  {activeSubMenu[menuIndex] === subMenuIndex && (
                                    <div className="msubmenu-items">
                                      {subMenu.links.map((link, linkIndex) => (
                                        <div key={linkIndex} className="msubmenu-item-detail">
                                          <a href={link.url}>
                                            {link.title} <i className="la la-arrow-right"></i>
                                          </a>
                                          <span className="description">{link.description}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="mmenu-item">
                          <a href={menuItem.url}>
                            {menuItem.title} <i className="la la-question-circle"></i>
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="mmenu-footer">
                <button className="mmenu-footer-button" onClick={(() => {window.location.href="/login"})}>Login</button>
                <button className="mmenu-footer-button" onClick={(() => {window.location.href="/signup"})}>Get Started</button>
                <div className="mfooter-links"  style={{ marginTop: '100px' }}>
  <a href="/privacy-policy" className="mfooter-link">Privacy</a>
  <a href="/terms-of-use" className="mfooter-link">Terms</a>
  <a href="/terms-of-use" className="mfooter-link">AML/KYC Policy</a>
  <a href="/fees" className="mfooter-link">Fees</a>
  <a href="/fees" className="mfooter-link">Payment</a>
</div>
                <div className="msocial-media">
                    <a href="https://www.facebook.com/barterfunds" className="msocial-icon"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.twitter.com/barterfunds" className="msocial-icon"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://www.instagram.com/barterfunds" className="msocial-icon"><i className="fab fa-instagram-square"></i></a>
                    <a href="https://www.linkedin.com/company/barterfunds" className="msocial-icon"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.youtube.com" className="msocial-icon"><i className="fab fa-youtube-square"></i></a>
                    <a href="https://wa.me/message/ON5PHWAZTGKWI1" className="msocial-icon"><i className="fa-brands fa-square-whatsapp"></i></a>
                    <a href="https://www.tiktok.com/barterfunds" className="msocial-icon"><i className="fa-brands fa-tiktok"></i></a>
                </div>
                <div className="mcopyright">
                    &copy; 2019 - 2024 BarterFunds. All Rights Reserved.
                </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
    
};

export default MobileMenu;
