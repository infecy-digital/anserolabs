import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-blue">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Terms of Service</h1>
                <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-600">
                        By accessing or using the website https://www.anserolabs.com/ and services provided by AnseroLabs ("we," "us," or "our"),
                        you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Overview</h2>
                    <p className="text-gray-600">
                        AnseroLabs provides AI-powered voice agent solutions, including inbound call automation and automated outbound reminders.
                        Our services are designed to assist businesses in managing customer interactions efficiently.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                    <p className="text-gray-600">
                        You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring
                        that your use of automated calling services complies with all applicable local, state, and national laws regarding telemarketing and data privacy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. No Guarantee of Results</h2>
                    <p className="text-gray-600">
                        While we strive to provide high-quality AI solutions, AnseroLabs makes no specific guarantees regarding the outcomes,
                        conversion rates, or business results derived from the use of our bots or automation services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. AI & Automation Disclaimer</h2>
                    <p className="text-gray-600">
                        Our services employ Artificial Intelligence. You understand that AI may occasionally produce inaccurate or unexpected results.
                        AnseroLabs is not liable for any errors, hallucinations, or misunderstandings caused by the AI during voice interactions.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                    <p className="text-gray-600">
                        The service and its original content, features, and functionality are and will remain the exclusive property of AnseroLabs
                        and its licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Tools</h2>
                    <p className="text-gray-600">
                        We may use third-party tools and services (such as ElevenLabs, OpenAI, etc.) to deliver our functionality.
                        Your use of our services is also subject to the terms and policies of these third-party providers where applicable.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                    <p className="text-gray-600">
                        In no event shall AnseroLabs, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect,
                        incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                    <p className="text-gray-600">
                        We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever,
                        including without limitation if you breach the Terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                    <p className="text-gray-600">
                        These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which AnseroLabs operates,
                        without regard to its conflict of law provisions.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                    <p className="text-gray-600">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service
                        after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </section>

                <section className="border-t pt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600">
                        If you have any questions about these Terms, please contact us:
                    </p>
                    <p className="text-blue-600 font-medium mt-2">
                        <a href="mailto:infecy@gmail.com">infecy@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
