const TermsCondition = () => {
  return (
    <div className="min-h-screen text-gray-800 flex justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-linear-to-tr from-indigo-300 via-gray-400 to-rose-300 shadow-md rounded-2xl p-8 space-y-8">
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Terms & Conditions
        </h1>

        <section className="space-y-4">
          <p className="text-gray-800 text-xl font-bold leading-relaxed">
            Welcome to our Loan Application Portal. By accessing or using this
            platform, you agree to comply with these Terms & Conditions. Please
            read them carefully before submitting any loan application.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Eligibility
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To apply for a loan, you must be at least 18 years old, a resident
            of India, and capable of entering into a legally binding agreement.
            Providing false or misleading information may lead to rejection or
            termination of your application.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Application Process
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All applications are subject to verification and approval by our
            financial partners. Submission of an application does not guarantee
            loan approval. You may be asked to provide additional documents for
            verification.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Data Privacy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We respect your privacy and are committed to protecting your
            personal information. Your data will only be used for processing
            your application and as outlined in our Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Loan Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The loan amount, interest rate, tenure, and repayment schedule will
            be specified in your loan agreement. You are responsible for reading
            and understanding all terms before signing the agreement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are not liable for any loss or damage resulting from delays,
            rejections, or third-party decisions related to your loan
            application or disbursement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms & Conditions may be updated periodically. Continued use
            of the platform after such updates constitutes acceptance of the
            revised terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Contact Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For any queries or concerns regarding these Terms & Conditions,
            please contact our support team at{" "}
            <span className="font-medium text-gray-900">
              support@dummyCrediSure.com
            </span>
            .
          </p>
          <p><b>Note : This is Just a Sample of Loan App not a real application</b></p>
        </section>

        <p className="text-center text-gray-500 text-sm pt-6 border-t">
          © {new Date().getFullYear()} Loan Application Portal. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default TermsCondition;
