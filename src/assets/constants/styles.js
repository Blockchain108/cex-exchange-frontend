import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        appbar: {
            "& .header": {
                backgroundColor: "transparent !important",
                padding: theme.isMobile ? `${theme.spacing(2, 2)}` : theme.isTablet ? `${theme.spacing(2, 5)}` : `${theme.spacing(2, 0)}`,
                boxShadow: "none !important",
                transition: "0.5s",
                zIndex: '1',
                position: 'relative',
                "& .container": {
                    display: 'flex'
                },
                "& .logo-bar": {
                    display: 'flex',
                    alignItems: 'center'
                },
                "& .button-list": {
                    display: 'flex',
                    alignItems: 'center',
                    "& .headerbar-drop-button": {
                        "& span": {
                            color: 'white',
                            textTransform: 'capitalize'
                        },
                        "& p": {
                            color: 'black',
                            backgroundColor: '#EAE987',
                            borderRadius: '10px',
                            padding: '0 10px',
                        }
                    },
                    "& .stack": {
                        width: '0px',
                        height: '31.5px',
                        borderRight: '1px solid rgba(255, 255, 255, 0.17)',
                        margin: '0 15px'
                    },
                    "& .register": {
                        "& p": {
                            padding: '5px 10px !important',
                            margin: '0',
                            display: ' flex',
                            alignItems: 'center',
                            textTransform: 'capitalize',
                            "& span": {
                                color: "black",
                                marginRight: "0.5rem"
                            }
                        },
                        "& .connect": {
                            backgroundColor: 'white',
                        }
                    }
                },
                "&.top": {
                    // background: '#3a7faf !important',
                    // "& .button-list": {
                    //     display: 'flex',
                    //     alignItems: 'center'
                    // }
                },
            },
        },
        AppContainer: {
            height: '100%'
        },
        AppContainer1: {
            backgroundColor: '#1a4768',
            height: '100%'
        },
        CustomizeMenu: {
            "& .menu-item-header": {
                display: 'flex',
                padding: '10px',
                "& .menu-item": {
                    fontWeight: 'bold',
                    color: '#333333',
                    minWidth: '210px',
                    "& .icon": {
                        marginRight: "0.5rem"
                    },
                    "&:hover": {
                        borderRadius: '10px'
                    }
                }
            },
            "& .crypto-item-header": {
                padding: '0 10px 10px 10px',
                "& p": {
                    padding: '0',
                    margin: '10px 0 0 0',
                    fontWeight: 'bold'
                },
                "& .crypto-item": {
                    padding: '0 10px',
                    color: '#333333',
                    "& .letter-head": {
                        display: 'flex',
                        flexDirection: 'column',
                        "& .main-letter": {
                            fontWeight: 'bold'
                        },
                        "& .second": {
                            fontSize: '11px'
                        }
                    },
                    "& .icon": {
                        marginRight: "0.5rem"
                    },
                    "&:hover": {
                        borderRadius: '10px'
                    }
                }
            },
            "& span": {
                marginRight: "0.5rem"
            },
            "& li": {
                fontWeight: 500
            }
        },
        Home: {
            "& .home-bg": {
                position: 'absolute',
                top: '3rem',
                right: '0'
            },
            "& .main-letter": {
                fontWeight: '700',
                fontSize: '48px',
                color: 'white',
                paddingTop: '2rem',
                paddingBottom: '1rem'
            },
            "& .sub-letter": {
                fontWeight: '600',
                fontSize: '22px',
                color: 'white',
                marginBottom: '1rem'
            },
            "& .register-btn": {
                backgroundColor: '#EAE987',
                color: 'black',
                width: '170px',
                fontWeight: '550',
                "&:hover": {
                    backgroundColor: '#EAE987',
                    color: 'black',
                }
            },
            "& .crypto-item-list": {
                margin: '3rem 0',
                display: 'flex',
                justifyContent: 'space-between',
                "& .crypto-item": {
                    minWidth: '180px',
                    maxWidth: '180px',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.27) 0%, rgba(255, 255, 255, 0.189) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxSizing: 'border-box',
                    boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '10px',
                    padding: '1rem',
                    "& .line1": {
                        display: 'flex',
                        justifyContent: 'space-between',
                        "& .letter1": {
                            color: 'white',
                            fontWeight: 'bold'
                        },
                        "& .letter2": {
                            color: '#3AB67A',
                            background: '#FFFFFF',
                            borderRadius: '5px',
                            padding: '0 0.2rem'
                        },
                        "& .letter2-1": {
                            color: '#FD5353',
                            background: '#FFFFFF',
                            borderRadius: '5px',
                            padding: '0 0.2rem'
                        },
                    },
                    "& .letter3": {
                        color: 'white',
                        fontSize: '30px',
                        fontWeight: 'bold'
                    },
                    "& .letter4": {
                        color: 'white'
                    },
                }
            },
            "& .market-trend": {
                background: 'white',
                padding: '2rem 0',
                position: 'relative',
                zIndex: '1',
                "& .main-letter": {
                    color: 'black',
                    fontSize: '26px'
                },
                "& .tbl-row": {
                    width: '100%',
                    "& .th-cell": {
                        fontWeight: '700',
                        minWidth: '25%',
                        width: '25%'
                    },
                    "& td, th": {
                        border: '0',
                    },
                    "& .cell": {
                        padding: '8px 16px',
                        "& .d-flex": {
                            display: 'flex',
                            alignItems: 'center',
                            "& svg": {
                                width: '35px',
                                hegiht: '35px',
                                marginRight: '0.5rem'
                            },
                        },
                        "& span": {
                            fontSize: '16px',
                            fontWeight: 'bold'
                        },
                        "& .color1": {
                            color: '#3AB67A'
                        },
                        "& .color2": {
                            color: '#FD5353'
                        },
                        "& img": {
                            width: '280px',
                            height: '50px'
                        }
                    },
                },
                "& .c-row": {
                    cursor: 'pointer',
                    "&:hover": {
                        background: '#F6F6F6'
                    }
                },
                "& .touch-item": {
                    background: '#F6F6F6',
                    borderRadius: "10px",
                    textAlign: 'center',
                    padding: '1rem',
                    "& .touch-name": {
                        fontWeight: 'bold',
                        fontSize: '18px',
                    },
                    "& .touch-explo": {
                        padding: '1rem'
                    }
                },
            },
            "& .start-trading": {
                background: '#F6F6F6',
                padding: '2rem 0',
                textAlign: 'center',
                "& .register": {
                    background: '#EAE987',
                    margin: '0 0.5rem',
                },
                "& .trade": {
                    background: '#333333',
                    color: 'white',
                    margin: '0 0.5rem',
                },
                "& .main-letter": {
                    color: 'black',
                    fontSize: '32px',
                    margin: '0',
                    padding: '1rem',
                },
            },
            "& .market-footer": {
                background: 'white',
                "& .market-footer-content": {
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '2rem 0',
                    "& p": {
                        color: 'rgba(51, 51, 51, 0.75)',
                        fontWeight: 'bold'
                    },
                    "& .footer-list": {
                        display: 'flex',
                        "& p": {
                            margin: "0 0.5rem",
                            cursor: 'pointer'
                        }
                    }
                }
            }
        },
        Auth: {
            display: 'flex',
            justifyContent: 'center',
            "& .home-bg": {
                position: 'absolute',
                bottom: '0'
            },
            "& .card-content": {
                width: '100%',
                padding: '1rem 2rem 1rem 2rem',
                position: "relative",
                aIndex: "1",
                "& .header": {
                    color: '#333333',
                    fontSize: '25px',
                    fontWeight: 'bold',
                    padding: '1rem'
                },
                "& .terms-content": {
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    "& .checkbox": {
                        color: 'black'
                    },
                    "& .letter": {
                        fontSize: '13px',
                        fontWeight: 'bold'
                    },
                    "& .footer-letter": {
                        textDecoration: 'underline'
                    }
                },
                "& .login-btn": {
                    textTransform: 'capitalize',
                    color: 'white',
                    background: '#333333'
                },
                "& .footer-content": {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '0.5rem 0 0 0',
                    "& .footer-letter": {
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontWeight: '600'
                    }
                },
                "& .where": {
                    color: '#333333',
                    fontSize: '22px',
                    fontWeight: '600',
                    padding: '1rem 0 0 0'
                },
                "& .where-explo": {
                    color: '#333333',
                    fontSize: '13px',
                    fontWeight: '600'
                },
                "& .residence": {
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: '600'
                },
                "& .current-country": {
                    cursor: 'pointer !important',
                    "& input": {
                        cursor: 'pointer !important',
                    }
                },
                "& .select-input": {
                    border: '2px solid #EAE987'
                },
                "& .country-select": {
                    maxHeight: '200px',
                    overflowY: 'auto',
                    "& .item-country": {
                        "&:hover": {
                            background: 'rgba(233, 233, 233, 1)',
                        }
                    }
                },
                "& .already": {
                    "& span": {
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                },
                "& .mail-send": {
                    background: 'rgba(51, 51, 51, 1)',
                    color: 'white'
                }
            },
            "& .copyright": {
                fontWeight: '900',
                color: 'white',
                textAlign: 'center',
                padding: '1rem'
            }
        }
    }
});

export default useStyles;