export const commonErrorDetails: {
  [key: number]: { title: string; message: string };
} = {
  400: {
    title: "Bad Request",
    message:
      "The request could not be understood by the server due to malformed syntax.",
  },
  401: {
    title: "Unauthorized",
    message: "The request requires user authentication.",
  },
  403: {
    title: "Forbidden",
    message:
      "The server understood the request, but is refusing to fulfill it.",
  },
  404: {
    title: "Not Found",
    message: "The server has not found anything matching the Request-URI.",
  },
  405: {
    title: "Method Not Allowed",
    message:
      "The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.",
  },
  408: {
    title: "Request Timeout",
    message:
      "The client did not produce a request within the time that the server was prepared to wait.",
  },
  500: {
    title: "Internal Server Error",
    message:
      "The server encountered an unexpected condition which prevented it from fulfilling the request.",
  },
  502: {
    title: "Bad Gateway",
    message:
      "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
  },
  503: {
    title: "Service Unavailable",
    message:
      "The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.",
  },
  504: {
    title: "Gateway Timeout",
    message:
      "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server or some other auxiliary server it needed to access in order to complete the request.",
  },
};
