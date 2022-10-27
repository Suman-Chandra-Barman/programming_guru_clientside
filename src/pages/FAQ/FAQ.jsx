import React from "react";

const FAQ = () => {
  return (
    <div className="lg:w-2/3 mx-auto mt-10">
      <h2 className="text-center text-3xl my-5">Frequently asked questions</h2>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          1. What is cors?
        </div>
        <div className="collapse-content">
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          2. Why are you use Firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content">
          <p>
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together.
          </p>
          <p>
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
            alternatives and competitors to Firebase Authentication.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          3. How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in)
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          4. What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            Node allows developers to write JavaScript code that runs directly
            in a computer process itself instead of in a browser. Node can,
            therefore, be used to write server-side applications with access to
            the operating system, file system, and everything else required to
            build fully-functional applications.
          </p>
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
