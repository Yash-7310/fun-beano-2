import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  MessageSquare,
  UserCheck,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 font-sans antialiased">
      <div className="container mx-auto px-4 pb-16 sm:pb-24 pt-10">
        <div className="max-w-4xl mx-auto">
          {/* 1. Headline and Sub-headline */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🧠</div>
            <h1 className="text-xl sm:text-4xl text-gray-900 leading-tight quicksand-bold bg-gradient-to-b from-orange-500 to-red-500 bg-clip-text text-transparent">
              Stuck on a Business Challenge?
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto quicksand-medium">
              Get a clear, actionable, and completely free plan from our senior
              experts. No strings attached.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side: The Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-100">
              <h2 className="text-2xl text-gray-800 mb-6 quicksand-bold flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-orange-500" />
                Describe Your Challenge
              </h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm  text-gray-700 quicksand-bold"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm  sm:text-sm quicksand-medium"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm  text-gray-700 quicksand-bold"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm  sm:text-sm quicksand-medium"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="challenge"
                    className="block text-sm  text-gray-700 quicksand-bold"
                  >
                    What&apos;s your biggest challenge right now?
                  </label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    rows={6}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm  sm:text-sm quicksand-medium"
                    placeholder="Be as specific as possible. The more details you provide, the better our advice will be."
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      className="focus:ring-yellow-500 accent-primary h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="newsletter"
                      className="font-medium text-gray-700 quicksand-medium"
                    >
                      Yes, send me helpful tips and updates.
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300 quicksand-bold"
                  >
                    Get My Free Advice <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side: Trust & Info */}
            <div className="space-y-8">
              {/* Who Will Be Answering? */}
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center quicksand-bold">
                  <UserCheck className="mr-3 h-6 w-6 text-blue-500" />
                  Your Advice Comes From an Expert
                </h3>
                <div className="flex items-center">
                  <Image
                    width="0"
                    height="0"
                    className="h-16 w-16 rounded-full"
                    src="/"
                    alt="Alex Chen"
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold text-gray-900 quicksand-semibold">
                      Alex Chen, Head of Strategy
                    </p>
                    <p className="text-sm text-gray-500 quicksand-regular">
                      12+ years of experience helping startups scale.
                    </p>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center quicksand-bold">
                  <MessageSquare className="mr-3 h-6 w-6 text-green-500" />
                  How It Works
                </h3>
                <ul className="space-y-3 text-gray-600 quicksand-regular">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold quicksand-semibold">
                        1. Submit Your Question:
                      </span>{" "}
                      Fill out the form with detail.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold quicksand-semibold">
                        2. Expert Review:
                      </span>{" "}
                      A real strategist reviews your submission.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold quicksand-semibold">
                        3. Get Your Plan:
                      </span>{" "}
                      Receive a custom response in 48 hours.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Social Proof */}
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider quicksand-semibold">
                  Trusted By Leading Brands
                </p>
                <div className="flex justify-center items-center space-x-6 mt-4 opacity-60">
                  <p className="font-bold text-lg quicksand-bold">Logo Inc.</p>
                  <p className="font-bold text-lg quicksand-bold">
                    Innovate Co.
                  </p>
                  <p className="font-bold text-lg quicksand-bold">
                    Solutions Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 quicksand-bold">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="p-4 border rounded-lg bg-white shadow-sm">
                <summary className="font-semibold cursor-pointer quicksand-semibold">
                  Is this really free?
                </summary>
                <p className="mt-2 text-gray-600 quicksand-regular">
                  Yes, 100% free. Our goal is to provide genuine value. If our
                  advice helps, we hope you&apos;ll consider our paid services
                  in the future, but there&apos;s no obligation whatsoever.
                </p>
              </details>
              <details className="p-4 border rounded-lg bg-white shadow-sm">
                <summary className="font-semibold cursor-pointer quicksand-semibold">
                  How long until I get a response?
                </summary>
                <p className="mt-2 text-gray-600 quicksand-regular">
                  We personally respond to every inquiry. Please allow up to 48
                  business hours for our experts to craft a thoughtful and
                  actionable response for you.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
