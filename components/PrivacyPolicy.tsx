import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-blue">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Privacy Policy</h1>
                <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                    <p className="text-gray-600">
                        Welcome to AnseroLabs ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information.
                        This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website https://www.anserolabs.com/
                        or use our AI voice agent and call automation services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                    <p className="text-gray-600 mb-2">We collect information that you provide to us directly or automatically when you use our services:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and business details provided via contact forms or booking flows.</li>
                        <li><strong>Voice Data:</strong> Audio recordings and transcripts from interactions with our AI voice agents (for service delivery and quality assurance).</li>
                        <li><strong>Usage Data:</strong> Information about how you access our website, including IP address, browser type, and device information.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Information</h2>
                    <p className="text-gray-600 mb-2">We use your information to:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Provide and maintain our AI voice agent services.</li>
                        <li>Process inbound and automated outbound calls as requested.</li>
                        <li>Schedule discovery calls and manage appointments.</li>
                        <li>Improve our AI models and user experience.</li>
                        <li>Communicate with you regarding updates, support, or inquiries.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. AI Voice Interactions & Call Processing</h2>
                    <p className="text-gray-600">
                        Our services utilize Artificial Intelligence to process voice interactions. By using our services, you acknowledge that calls may be recorded
                        and processed by our AI systems and third-party AI providers (e.g., ElevenLabs, OpenAI, Google) solely for the purpose of generating intelligent responses
                        and executing call workflows. We do not use your proprietary business data to train foundational public models without your consent.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies & Tracking</h2>
                    <p className="text-gray-600">
                        We use cookies and similar tracking technologies to track activity on our website and hold certain information.
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
                    <p className="text-gray-600">
                        We may share information with trusted third-party service providers who assist us in operating our website and conducting our business,
                        such as hosting providers, AI model providers, and CRM systems. These parties agree to keep this information confidential.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
                    <p className="text-gray-600">
                        We implement industry-standard security measures to maintain the safety of your personal information. However, no method of transmission
                        over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
                    <p className="text-gray-600">
                        We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy,
                        and to the extent necessary to comply with our legal obligations.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. User Rights</h2>
                    <p className="text-gray-600">
                        Depending on your location, you may have rights regarding your data, including the right to access, correct, or delete your personal Data.
                        Contact us to exercise these rights.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children’s Privacy</h2>
                    <p className="text-gray-600">
                        Our services are not intended for use by children under the age of 18 ("Children"). We do not knowingly collect personally identifiable
                        information from children.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
                    <p className="text-gray-600">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </section>

                <section className="border-t pt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600">
                        If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <p className="text-blue-600 font-medium mt-2">
                        <a href="mailto:infecy@gmail.com">infecy@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
