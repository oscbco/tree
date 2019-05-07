import React, { useState } from 'react';

import { getNodeByKeypath } from '../getFlattenedArrayItem/';
import Treepane from '../Treepane/Treepane';
// import styles from './_App.scss';

let items = [
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: [
                  {
                    value: 'js',
                    id: '/public/js',
                    toggle: false,
                    child: [
                      {
                        value: 'index.js',
                        id: '/public/js/index.js',
                        toggle: false,
                        child: null
                      },
                      {
                        value: 'vendor',
                        id: '/public/js/vendor',
                        toggle: false,
                        child: [
                          {
                            value: 'vendor.js',
                            id: '/public/js/vendor/vendor.js',
                            toggle: false,
                            child: [
                              {
                                value: 'js',
                                id: '/public/js',
                                toggle: false,
                                child: [
                                  {
                                    value: 'index.js',
                                    id: '/public/js/index.js',
                                    toggle: false,
                                    child: null
                                  },
                                  {
                                    value: 'vendor',
                                    id: '/public/js/vendor',
                                    toggle: false,
                                    child: [
                                      {
                                        value: 'vendor.js',
                                        id: '/public/js/vendor/vendor.js',
                                        toggle: false,
                                        child: [
                                          {
                                            value: 'index.js',
                                            id: '/public/js/index.js',
                                            toggle: false,
                                            child: null
                                          },
                                          {
                                            value: 'vendor',
                                            id: '/public/js/vendor',
                                            toggle: false,
                                            child: [
                                              {
                                                value: 'vendor.js',
                                                id: '/public/js/vendor/vendor.js',
                                                toggle: false,
                                                child: [
                                                  {
                                                    value: 'js',
                                                    id: '/public/js',
                                                    toggle: false,
                                                    child: [
                                                      {
                                                        value: 'index.js',
                                                        id: '/public/js/index.js',
                                                        toggle: false,
                                                        child: null
                                                      },
                                                      {
                                                        value: 'vendor',
                                                        id: '/public/js/vendor',
                                                        toggle: false,
                                                        child: [
                                                          {
                                                            value: 'vendor.js',
                                                            id: '/public/js/vendor/vendor.js',
                                                            toggle: false,
                                                            child: [
                                                              {
                                                                value: 'js',
                                                                id: '/public/js',
                                                                toggle: false,
                                                                child: [
                                                                  {
                                                                    value: 'index.js',
                                                                    id: '/public/js/index.js',
                                                                    toggle: false,
                                                                    child: null
                                                                  },
                                                                  {
                                                                    value: 'vendor',
                                                                    id: '/public/js/vendor',
                                                                    toggle: false,
                                                                    child: [
                                                                      {
                                                                        value: 'vendor.js',
                                                                        id: '/public/js/vendor/vendor.js',
                                                                        toggle: false,
                                                                        child: [
                                                                          {
                                                                            value: 'index.js',
                                                                            id: '/public/js/index.js',
                                                                            toggle: false,
                                                                            child: null
                                                                          },
                                                                          {
                                                                            value: 'vendor',
                                                                            id: '/public/js/vendor',
                                                                            toggle: false,
                                                                            child: [
                                                                              {
                                                                                value: 'vendor.js',
                                                                                id: '/public/js/vendor/vendor.js',
                                                                                toggle: false,
                                                                                child: [
                                                                                  {
                                                                                    value: 'js',
                                                                                    id: '/public/js',
                                                                                    toggle: false,
                                                                                    child: [
                                                                                      {
                                                                                        value: 'index.js',
                                                                                        id: '/public/js/index.js',
                                                                                        toggle: false,
                                                                                        child: null
                                                                                      },
                                                                                      {
                                                                                        value: 'vendor',
                                                                                        id: '/public/js/vendor',
                                                                                        toggle: false,
                                                                                        child: [
                                                                                          {
                                                                                            value: 'vendor.js',
                                                                                            id: '/public/js/vendor/vendor.js',
                                                                                            toggle: false,
                                                                                            child: [
                                                                                              {
                                                                                                value: 'js',
                                                                                                id: '/public/js',
                                                                                                toggle: false,
                                                                                                child: [
                                                                                                  {
                                                                                                    value: 'index.js',
                                                                                                    id: '/public/js/index.js',
                                                                                                    toggle: false,
                                                                                                    child: null
                                                                                                  },
                                                                                                  {
                                                                                                    value: 'vendor',
                                                                                                    id: '/public/js/vendor',
                                                                                                    toggle: false,
                                                                                                    child: [
                                                                                                      {
                                                                                                        value: 'vendor.js',
                                                                                                        id: '/public/js/vendor/vendor.js',
                                                                                                        toggle: false,
                                                                                                        child: [
                                                                                                          {
                                                                                                            value: 'index.js',
                                                                                                            id: '/public/js/index.js',
                                                                                                            toggle: false,
                                                                                                            child: null
                                                                                                          },
                                                                                                          {
                                                                                                            value: 'vendor',
                                                                                                            id: '/public/js/vendor',
                                                                                                            toggle: false,
                                                                                                            child: [
                                                                                                              {
                                                                                                                value: 'vendor.js',
                                                                                                                id: '/public/js/vendor/vendor.js',
                                                                                                                toggle: false,
                                                                                                                child: [
                                                                                                                  {
                                                                                                                    value: 'js',
                                                                                                                    id: '/public/js',
                                                                                                                    toggle: false,
                                                                                                                    child: [
                                                                                                                      {
                                                                                                                        value: 'index.js',
                                                                                                                        id: '/public/js/index.js',
                                                                                                                        toggle: false,
                                                                                                                        child: null
                                                                                                                      },
                                                                                                                      {
                                                                                                                        value: 'vendor',
                                                                                                                        id: '/public/js/vendor',
                                                                                                                        toggle: false,
                                                                                                                        child: [
                                                                                                                          {
                                                                                                                            value: 'vendor.js',
                                                                                                                            id: '/public/js/vendor/vendor.js',
                                                                                                                            toggle: false,
                                                                                                                            child: [
                                                                                                                              {
                                                                                                                                value: 'js',
                                                                                                                                id: '/public/js',
                                                                                                                                toggle: false,
                                                                                                                                child: [
                                                                                                                                  {
                                                                                                                                    value: 'index.js',
                                                                                                                                    id: '/public/js/index.js',
                                                                                                                                    toggle: false,
                                                                                                                                    child: null
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                    value: 'vendor',
                                                                                                                                    id: '/public/js/vendor',
                                                                                                                                    toggle: false,
                                                                                                                                    child: [
                                                                                                                                      {
                                                                                                                                        value: 'vendor.js',
                                                                                                                                        id: '/public/js/vendor/vendor.js',
                                                                                                                                        toggle: false,
                                                                                                                                        child: null
                                                                                                                                      }
                                                                                                                                    ]
                                                                                                                                  }
                                                                                                                                ]
                                                                                                                              }
                                                                                                                            ]
                                                                                                                          }
                                                                                                                        ]
                                                                                                                      }
                                                                                                                    ]
                                                                                                                  }
                                                                                                                ]
                                                                                                              }
                                                                                                            ]
                                                                                                          }
                                                                                                        ]
                                                                                                      }
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              }
                                                                                            ]
                                                                                          }
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              }
                                                                            ]
                                                                          }
                                                                        ]
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',//
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'public',
    id: '/public',
    toggle: false,
    child: [
      {
        value: 'js',
        id: '/public/js',
        toggle: false,
        child: [
          {
            value: 'index.js',
            id: '/public/js/index.js',
            toggle: false,
            child: null
          },
          {
            value: 'vendor',
            id: '/public/js/vendor',
            toggle: false,
            child: [
              {
                value: 'vendor.js',
                id: '/public/js/vendor/vendor.js',
                toggle: false,
                child: null
              }
            ]
          }
        ]
      },
      {
        value: 'css',
        id: '/public/css',
        toggle: false,
        child: [
          {
            value: 'main.css',
            id: '/public/css/main.css',
            toggle: false,
            child: null
          }
        ]
      },
      {
        value: 'babel',
        id: '/public/js/babel.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'images',
    id: '/public/images',
    toggle: false,
    child: [
      {
        value: 'logo.png',
        id: '/public/images/logo.png',
        toggle: false,
        child: null
      },
      {
        value: 'header.png',
        id: '/public/images/header.png',
        toggle: false,
        child: null
      },
      {
        value: 'background.png',
        id: '/public/images/background.png',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'source',
    id: '/source',
    toggle: false,
    child: [
      {
        value: 'index.js',
        id: '/source/index.js',
        toggle: false,
        child: null
      }
    ]
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'README.md',
    id: '/README.md',
    toggle: false,
    child: null
  },
  {
    value: 'READMELAST.md',
    id: '/README.md',
    toggle: false,
    child: null
  }

];

export default function App () {
  const [collection, setCollection] = useState(items);
  const onToggle = (keypath) => {
    const node = getNodeByKeypath(collection, keypath);
    node.toggle = !node.toggle;
    setCollection({ ...collection });
  };
  return (
    <React.Fragment>
      <h1>TreePane</h1>
      <div style={{ maxWidth: '550px', height: '550px' }}>
        <Treepane collection={collection} setCollection={setCollection} onToggle={onToggle} />
      </div>
    </React.Fragment>
  );
}
