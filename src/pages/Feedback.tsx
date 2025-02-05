import React from "react";
import Footer from "@/components/Footer";
import useTheme from "@/hooks/useTheme";
import SEO from "@/components/SEO";
import AdSenseHorizontal from "@/components/AdSenseHorizontal";
import AdSenseResponsive from "@/components/AdSenseResponsive";
import DesktopSidebar from "@/components/DesktopSidebar";

const Feedback = () => {
  useTheme();

  return (
    <>
      <SEO
        title="Feedback - Lumpsum Calculator"
        description="Share your feedback about our Lumpsum Calculator. Help us improve your investment planning experience."
        canonicalUrl="https://lumpsum-calculator.mutualfundjournal.in/feedback"
        robots="max-image-preview:large"
        ogTitle="Feedback - Lumpsum Calculator"
        ogDescription="Share your feedback about our Lumpsum Calculator. Help us improve your investment planning experience."
        ogUrl="https://lumpsum-calculator.mutualfundjournal.in/feedback"
        ogImage="https://lumpsum-calculator.mutualfundjournal.in/banner.jpg"
        ogType="article"
      />
      <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 lg:mr-[300px]">
          <AdSenseHorizontal />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              Feedback
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-lg">
              We value your feedback! Your input helps us improve and provide a better investment planning experience with our Lumpsum Calculator.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                For any queries, feedback, suggestions, or bug reports, please email us at:{" "}
                <a
                  href="mailto:info@mutualfundjournal.in"
                  className="text-primary hover:underline"
                >
                  info@mutualfundjournal.in
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">What We'd Love to Hear About</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>User interface and experience</li>
                <li>Calculator features and functionality</li>
                <li>Accuracy and reliability of calculations</li>
                <li>Additional features you'd like to see</li>
                <li>Any issues or bugs you've encountered</li>
              </ul>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-4">Advertising</h2>
            <p className="mb-4">
              For advertising opportunities, please visit our{" "}
              <a 
                href="https://mutualfundjournal.in/advertise/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Advertise on MFJ
              </a>
              {" "}page.
            </p>
          </div>

          <p>
            We appreciate your support in making this tool better for everyone!
          </p>
          </div>
          <AdSenseResponsive />
          <Footer />
        </div>
        <DesktopSidebar />
      </div>
    </>
  );
};

export default Feedback;
