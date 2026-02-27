import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-green-800 text-center mb-12">
          📞 Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-5 text-gray-700 leading-relaxed">

              <div>
                <h3 className="font-semibold text-lg">🏢 Address</h3>
                <p>
                  Digital Agriculture Innovation Hub <br />
                  Andheri East, Mumbai, 400069
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📧 Email</h3>
                <a
                  href="mailto:support@kisanmitraai.com"
                  className="text-green-600 hover:underline"
                >
                  support@kisanmitraai.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📱 Phone</h3>
                <a
                  href="tel:+917565874939"
                  className="text-green-600 hover:underline"
                >
                  +91 7565874939
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;